import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

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
  return (
    <>
      <div className="App">
        {/* Header Component */}
        <Header />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <ProjectList />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
