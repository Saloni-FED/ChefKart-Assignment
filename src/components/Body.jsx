import DownArrow from "../assets/images/Path 786/path.jpg";
import Recommended from "./Recommended/Recommended";
const Body = () => {
  return (
    <div id="main" className="mt-[19px] overflow-y-scroll scroll-smooth no-scrollbar">
      <div className="w-[307px] h-[468px] mx-auto ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[16px] font-Select font-bold tracking-[0.16px] inline">
              Recommended
            </h1>
            <img src={DownArrow} alt="" className="inline ml-[10.21px]" />
          </div>
          <button className="w-[56px] h-[22px] border shadow-1xl bg-[#1C1C1C] rounded-[6px] px-[17px] py-[5] text-white font-Select  text-[8px]">
            Menu
          </button>
        </div>

        {/* Container Of Food  */}
        <div className="w-[307px] mt-[22px]">
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default Body;
