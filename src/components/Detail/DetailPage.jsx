import arrow from "../../assets/images/Group 1541/arrow.jpg";
import clock from "../../assets/images/Group 393/clock.jpg";
import bowl from "../../assets/images/bowl/bowl.png";
import veggies from "../../assets/images/Mask Group 17/veggies.png";
import Spices from "../Spices";
import Vegetables from "../Vegetables";
import fridge_2 from "../../assets/images/Mask Group 20/fridge_2.jpg";
import { Link } from "react-router-dom";
const DetailPage = () => {
  return (
    <div className="w-full">
      <div className="mt-[48px] pl-[16px]">
        <Link to='/'>
          <img src={arrow} alt="" className="cursor-pointer" />
        </Link>
      </div>
      <div className=" relative w-full">
        <div id="left" className="mt-[27.31px] pl-[24px]">
          <div>
            <h1 className="w-[187px] h-[32px] font-Select font-extrabold text-[#242424] text-[23px]">
              Mashala Muglai
            </h1>
          </div>
          <div className="mt-[6px] w-[182px] h-[39px] text-[#A3A3A3] text-[8px] font-Select tracking-[0.16px] ">
            <h4>
              Mughlai Masala is a style of cookery developed in the Indian
              Subcontinent by the imperial kitchens of the Mughal Empire.
            </h4>

            <div className="mt-[28.65px]">
              <img src={clock} alt="" className="inline" />
              <h4 className="inline ml-[7.71px] text-[10px] text-sl_col font-Select font-semibold">
                1 hour
              </h4>
            </div>
            <div className="mt-[31px] w-[192px] h-[3px] bg-[#F2F2F2]"></div>

            <div className="mt-[22px]">
              <h1 className="text-[16px] font-Select font-bold text-sl_col">
                Ingredients
              </h1>
              <div className="mt-[2px]">
                <p className="text">For 2 people</p>
              </div>
            </div>

            {/* Border */}
            <div className="w-[304px] border-[0.5px] border-solid border-[#D6D6D6CE] mt-[16px]"></div>

            {/*   Vegetable */}

            <Vegetables />

            {/* Spices */}

            <Spices />

            {/* {Refrigerator} */}

            <div className="mt-[22px]">
              <h2 className="w-[88px] h-[22px] font-bold tracking-[0.16px] font-Select text-sl_col text-[16px]">
                Appliances
              </h2>
              <div className="mt-[16px] flex w-[304px]">
                {[0, 1, 2].map((items) => {
                  return (
                    <div
                      className="w-[72px] h-[95px] bg-[#F5F5F5] rounded-[7px] pt-[14px] mr-[21px]"
                      key={items}
                    >
                      <img src={fridge_2} alt="fridge" className="mx-auto" />
                      <h4 className="text-center text-[8px] font-Select text-detail">
                        Refrigerator
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <div className="w-[192px] h-[192px] rounded-full bg-[#FFF9F2] absolute -z-10 top-0 left-[189px] overflow-x-hidden"></div>
          <div className="absolute left-[250px] top-10 z-10">
            <img src={bowl} alt="" />
          </div>
          <div className="absolute -right-24 top-16">
            <img src={veggies} alt="veggie" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
