import "./App.css";

// function WelcomeMessage(name) {
//   return <h1>Hello, {name}</h1>;
// }

// function Greeting(isMorning) {
//   if (isMorning) {
//     return <h1>Good Morning!</h1>;
//   }
//   return <h1>Good Evening!</h1>;
// }

// function AlertBox(message) {
//   return <div>{message}</div>;
// }

// function showAlert(condition, message) {
//   if (condition) {
//     // return <div>{message}</div>;
//     return AlertBox(message);
//   }
//   return null;
// }

// function App() {
//   // // const name = "Pranay";
//   // // const buttonLabel = "Click me";
//   // // const imageUrl = "https://placehold.co/100x100";
//   // // return (
//   // //   <>
//   // //     {/* <div className="">
//   // //       <h1 className="greeting">Hello, {name}</h1>
//   // //       <button
//   // //         style={{
//   // //           backgroundColor: "green",
//   // //           color: "white",
//   // //         }}
//   // //       >
//   // //         {buttonLabel}
//   // //       </button>
//   // //       <button onClick={() => alert(`Button Clicked!`)}>Alert me!</button>
//   // //       <img src={imageUrl} alt="Dynamic image" />
//   // //     </div> */}
//   // //   </>
//   // // );
//   // const isLoggedIn = true;
//   // // Conditional Rendering using if-else
//   // /*
//   // if (isLoggedIn) {
//   //   return <h1>Welcome back, User!</h1>;
//   // }
//   // return <h1>Please log in.</h1>;
//   // */
//   // // Conditional Rendering using Ternary Operator
//   // // const element = <h1>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h1>;
//   // // return (
//   // //   <>
//   // //     <div>{element}</div>
//   // //   </>
//   // // );
//   // // Conditional Rendering using Logical AND (&&) Operator
//   // const element = <h1>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h1>;
//   // const messages = ["1", "2", "3"];
//   // return (
//   //   <>
//   //     <div>
//   //       {/* {element}
//   //       {messages.length > 0 && (
//   //         <h2>You have {messages.length} unread messages</h2>
//   //       )} */}
//   //       {element}
//   //       {isLoggedIn && <h2>You have {messages.length} new messages.</h2>}
//   //     </div>
//   //   </>
//   // );

//   const now = new Date();
//   const isMorning = now.getHours() < 12;
//   return (
//     <>
//       <div>
//         {/* {WelcomeMessage("Pranay")} */}
//         {/* <h1>Welcome to the App!</h1> */}

//         {/* {Greeting(isMorning)} */}

//         {showAlert(true, "This is an important alert message!")}
//       </div>
//     </>
//   );
// }

function App() {
  const name = "Pranay Jumde";
  const profession = "Full Stack Developer";

  const projects = [
    {
      title: "Project A",
      description: "Description of Project A",
      link: "#",
    },
    {
      title: "Project B",
      description: "Description of Project B",
      link: "#",
    },
    {
      title: "Project C",
      description: "Description of Project C",
      link: "#",
    },
  ];

  return (
    <>
      <div className="App">
        <header className="header">
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About me</h2>
          <p>
            Hello! I am {name}, a passinate {profession}. I love building web
            application that solves real world user problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="projects-item">
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreference"
                  >
                    Link
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you would like toget in touch feel free to email me at:{" "}
            <a href="mailto:pranayjumde13@gmail.com">pranayjumde13@gmail.com</a>
          </p>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 {name}. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
