import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";

import { addScript } from "./utils/";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  React.useEffect(() => {
    addScript("/main.bundle.js");
    document.title = "My very awesome main project";
  }, []);

  return (
    <div className="App main-app">
      <Sidebar></Sidebar>
      <main>
        <Header></Header>

        <div id="agent-stockist-root"></div>
      </main>
    </div>
  );
}

export default App;
