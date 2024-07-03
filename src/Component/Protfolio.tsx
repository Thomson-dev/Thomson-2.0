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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproject } from "../features/Login/Project";
import Loading from "./Loading";

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
    description: "This is project 1. It showcases my skills in React ",
    image: project1,
    category: "web design",
  },

  {
    id: 2,
    name: "Project 2",
    description:
      "This is project 1. It showcases my skills in React development,  ",
    image: project2,
    category: "web app",
  },

  {
    id: 3,
    name: "Project 2",
    description:
      "This is project 1. It showcases my skills in React development,  ",
    image: project3,
    category: "web design",
  },
  {
    id: 4,
    name: "Project 1",
    description:
      "This is project 1. It showcases my skills in React development, ",
    image: project4,
    category: "web app",
  },
];

const Allproject = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     //@ts-ignore
    dispatch(getproject());
  }, [dispatch]);
  const { project, isLoading, isError, isSuccess, message } = useSelector(
     //@ts-ignore
    (state) => state.project
  );


  return (
    <div className="grid lgl:grid-cols-2 grid-cols-1 gap-10 items-center mt-5">
      {project.data &&
       //@ts-ignore
        project.data.map((item) => (
          <div className="">
            <img src={item.image} className="max-w-[100%] h-auto" />
            <div className="mt-5">
              <h1 className=" averia-serif-libre-bold mt-4  text-lg ">
                {item.name}
              </h1>
              <p className="poppins-regular text-base">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const Dashboards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     //@ts-ignore
    dispatch(getproject());
  }, [dispatch]);

  const { project, isLoading, isError, isSuccess, message } = useSelector(
     //@ts-ignore
    (state) => state.project
  );
  return (
    <div className="grid lgl:grid-cols-2 grid-cols-1 gap-7 items-center mt-5">
      {project.data &&
        project.data  //@ts-ignore
          .filter((item) => item.category.trim() === "web design")
           //@ts-ignore
          .map((item) => (
            <div className="">
              <img src={item.image} className="max-w-[100%] h-auto" />
              <div className="mt-5">
                <h1 className=" averia-serif-libre-bold mt-4  text-lg ">
                  {item.name}
                </h1>
                <p className="poppins-regular text-base">{item.description}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

const DataAnalysis = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     //@ts-ignore
    dispatch(getproject());
  }, [dispatch]);

  const { project, isLoading, isError, isSuccess, message } = useSelector(
     //@ts-ignore
    (state) => state.project
  );

  return (
    <div className="grid lgl:grid-cols-2 grid-cols-1  gap-7 items-center mt-5">
      {project.data &&
        project.data
         //@ts-ignore
          .filter((item) => item.category.trim() === "web app")
           //@ts-ignore
          .map((item) => (
            <div className="">
              <img src={item.image} className="max-w-[100%] h-auto" />
              <div className="mt-5">
                <h1 className=" averia-serif-libre-bold mt-4  text-lg ">
                  {item.name}
                </h1>
                <p className="poppins-regular text-base">{item.description}</p>
              </div>
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
      <h2 className="text-3xl  font-bold py-2 averia-serif-libre-bold font-serif  ">
        Protfolio
      </h2>
      <hr className="lgl:w-[8%] w-[10%] border-[1.4px] mb-6   border-green-500  " />

      <div className="flex  gap-2 max-w-[250px] mx-auto flex-wrap lgl:max-w-[75%]">
        <div className="flex w-full gap-2">
          <button
            onClick={() => toggleTab(1)}
            className={`border border-green-500  poppins-regular hover:bg-green-500 lgl:text-base text-sm font-bold hover:text-[#212121] py-2 lgl:py-2 w-[34%]  text-green-500 ${
              toggleState === 1 ? "bg-green-500 black" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-x-2">
              <FaStar />
              All
            </div>
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-2 lgl:py-2 text-green-500 ${
              toggleState === 2 ? "bg-green-500 black" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-x-2">
              <LiaLaptopCodeSolid className="text-2xl" />
              Web Design
            </div>
          </button>
        </div>
        <button
          onClick={() => toggleTab(3)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-2 lgl:py-2 text-green-500 ${
            toggleState === 3 ? "bg-green-500 black" : ""
          }`}
        >
          <div className="flex items-center gap-x-1 justify-center">
            <CiMobile1 className="text-xl" />
            Web App
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
