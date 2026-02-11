package com.ecommerce.app.service;

import com.ecommerce.app.model.User;
import com.ecommerce.app.security.request.SignupRequest;

public interface AuthService {

    User registerUser(SignupRequest signupRequest);

    boolean existByUserName(String username);

    boolean existByEmail(String email);
}
