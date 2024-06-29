import React, { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../features/Login/LoginSlice";
import Loading from "../Component/Loading";
import { updateUserDetails, userInfo } from "../features/Login/userDetails";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userDetails
  );

  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phone,
    address: user.address,
    about: user.about,
    email: user.email,
    remote: user.remote,
  });

  const { name, phone, address, about, email, remote } = formData;
  // console.log(formData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
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
    };
    dispatch(updateUserDetails(userData));

    if (isError) {
      toast.error(message);
    }

    if (user || isSuccess) {
      toast.success("Userdetails updated successfully");
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
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="bg-[#1F2937]  ">
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

            <form className="mt-6 flex-col flex space-y-4" onSubmit={onSubmit}>
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
                  Experience
                </label>
                <textarea
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
                      onChange={onChange}
                      value={remote}
                      className="bg-[#1F2937]  py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
                      id=""
                    >
                      <option>true</option>
                      <option>false</option>
                    </select>
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

      {/* <div className="footer  mt-6   w-full py-4 ">
        <div className="flex  justify-end ">
          <div className="flex space-x-4 px-6">
            <button className="bg-[#374151] text-white font-bold w-20 py-2 rounded">
              Discard
            </button>

            <div className="flex items-center">
              <button className="bg-[#4F46E5] px-5 text-white font-semibold rounded py-2 flex items-center">
                <IoIosSave className="text-white" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
