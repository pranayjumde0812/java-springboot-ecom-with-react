package com.ecommerce.app.security;

import com.ecommerce.app.security.jwt.AuthEntryPointJwt;
import com.ecommerce.app.security.jwt.AuthTokenFilter;
import com.ecommerce.app.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
//@EnableMethodSecurity // Uncomment this if you want to use @PreAuthorize annotations on controllers
public class WebSecurityConfig {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    /**
     * Bean definition for the JWT Authentication Filter.
     * This filter will intercept every request to validate the JWT token present in the header.
     */
    @Bean
    public AuthTokenFilter authenticationJwtFilter() {
        return new AuthTokenFilter();
    }

    /**
     * Configures the AuthenticationProvider.
     * We use DaoAuthenticationProvider, which retrieves user details from the database
     * (via UserDetailsService) and verifies the password using the PasswordEncoder.
     */
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    /**
     * Exposes the AuthenticationManager bean.
     * This is the core interface used by Spring Security to process authentication requests.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    /**
     * Bean for Password Encoding.
     * BCrypt is a strong hashing function used to encrypt passwords before storing them in the database.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Configures the main Security Filter Chain.
     * This method defines the security rules: which endpoints are public, how sessions are managed,
     * and how exceptions are handled.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // 1. Disable CSRF (Cross-Site Request Forgery) protection.
                // This is standard for stateless APIs that use tokens instead of cookies.
                .csrf(AbstractHttpConfigurer::disable)

                // 2. Configure Exception Handling.
                // If a user tries to access a resource without being authenticated, 'unauthorizedHandler' is triggered.
                .exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))

                // 3. Set Session Management to STATELESS.
                // Spring Security will not create an HTTP session or store user state.
                // Every request must provide the JWT token.
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                // 4. Define Authorization Rules (URL Matching).
                .authorizeHttpRequests((auth) -> auth
                        // Allow public access to authentication endpoints (login, register)
                        .requestMatchers("/api/auth/**").permitAll()

                        // Allow public access to Swagger UI and API documentation
                        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()

                        // Allow public access to public API endpoints
                        .requestMatchers("/api/public/**").permitAll()

                        // WARNING: Allowing all admin access is dangerous.
                        // In production, this should be .hasRole("ADMIN") or similar.
                        .requestMatchers("/api/admin/**").permitAll()

                        // Allow test endpoints
                        .requestMatchers("/api/test/**").permitAll()

                        // Allow access to static images
                        .requestMatchers("/images/**").permitAll()

                        // All other requests require the user to be authenticated
                        .anyRequest()
                        .authenticated()
                );

        // 5. Register the authentication provider defined above
        http.authenticationProvider(authenticationProvider());

        // 6. Add the JWT Token filter before the standard UsernamePasswordAuthenticationFilter.
        // This ensures the token is checked and the user is authenticated *before* Spring tries to do it manually.
        http.addFilterBefore(authenticationJwtFilter(), UsernamePasswordAuthenticationFilter.class);


        return http.build();
    }

    /**
     * Configures Web Security Customizer.
     * This allows specific requests to completely bypass the Spring Security filter chain.
     * This is useful for static resources, H2 console, or legacy Swagger paths that shouldn't trigger security logic.
     */
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .requestMatchers(
                        "/v2/api-docs",
                        "/configuration/ui",
                        "/swagger-resources/**",
                        "/configuration/security",
                        "/swagger-ui.html",
                        "/webjars/**",
                        "/h2-console/**"
                );
    }
}