import React from "react";
import Breadcrumbs from "./../../components/Breadcrumbs";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import UserForm from "./features/UserForm/UserForm";
import GoogleMap from "./features/GoogleMap/GoogleMap";

const ContactUs = () => {
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-center text-gray-900 font-semibold h-32 sm:h-48 flex justify-center items-center text-2xl sm:text-4xl">
          Contact Us
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-3 bg-black">
          <Breadcrumbs />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  px-4 sm:px-8 md:px-16 lg:px-32 pt-8 pb-20 bg-black">
          <UserForm />
          <GoogleMap />
        </div>
      </>
      <Footer />
    </>
  );
};

export default ContactUs;
