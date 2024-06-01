import Veg from "../../assets/images/Group 359/veg.jpg";
import Fridge from "../../assets/images/Group 508/fridge.jpg";
import { Link } from "react-router-dom";
const Recommended = ({ items }) => {
  // console.log(items);
  return (
    <div>
      <div className="mt-5 flex justify-between">
        <div id="left" className="w-[156px] h-[73px]">
          <div id="1_row" className="flex justify-start items-center">
            <h2 className="inline text-[12px] font-Select font-semibold">
              {items ? items.name : "Masala Muglai"}
              <img src={Veg} alt="veg" className="inline ml-[6px]" />
            </h2>

            {/* <div className="w-[22px] h-[10px] border "></div> */}
            <div className="w-[22px] h-[10px]  ml-[10px] text-[6px] tracking-[0.12px] flex justify-center items-center bg-l_green text-white rounded-sm ">
               4.2 s
            </div>
          </div>

          {/* Row 2 */}
          <div id="row_2" className="flex h-[18.45] ">
            <div className="mt-[7px] h-[18.45px] w-[23px] mr-[8.5px]">
              <img src={Fridge} alt="" className="mx-auto mb-[1.71px]" />
              <h1 className="text-[4px] tracking-[0.08px] font-Select text-sl_col">
                Refrigerator
              </h1>
            </div>

            <div className="mt-[7px] h-[18.45px] w-[23px]  mr-[8.5px] ">
              <img src={Fridge} alt="" className="mx-auto mb-[1.71px]" />
              <h1 className="text-[4px] tracking-[0.08px] font-Select text-sl_col">
                Refrigerator
              </h1>
            </div>

            <div className="h-[18.45px] bg-[#D6D6D6CE] ml-[8px] mt-[7px]"></div>

            <div className="w-[35px] h-[16px] mt-[7px] ml-[15px] text-[6px]">
              <h5 className="tracking-[0.12px] font-Select font-bold mb-[0.3px]">
                Ingredients
              </h5>
              <Link to="/detail">
                <h6 className="text-list cursor-pointer">View List {">"}</h6>
              </Link>
            </div>
          </div>

          <div
            id="row_3"
            className="h-[22px]  mt-2 text-[8px] text-left tracking-[0.16px] text-[#707070] font-Select leading-tight"
          >
            {items
              ? items.description
              : "Chicken fried in deep tomato sauce with delicious spices"}
          </div>
        </div>

        {/* Right side */}
        <div id="right" className="'ml-[59px]  relative ">
          <img
            src={items ? items.image : "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"}
            alt=""
            className="w-[92px] h-[68px] rounded-md"
          />
          <div className="w-full  absolute top-[55px] flex justify-center">
            <button className="w-[58px] h-[21px] border-[0.5px] border-solid border-[#FF9A26] rounded-[2px] bg-white text-[11px] text-list font-Select shadow-1xl font-semibold ">
              ADD
            </button>
            <span className="absolute  bottom-2 right-[22px] text-[8px] text-list font-Select">
              +
            </span>
          </div>
        </div>
      </div>
      <div className="w-[307px] border-[0.5px] border-solid border-[#D6D6D6CE] mt-[22px]"></div>
    </div>
  );
};

export default Recommended;
