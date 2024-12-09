import React from "react";

const GoogleMap = () => {
  return (
    <div className=" md:rounded-r-lg   rounded-b-lg w-full h-[300px] sm:h-[400px] lg:h-auto">
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Solitaire%20Business%20Hub%20-%20Wakad+(Solitaire%20Business%20Hub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="w-full h-full  md:rounded-r-lg  rounded-b-lg"></iframe>
    </div>
  );
};

export default GoogleMap;
