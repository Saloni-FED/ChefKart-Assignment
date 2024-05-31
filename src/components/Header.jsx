import React from "react";
import Arrow from "../assets/images/Group 1541/arrow.jpg";
const Header = () => {
  return (
    <div id="header" className="w-screen">
      <div className=" mt-[24px] h-[57px] pt-[18px] pb-[17px] border ">
        <div
          id="dishes"
          className="h-[22px]  w-fit flex justify-center items-center ml-[16px]"
        >
          <img
            src={Arrow}
            alt="arrow"
            className=" inline"
          />
          <h1 className="inline font-Select font-semibold text-[16px] ml-[30px] text-sl_col">
            Select Dishes
          </h1>
        </div>
      </div>

      {/*  */}

      <div className="h-[42px] bg-sl_col pt-[21px]">
         <div className="w-[314px] h-[63px] bg-white rounded-[9px] shadow-2xl mx-auto">

         </div>
      </div>
    </div>
  );
};

export default Header;
