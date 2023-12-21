import React from "react";
import "./App.css";
import NavBar from "./NavBar"; 
import Content from "./content";
import Footer from "./footer";

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
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
