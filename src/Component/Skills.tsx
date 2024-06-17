



const Skills = () => {
  return (
    <div className="lgl:px-10 px-5 mt-8 py-6">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        Skills
      </h2>
      <hr className="w-[8%] border-[1.4px]    border-green-500  " />

      <div className="container space-x-7 ">
        <div className="w-full">
          <div className="skill-box">
            <span className="title poppins-regular text-[#646464]  text-[1rem] ">HTML</span>
            <div className="skill-bar ">
              <span className="skill-per bg-green-400  html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title poppins-regular text-[#646464]  text-[1rem] " >CSS</span>
            <div className="skill-bar">
              <span className="skill-per bg-yellow-400 css">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title poppins-regular text-[#646464]  text-[1rem] ">JavaScript</span>
            <div className="skill-bar">
              <span className="skill-per bg-red-600 javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
        <div className="skill-box">
          <span className="title poppins-regular text-[#646464]  text-[1rem]">NodeJS</span>
          <div className="skill-bar">
            <span className="skill-per bg-black nodejs">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title poppins-regular text-[#646464]  text-[1rem] ">ReactJS</span>
          <div className="skill-bar">
            <span className="skill-per bg-yellow-500 reactjs">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title poppins-regular text-[#646464]  text-[1rem]">ExpressJS</span>
          <div className="skill-bar">
            <span className="skill-per bg-blue-400 expressjs">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Skills;
