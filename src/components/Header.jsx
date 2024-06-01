import Arrow from "../assets/images/Group 1541/arrow.jpg";
import Calendar from "../assets/images/Select_date-01/Select_date-01.jpg";
import Clock from "../assets/images/Set_time-01/Set_time-01.jpg";
import { foodName } from "../constants/constant";
import Body from "../components/Body";
import { IoFastFoodOutline} from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <div
      id="header"
      className="w-screen"
    >
      <div className=" mt-[24px] h-[57px] pt-[18px] pb-[17px] border ">
        <div
          id="dishes"
          className="h-[22px]  w-fit flex justify-center items-center ml-[16px]"
        >
          <img src={Arrow} alt="arrow" className=" inline" />
          <h1 className="inline font-Select font-semibold text-[16px] ml-[30px] text-sl_col">
            Select Dishes
          </h1>
        </div>
      </div>

      {/*  */}

      <div className="h-[42px] bg-sl_col pt-[21px]">
        <div className="w-[314px] h-[63px] bg-white rounded-[9px] shadow-2xl mx-auto pt-[22px]  px-[19.98px]">
          <div className="h-[26px] w-[275.32px] ">
            <div id="date_1" className="inline">
              <img src={Calendar} alt="" className="inline" />
              <h3 className="inline font-Select font-bold text-[12px] ml-[8.29px] text-sl_col">
                21 May 2021
              </h3>
            </div>

            <div className="h-[26px] border-[0.5px] border-solid border-[#D6D6D6CE] inline mx-[19.85px]"></div>

            <div id="date_2" className="inline">
              <img src={Clock} alt="" className="inline" />
              <h3 className="inline  ml-[8.29px] font-Select text-[12px] font-bold text-sl_col ">
                10:30 Pm-12:30 Pm
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-[20px] pl-5 flex">
          {foodName.map((name, i) => {
            return (
              <div
                className={`${
                  i === 0
                    ? " border-[#FF941A] text-center py-[5px] font-Select font-bold text-[#FF941A]"
                    : " border-[#BDBDBD] text-center py-[5px] font-Select font-bold text-[#8A8A8A] ml-[16px]"
                } w-[76px] h-[24px]  border-[0.5px] rounded-[17px] border-solid`}
                key={i}
              >
                <h3 className="tracking-[0.1px] text-[10px]">Italian</h3>
              </div>
            );
          })}
        </div>

        {/* Popular Dishes */}
        <div className="mt-[15px] pl-[23px]">
          <div className="">
            <h1 className="text-[14px] tracking-[0.14px] text-sl_col font-Select font-bold">
              Popular Dishes
            </h1>
          </div>
          <div className="mt-3 flex overflow-x-scroll scroll-smooth no-scrollbar">
            <Carousel />
          </div>
        </div>

        <div className="h-[3px] bg-[#F2F2F2] mt-[21px]"></div>

        {/* Main Body */}

        <Body />
      </div>

      {/*  */}
      <div className="w-[239px] h-10 bg-sl_col rounded-[7px] shadow-it_sha text-white fixed right-[60px] left-[60px] top-[501px] py-[5px]">
        <IoFastFoodOutline className="inline ml-4 mr-1 " />
        <h3 className="inline ml-[0.93px] text-[12px] font-Select ">
          3 food items selected
        </h3>
        <FaArrowRightLong className="inline ml-[41.3px]" />
      </div>
    </div>
  );
};

export default Header;
