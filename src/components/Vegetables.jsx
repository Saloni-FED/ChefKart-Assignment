import down from "../assets/images/Path 786/path.jpg"
const Vegetables = () => {
  return (
    <div id="veggie" className="mt-[16px] w-full">
      <div>
        <h1 className="inline font-Select text-[12px] text-[#242424] mr-[16.21px] font-bold">
          Vegetables (05)
        </h1>
        <img src={down} alt="" className="inline" />
      </div>

      <div id="vetable_details" className="mt-[10px]  w-[310px] ">
        <div id="row1_veggie" className="flex justify-between mb-[8px] ">
          <div className="font-Select text-[10px] text-sl_col">Cauliflower</div>
          <div className="font-Select text-[10px] text-sl_col">01 Pc</div>
        </div>

        <div id="row1_veggie" className="flex justify-between mb-[8px] ">
          <div className="font-Select text-[10px] text-sl_col">Tomato</div>
          <div className="font-Select text-[10px] text-sl_col">10 Pc</div>
        </div>

        <div id="row1_veggie" className="flex justify-between mb-[8px] ">
          <div className="font-Select text-[10px] text-sl_col">Spinach</div>
          <div className="font-Select text-[10px] text-sl_col">1/2 Kg</div>
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
