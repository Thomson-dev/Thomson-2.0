import { FaArrowRight } from "react-icons/fa";



const experiences = [
  {
    title: "Data Analyst - Product",
    company: "GoLemon",
    duration: "2024 - Present",
    description:
      "Boosted decisions with data insights, A/B testing, product recommendations, web analysis and scrapping,"
  },
  {
    title: "Data Analyst",
    company: "ShapShap Tech",
    duration: "2022 - 2022",
    description:
      "Analyzed rider routes, provided regular reports using Excel, SQL, and PowerPoint, and improved operational efficiency by 15%.",
  },
  {
    title: "Data Analyst",
    company: "Brilliant Coats Industry",
    duration: "2019 - 2022",
    description:
      "Implemented robust data management practices, contributing to the overall accuracy and reliability of client account information.",
  },
];
const Expericence = () => {
  return (
    <div className="lgl:px-8  px-5 py-6 mt-8 w-full">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        Expericence
      </h2>
      <hr className="w-[8%] border-[1.4px] mb-6   border-green-500  " />

      {experiences.map((item) => (
        <div className=" flex  flex-col gap-0">
          <div className="flex gap-4  relative">
            <span className="absolute top-2 l-0 ">
              <FaArrowRight className="text-green-500" />{" "}
            </span>
            <hr className="w-[2px] h-40 bg-green-500 border-0 " />
            <div className=" space-y-2 pl-3">
              <h1 className="averia-serif-libre-bold text-xl ">{item.title}</h1>
              <p className="poppins-regular text-[#646464] text-base ">
                {" "}
                {item.company} | {item.duration}
              </p>
              <p className="poppins-regular text-[#646464] text-base">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expericence;

{
}
