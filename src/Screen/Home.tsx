import React, { useState } from "react";
import Left from "../Component/Left";
import profile from "../assets/thomson.jpg";
import Right from "../Component/Right";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [text, helper] = useTypewriter({
    words: ["Frontend developer", "Fullstack developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="bg-[#F2F2F2]">
      <div className="lgl:max-w-[1200px] xs:hidden  lgl:block   mx-auto w-full  h-full">
        <div>
          <Left />
        </div>

        <div className="xl:ml-96 lgl:ml-[22rem]">
          <Right />
        </div>
      </div>
      {/* Mobile */}
      <div className="w-[100%] mx-auto flex space-y-10 bg-white  max-w-[768px] lgl:hidden flex-col   ">
        <div className=" mx-6 mt-5 ">
          <img
            src={profile}
            alt=""
            className="max-w-full xl:max-w-full  h-auto"
          />
          <div className="">
            <h1 className="averia-serif-libre-bold mt-6 text-4xl text-center text-[#141414]   ">
              Thomson
            </h1>
            <div className="text-center">
              <span className="averia-serif-libre-semibold  text-[#646464] text-2xl">
                {text}
              </span>
            </div>
          </div>
        </div>


        <div className="   mb-10 flex flex-col space-y-2 justify-center   items-center  w-[100%] ">
          <div className="flex gap-5 justify-center items-center">
            <FaGithub className=" text-xl text-green-500 " />
            <FaLinkedinIn className=" text-xl text-green-500" />
            <FaTwitter className=" text-xl text-green-500" />
          </div>

          <div className="flex justify-center  gap-2 w-full items-center lgl:mt-10">
            <button className="poppins-regular  border-r  py-2 text-[#646464] mt-4 w-[40%] text-base ">
              Download CV
            </button>{" "}
            <button className="poppins-regular text-base  text-center mt-4 text-[#646464] py-2 w-[40%] ">
              Login
            </button>
          </div>
        </div>

        <div className="mx-auto w-[95%] ">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
