import React from "react";
import { IoIosSave } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

const CreateExperience = () => {
  

  return (
    <div>
      <div className="mx-auto   max-w-[900px] w-[95%]">
        <h1 className="text-xl mt-10 text-slate-400 font-semibold">
          Experience
        </h1>

        <form action="" className="h-screen mt-5 flex flex-col space-y-4">
          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Tittle
            </label>
            <input
              type="text"
              name="title"
             
              placeholder="Name"
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Company
            </label>
            <input
              type="text"
              name="name"
              // value={name}
              // onChange={onChange}
              placeholder="Name"
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="w-full flex-col flex">
            <label className="text-base text-slate-400 font-semibold">
              Description
            </label>
            <textarea
              // onChange={onChange}
              // name="about"
              // value={about}
              rows={6}
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="flex gap-4 ">
            <div className="w-full flex flex-col">
              <label className="text-base text-slate-400 font-semibold">
                Start date
              </label>
              <input
                className="bg-[#1F2937] px-2 w-full text-white py-2 rounded-lg mt-2 border outline-none"
                type="text"
              />
            </div>

            <div className="w-full  flex flex-col">
              <label className="text-base text-slate-400 font-semibold">
                End date
              </label>

              <input
                className="bg-[#1F2937] w-full px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                type="text"
              />
            </div>
          </div>

          <div className=" py-7 flex justify-end">
            <button
              type="submit"
              className="bg-[#4F46E5] px-5 text-white font-semibold rounded py-2 flex items-center"
            >
              <IoIosSave className="text-white" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExperience;
