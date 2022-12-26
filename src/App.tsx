import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Posts/Post";
// import useToggle from "./customHooks/useToggle";

function App() {
  // const [toggle, setToggle] = useToggle(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Post />
        {/* <button
          style={{ background: `${toggle ? "green" : "red"}` }}
          onClick={setToggle}
        >
          change color
        </button> */}
      </header>
    </div>
  );
}

export default App;
