import React, { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../features/Login/LoginSlice";
import Loading from "../Component/Loading";
import { updateUserDetails, userInfo } from "../features/Login/userDetails";
import { toast } from "react-toastify";

import CreateExperience from "../Component/CreateExperience";
import Project from "../Component/Project";

const Dashboard = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
        //@ts-ignore
    (state) => state.userDetails
  );

  const [imageSrc, setImageSrc] = useState(
    "https://elstar.themenate.net/img/avatars/thumb-3.jpg"
  );

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

 


  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phone,
    address: user.address,
    about: user.about,
    email: user.email,
    remote: user.remote,
    experience: user.experience,
  });

  const { name, phone, address, about, email, remote, experience } = formData;
  console.log(formData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
    //@ts-ignore
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };
     //@ts-ignore
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
            //@ts-ignore
        setImageSrc(reader.result);
      };
    } else {
      setImageSrc("");
    }
  };

  useEffect(() => {
        //@ts-ignore
    dispatch(userInfo());
  }, [dispatch]);

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const userData = {
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      about: about.trim(),
      email: email.trim(),
      remote: remote,
      experience: experience,
      image: imageSrc,
    };
    // console.log(userData)
      //@ts-ignore
    dispatch(updateUserDetails(userData));

    if (isError) {
      toast.error(message);
    }

    
    if (user || isSuccess) {
      toast.success("User details updated successfully");
    }
  };

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (user || isSuccess) {
  //     toast.success("Userdetails updated successfully");
  //   }

  //   dispatch(reset());
  // }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onLogout = () => {
        //@ts-ignore
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="bg-[#1F2937]  ">
      <div className="flex  gap-2  mx-auto py-4   max-w-[900px] w-[97%]">
       
          <button
            onClick={() => toggleTab(1)}
            className={`border border-green-500  poppins-regular hover:bg-green-500 lgl:text-base text-sm font-bold hover:text-[#212121] py-2 lgl:py-2 w-[50%]  text-green-500 ${
              toggleState === 1 ? "bg-green-500 black" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-x-2">
              {/* <FaStar /> */}
              Dashboard
            </div>
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-[50%] py-2 lgl:py-2 text-green-500 ${
              toggleState === 2 ? "bg-green-500 black" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-x-2">
              {/* <LiaLaptopCodeSolid className="text-2xl" /> */}
              Experience
            </div>
          </button>
       
        <button
          onClick={() => toggleTab(3)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-[50%] py-2 lgl:py-2 text-green-500 ${
            toggleState === 3 ? "bg-green-500 black" : ""
          }`}
        >
          <div className="flex items-center gap-x-1 justify-center">
            {/* <CiMobile1 className="text-xl" /> */}
            Projects
          </div>
        </button>
      </div>

      <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
        <div className=" px-3 py-10  max-w-[900px] w-[95%] mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold  text-xl">User info</h3>
            <button
              className="bg-red-500 py-2 w-24 t text-white"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>

          <div className="flex md:flex-row flex-col">
            <div className="0 w-[100%]">
              <h6 className="text-white text-lg pt-5 font-semibold">
                Basic Information
              </h6>
              <p className="text-white text-sm">
                Section to config basic product information
              </p>

              <form
                className="mt-6 flex-col flex space-y-4"
                    //@ts-ignore
                onSubmit={onSubmit}
              >
                <div className="flex flex-col w-full">
                  <label className="text-base text-slate-400 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="Name"
                    className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base text-slate-400 font-semibold">
                    Phone number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    name="phone"
                    onChange={onChange}
                    placeholder="Phone number"
                    className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base text-slate-400 font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    name="address"
                    onChange={onChange}
                    placeholder=" Address"
                    className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-base text-slate-400 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={email}
                    placeholder="Email"
                    className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>

                <div className="w-full flex-col flex">
                  <label className="text-base text-slate-400 font-semibold">
                    About me
                  </label>
                  <textarea
                     //@ts-ignore
                    onChange={onChange}
                    name="about"
                    value={about}
                    rows={6}
                    className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>

                <div className=""></div>

                <div className="">
                  <h6 className="text-white text-lg pt-5 font-semibold">
                    Organizations
                  </h6>
                  <p className="text-white text-sm">
                    Section to config the product attribute
                  </p>

                  <div className="flex space-x-4 ">
                    <div className="flex w-[50%]  flex-col">
                      <label className="text-base text-slate-400 font-semibold">
                        Remote
                      </label>
                      <select
                        name="remote"
                        //@ts-ignore
                        onChange={onChange}
                        value={remote}
                        className="bg-[#1F2937]  py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
                        id=""
                      >
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>

                    <div className="flex w-[50%]  flex-col">
                      <label className="text-base text-slate-400 font-semibold">
                        Experience
                      </label>
                      <select
                        name="experience"
                            //@ts-ignore
                        onChange={onChange}
                        value={experience}
                        className="bg-[#1F2937]  py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
                        id=""
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-white font-semibold text-xl">
                      Upload Profile
                    </h3>
                    <div className="mt-5">
                      {/* Image preview */}
                      {imageSrc && (
                        <img
                          src={imageSrc}
                          alt="Preview"
                          className="w-20 h-20 rounded-full"
                        />
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
        </div>
      </div>

      {/* //Expericence */}

      <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
        <CreateExperience />
      </div>

      {/* Portfolio */}

      <div className={`${toggleState === 3 ? "block" : "hidden"} `}>
      <Project/>
      </div>
    </div>
  );
};

export default Dashboard;
