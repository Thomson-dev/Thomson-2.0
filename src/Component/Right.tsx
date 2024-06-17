import React from "react";
import About from "./About";
import Skills from "./Skills";
import Expericence from "./Expericence";
import Protfolio from "./Protfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {};

const Right = (props: Props) => {
  return (
   
      <div className=" lgl:p-7   ">
        <div className="rounded h-full border  bg-white">
          <About />
          <Skills />
          <Expericence />
          <Protfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
   
  );
};

export default Right;
