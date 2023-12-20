import React from "react";
import "./App.css";
import NavBar from "./NavBar"; 
import Content from "./content";

function App() {
  return (
    <>
      <div className="w-full h-full">
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
