import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { createExperience } from "../features/Login/Experience";
import { toast } from "react-toastify";

const CreateExperience = () => {
  const dispatch = useDispatch();

  const { experience, isLoading, isError, isSuccess, message } = useSelector(
     //@ts-ignore
    (state) => state.experience
  );

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const { title, company, description, startDate, endDate } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const experienceData = {
      title,
      company,
      description,
      startDate,
      endDate,
    };
    //@ts-ignore
    dispatch(createExperience(experienceData));
    
    if (isError) {
      toast.error(message);
    }

    
    if (isSuccess) {
      toast.success("Created successfully");
    }
    if (isSuccess) {
      toast.success(message);
    }
  };

  return (
    <div>
      <div className="mx-auto   max-w-[900px] w-[95%]">
        <h1 className="text-xl mt-10 text-slate-400 font-semibold">
          Experience
        </h1>

        <form
          className="h-screen mt-5 flex flex-col space-y-4"
              //@ts-ignore
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Title"
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={onChange}
              placeholder="Company"
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="w-full flex-col flex">
            <label className="text-base text-slate-400 font-semibold">
              Description
            </label>
            <textarea
                //@ts-ignore
              onChange={onChange}
              name="description"
              value={description}
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
                onChange={onChange}
                name="startDate"
                value={startDate}
              />
            </div>

            <div className="w-full  flex flex-col">
              <label className="text-base text-slate-400 font-semibold">
                End date
              </label>

              <input
                onChange={onChange}
                name="endDate"
                value={endDate}
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
