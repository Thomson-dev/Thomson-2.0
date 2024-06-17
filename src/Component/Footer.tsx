import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="lgl:px-8  flex  flex-col items-center space-y-6 bg-black justify-center text-white py-12 mt-6 w-full">
      <div className="w-[30%] ">
        <div className="flex justify-center items-center gap-4 ">
          <div className="border-green-500 border p-3">
            <FaTwitter className="text-green-500 text-lg" />
          </div>
          <div className="border border-green-500  p-3">
            <FaLinkedinIn className="text-green-500 text-lg" />
          </div>

          <div className="border border-green-500  p-3">
            <FaGithub className="text-green-500 text-lg" />
          </div>
        </div>
      </div>
      <p className="text-white">
        © All Rights Reserved. Designed by{" "}
        <span className="text-green-500">Thomson </span>{" "}
      </p>
    </div>
  );
};

export default Footer;
