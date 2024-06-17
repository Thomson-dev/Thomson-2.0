import profile from "../assets/thomson.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Frontend developer", "Fullstack developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className={`lgl:max-w-[350px] flex justify-between flex-col border    bg-white  pt-6  h-screen fixed 
       `}
    >
      <div className=" mx-6 ">
        <img
          src={profile}
          alt=""
          className="max-w-full xl:max-w-full  h-auto"
        />
        <h1 className="averia-serif-libre-bold mt-6 text-4xl text-center text-[#141414]   ">
          Thomson
        </h1>
        <div className="text-center">
          <span className="averia-serif-libre-semibold  text-[#646464] text-2xl">
            {text}
          </span>
        </div>
      </div>

      <div className="   mb-10 flex flex-col justify-center h-32  items-center items mx- auto w-[100%] ">
        <div className="flex gap-5 justify-center items-center">
          <FaGithub className=" text-xl text-green-500 " />
          <FaLinkedinIn className=" text-xl text-green-500" />
          <FaTwitter className=" text-xl text-green-500" />
        </div>

        <div className="flex justify-center gap-2 w-full items-center mt-10">
          <button className="poppins-regular  border-r  py-2 text-[#646464] w-[45%] text-base ">
            Download CV
          </button>{" "}
          <button className="poppins-regular text-base  text-center text-[#646464] py-2 w-[20%] ">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
