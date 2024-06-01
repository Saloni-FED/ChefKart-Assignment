
const Carousel = () => {
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((items) => {
        return (
          <div
            className="relative h-[57px] w-[57px] mix-blend-multiply mr-[10px] rounded-full border px-3 py-[21px] text-[10px] font-Select font-semibold border-solid border-[#FF941A]"
            key={items}
          >
            <img
              src="https://www.shutterstock.com/image-photo/chicken-dum-biryani-table-top-600nw-2177929395.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover rounded-full"
            />
            <div
              className={`absolute inset-0 bg-gray-900  bg-opacity-65 rounded-full  ${
                items === 0 ? "" : "border border-white "
              }`}
            ></div>
            <div className="flex h-full items-center justify-center relative">
              <h1 className="text-[10px] text-white tracking-wider font-Select">
                Biryani.
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
