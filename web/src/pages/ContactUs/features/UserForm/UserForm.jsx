import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const apiUrl = import.meta.env.VITE_API_URL;

  const validate = () => {
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email) validationErrors.email = "Email is required.";
    if (!formData.phoneNumber)
      validationErrors.phoneNumber = "Phone number is required.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear individual field error on change
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const toastId = toast.loading("Submitting...");

    try {
      const res = await fetch(`${apiUrl}/api/user/contact-us`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to post data");
      }

      const data = await res.json();
      toast.success("Form submitted successfully!");
      console.log("Form submitted successfully:", data);
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="bg-[#151515] md:rounded-l-lg rounded-t-lg px-6 py-6 sm:px-10 sm:py-8">
      <p className="text-gray-50 font-semibold text-2xl sm:text-3xl">
        Get in <span className="text-yellow-400">Touch</span>
      </p>
      <form className="mt-6 sm:mt-7 mb-8 text-white" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          className={`text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md mt-2 ${
            errors.name ? "border-red-500" : "border-gray-200"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          className={`text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md mt-3 ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}

        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number*"
          className={`text-sm font-normal bg-transparent px-4 py-2 border w-full rounded-md mt-3 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-200"
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
        )}

        <button
          type="submit"
          className="bg-yellow-400 text-black w-full rounded-md mt-4 text-center py-2 text-xs font-semibold uppercase">
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
      <Toaster />
    </div>
  );
};

export default UserForm;
