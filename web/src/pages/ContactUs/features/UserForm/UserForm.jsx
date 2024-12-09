import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const UserForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/admin/get/all/users", {
        method: "POST",
        credentials: "include",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({})
      });

      if(!res.ok) {
        console.log("failed to post data")
      }

      const data = await res.json()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#151515]  md:rounded-l-lg rounded-t-lg px-6 py-6 sm:px-10 sm:py-8">
      <p className="text-gray-50 font-semibold text-2xl sm:text-3xl">
        Get in <span className="text-yellow-400">Touch</span>
      </p>
      <form className="mt-6 sm:mt-7 mb-8 text-white">
        <input
          type="text"
          placeholder="Name*"
          required
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-2"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-3"
        />
        <input
          type="number"
          placeholder="Phone Number*"
          required
          className="text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md border-gray-200 mt-3"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black w-full rounded-md mt-4 text-center py-2 text-xs font-semibold uppercase"
          onClick={submitHandler}>
          Send
        </button>
      </form>

      <div className="flex flex-row gap-6 sm:gap-10 mb-4">
        <div className="flex gap-4 items-center">
          <FaPhone className="text-gray-50" color="white" />
          <div>
            <p className="text-xs text-gray-50">PHONE</p>
            <p className="text-xs text-yellow-600">03 5432 1234</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <MdEmail className="text-gray-50 text-xl" color="white" />
          <div>
            <p className="text-xs text-gray-50">EMAIL</p>
            <p className="text-xs text-yellow-600">info@scthesprotos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
