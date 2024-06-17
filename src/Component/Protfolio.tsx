// type Props = {
//   id: number;
//   name: string;
//   description: string;
// };

import project1 from "../assets/a--b testing.png";
import project2 from "../assets/cltv.png";
import project3 from "../assets/crypto reports.png";
import project4 from "../assets/revenue dashboard.png";

import { LiaLaptopCodeSolid } from "react-icons/lia";
import { CiMobile1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;

  // Add more properties as needed
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "This is project 1",
    image: project1,
    category: "DataAnalysis",
  },

  {
    id: 2,
    name: "Project 1",
    description: "This is project 1",
    image: project2,
    category: "Dashboard",
  },

  {
    id: 3,
    name: "Project 1",
    description: "This is project 1",
    image: project3,
    category: "DataAnalysis",
  },
  {
    id: 4,
    name: "Project 1",
    description: "This is project 1",
    image: project4,
    category: "Dashboard ",
  },
];

const Allproject = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center mt-5">
      {projects.map((item) => (
        <div className="">
          <img src={item.image} className="max-w-[95%] h-auto" />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

const Dashboards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center mt-5">
      {projects
        .filter((item) => item.category.trim() === "Dashboard")
        .map((item) => (
          <div className="">
            <img src={item.image} className="max-w-[95%] h-auto" />
            <h2>{item.name}</h2>
          </div>
        ))}
    </div>
  );
};

const DataAnalysis = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center mt-5">
      {projects
        .filter((item) => item.category.trim() === "DataAnalysis")
        .map((item) => (
          <div className="">
            <img src={item.image} className="max-w-[95%] h-auto" />
            <h2>{item.name}</h2>
          </div>
        ))}
    </div>
  );
};

const Protfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="lgl:px-8 px-5 py-6 mt-8">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        Protfolio
      </h2>
      <hr className="w-[8%] border-[1.4px] mb-6   border-green-500  " />

      <div className="flex  gap-x-2  mx-auto lgl:max-w-[75%]">
        <button
          onClick={() => toggleTab(1)}
          className= {`border border-green-500  poppins-regular hover:bg-green-500 lgl:text-base text-sm font-bold hover:text-[#212121] py-1 lgl:py-2 w-[34%]  text-green-500 ${toggleState === 1 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center justify-center gap-x-2">
            <FaStar />
            All
          </div>
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-1 lgl:py-2 text-green-500 ${toggleState === 2 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center justify-center gap-x-2">
            <LiaLaptopCodeSolid className="text-2xl" />
            Data Analysis
          </div>
        </button>
        <button
          onClick={() => toggleTab(3)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-1 lgl:py-2 text-green-500 ${toggleState === 3 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center gap-x-1 justify-center">
            <CiMobile1 className="text-xl" />
            Dashboards & Reports
          </div>
        </button>
      </div>

      <div className="">
        <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
          <Allproject />
        </div>

        <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
          <Dashboards />
        </div>

        <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
          <DataAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
