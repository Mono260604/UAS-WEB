import React from "react";
import "./App.css";
import NavBar from "./NavBar"; 
import Content from "./content";

function App() {
  return (
    <>
      <div className="bg-body">
        <div>
          <NavBar />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
