import React from "react";
import google from "../assets/1.png";
import meta from "../assets/2.png";
import apple from "../assets/3.png";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <div className="bg-[#F2F2F2] h-screen flex justify-center items-center rounded ">
      <div className="w-[95%] max-w-[555px] min-h-[600px] bg-white border shadow flex-col p-8 lgl:p-16">
        <h1 className="text-left inter text-2xl font-bold text-[#292929] ">
          Back to your digital life
        </h1>
        <p className="text-left ibm-plex-sans-thin text-base mt-2">
          Choose one of the option to go
        </p>

        <div className="flex flex-col justify-center mt-9 gap-3">
          <input
            type="text"
            className="w-[90%] py-2 p-4 inter text-bsse  border outline-blue-400 shadow-sm rounded-md "
            placeholder="username"
          />
          <input
            type="text"
            className="w-[90%] py-2 p-4 border inter outline-blue-400 text-base shadow-sm rounded-md"
            placeholder="password"
          />
        </div>

        <div className="mt-10">
          <p className="text-base inter ">Or continue with</p>
        </div>

        <div className="flex mt-10 justify-start gap-8 items-center ">
          <button className="py-1 w-[25%] flex items-center justify-center bg-[#F7F7F7] ">
            <img src={google} className="max-w-full" />
          </button>
          <button className="py-1 w-[25%] flex items-center justify-center bg-[#F7F7F7] ">
            <img src={apple} className="max-w-full" />
          </button>
          <button className=" flex py-1 w-[25%] items-center justify-center bg-[#F7F7F7] ">
            <img src={meta} className="max-w-full" />
          </button>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <button className="bg-[#0366FF] w-full max-w-[312px]  py-3 rounded-md inter text-white">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
