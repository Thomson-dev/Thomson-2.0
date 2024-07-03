import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import gif from "../assets/1.gif"; // import gif from "../assets/1.gif";
import { createproject } from "../features/Login/Project";
import { toast } from "react-toastify";



const Project = () => {
    const { project, isLoading, isError, isSuccess, message } = useSelector(
             //@ts-ignore
        (state) => state.project
    );
  const [imageSrc, setImageSrc] = useState();


  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

    //@ts-ignore
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  }  //@ts-ignore
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
            //@ts-ignore
        setImageSrc(reader.result);
      };
    } else {
             //@ts-ignore
      setImageSrc("");
    }
  };

  const { title, description, category } = formData;
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const projectData = {
      name: title,
      description,
      category,
      image: imageSrc,
    };
        //@ts-ignore
    dispatch(createproject(projectData));

    if (isError) {
        toast.error(message);
      }
  
      if (isSuccess) {
        toast.success(message);
      }
  };
  
  return (

      <div className="mx-auto    max-w-[900px] w-[95%]">
        <h1 className="text-xl mt-10 text-slate-400 font-semibold">Projects</h1>

        <form
          className=" mt-5   flex flex-col space-y-4"
           //@ts-ignore
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-base text-slate-400 font-semibold">
              Link
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
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

          <div className="flex flex-col">
            <label className="text-base text-slate-400 font-semibold">
              Category
            </label>
            <select
              name="category"
                  //@ts-ignore
              onChange={onChange}
              value={category}
              className="bg-[#1F2937]  py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
              id=""
            >
              <option>web design</option>
              <option>web app</option>
            </select>
          </div>
          <div className="mt-10   ">
            <h3 className=" font-semibold text-slate-400 text-base">Upload Project</h3>
            <div className="mt-5  ">
              {/* Image preview */}
              {imageSrc && (
                <img src={imageSrc} alt="Preview" className="max-w-full h-52" />
              )}

              {/* File input for image upload */}
              <input
                type="file"
                accept="image/*"
                className="mt-2 w-24 md:w-full"
                onChange={handleProductImageUpload}
                style={{ marginBottom: "20px" }}
              />

              {/* Display message if no image is selected */}
              {!imageSrc && <p>Please select an image for upload.</p>}
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
    
  );
};

export default Project;
