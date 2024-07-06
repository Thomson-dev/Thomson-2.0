import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { ExpeienceInfo } from "../features/Login/Experience";

// const experiences = [
//   {
//     title: "Data Analyst - Product",
//     company: "GoLemon",
//     duration: "2024 - Present",
//     description:
//       "Boosted decisions with data insights, A/B testing, product recommendations, web analysis and scrapping,",
//   },
//   {
//     title: "Data Analyst",
//     company: "ShapShap Tech",
//     duration: "2022 - 2022",
//     description:
//       "Analyzed rider routes, provided regular reports using Excel, SQL, and PowerPoint, and improved operational efficiency by 15%.",
//   },
//   {
//     title: "Data Analyst",
//     company: "Brilliant Coats Industry",
//     duration: "2019 - 2022",
//     description:
//       "Implemented robust data management practices, contributing to the overall accuracy and reliability of client account information.",
//   },
// ];
const Expericence = () => {
  const { experience, isLoading, isError, isSuccess, message } = useSelector(
        //@ts-ignore
    (state) => state.experience
  );

  const { data } = experience;
  // console.log(data)

  const dispatch = useDispatch();

  useEffect(() => {
        //@ts-ignore
    dispatch(ExpeienceInfo());
  }, [dispatch]);

  return (
<div className="lgl:px-8  px-3 py-6 mt-8 w-full">
  <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
    Experience
  </h2>
  <hr className="lgl:w-[8%] w-[10%] border-[1.4px] mb-6   border-green-500  " />
  
  {Array.isArray(data) ? 
    data.map((item, index) => (
      <div key={index} className="flex  flex-col  gap-y-7 ">
        <div className="flex gap-4  relative">
          <span className="absolute top-2 l-0 ">
            <FaArrowRight className="text-green-500" />{" "}
          </span>
          <hr className="w-[2px] h-44 bg-green-500 border-0 " />
          <div className=" space-y-2 pl-3">
            <h1 className="averia-serif-libre-bold mt-2 lgl:mt-0 text-xl ">
              {item.title}
            </h1>
            <p className="poppins-regular text-[#646464] text-base ">
              {item.company} | {item.startDate} - {item.endDate}
            </p>
            <p className="poppins-regular text-[#646464] text-base ">
             {item.description}
            </p>
          </div>
        </div>
      </div>
    ))
    : <p>Data is not available</p>
  }
</div>
  );
};

export default Expericence;

{
}
