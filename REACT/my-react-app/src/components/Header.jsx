function Header() {
  const name = "Pranay Jumde";
  const profession = "Full Stack Developer";
  return (
    <>
      <div>
        <header className="header">
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
