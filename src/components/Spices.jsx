import down from "../assets/images/Path 786/path.jpg";
const Spices = () => {
  return (
    <div id="spices" className="mt-[20px]">
      <div>
        <h1 className="inline font-Select text-[12px] text-[#242424] mr-[16.21px] font-bold">
          Spices (10)
        </h1>
        <img src={down} alt="" className="inline" />
      </div>

      <div id="vetable_details" className="mt-[10px]  w-[310px] ">
        <div id="row1_veggie" className="flex justify-between mb-[8px] ">
          <div className="font-Select text-[10px] text-sl_col">Coriander</div>
          <div className="font-Select text-[10px] text-sl_col">100 gram</div>
        </div>

        <div id="row1_veggie" className="flex justify-between mb-[8px] ">
          <div className="font-Select text-[10px] text-sl_col">Mustard oil</div>
          <div className="font-Select text-[10px] text-sl_col">1/2 litres</div>
        </div>
      </div>
    </div>
  );
};

export default Spices;
