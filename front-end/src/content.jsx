import React from "react";
import "./App.css";
import logo from "./assets/judul.png";

const Content = () => {
  return (
    <>
      <div className="fixed w-full h-full m-0  bg-body pt-14 mt-4 ">
        <div className="mx-auto w-full">
          <div className=" bg-product mt-14 container w-128 h-64 mx-auto"></div>
          <div className="py-8 px-8">
            <h1 className="font-bold text-primary">
              Log in to Shopifye for easy access to dresses, footwear,
              accessories, annd bags. Your go-to spot for effort less style
              awaits
            </h1>
          </div>
        </div>
        <div className="mx-auto px-32">
          <div className="bg-primary rounded-md w-full">
            <img src={logo} alt="Logo" className="mx-auto px-12 py-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
