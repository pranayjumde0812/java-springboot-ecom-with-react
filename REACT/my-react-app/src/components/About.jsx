function About() {
  const name = "Pranay Jumde";
  const profession = "Full Stack Developer";
  
  return (
    <>
      <section id="about" className="about-section">
        <h2>About me</h2>
        <p>
          Hello! I am {name}, a passinate {profession}. I love building web
          application that solves real world user problems.
        </p>
      </section>
    </>
  );
}
export default About;
