import React from "react";
import Left from "../Component/Left";
import Right from "../Component/Right";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div className="  bg-[#F2F2F2]  border border-black ">
      <div className="flex flex-col md:flex-row mdl:mx-auto space-x-8 w-full  lgl:max-w-[1200px] ">
        <div className=" md:w-[30%] w-[100%]    lgl:max-w-[300px] max-w-[350px]  flex justify-between flex-col  z-30 bg-white  lgl:mt-7  h-screen fixed  ">
          <Left />
        </div>

        <div className="lgl:w-[70%] w-[100%] mdl:w-[90%]  ">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
