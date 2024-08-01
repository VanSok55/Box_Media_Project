
const PhotoCom = () => {
  return (
    <>
      <section className="w-[80%] mx-auto">
        <div className="w-full h-96 bg-[#262626]">
          <img src="" alt="" />
        </div>
        <div className="w-full flex gap-12 justify-center p-4 text-xl text-white">
          <a href="">
            <h2>Corporate</h2>
          </a>
          <a href="">
            <h2>Fashion</h2>
          </a>
          <a href="">
            <h2>Commercial</h2>
          </a>
        </div>
      </section>
      <section className="w-[80%] mx-auto bg-[#262626] ">
        <div className="w-[90%] bg-[#262626] mx-auto grid gap-8 items-center py-12 md:grid-cols-2">
          <img
            className=" h-96 rounded-2xl"
            src="../src/assets/desktop-wallpaper-red-flower-black-background-dark-red-flower.jpg"
            alt="desktop-wallpaper-red-flower-black-background-dark-red-flower.jpg"
          />
          <div className="p-5 flex flex-col gap-8 bg-[#262626] text-white">
            <h2 className="bg-[#262626] text-3xl text-center md:text-left md:text-4xl font-medium">
              Corporate Photography
            </h2>
            <span className="bg-[#262626] text-xl text-center font-thin md:text-2xl md:text-left">
              BoxMedia is the Content Marketing which provides from media script
              to final production (content creation) and content strategy
            </span>
            <span className=" bg-[#262626] p-2 w-full text-center md:w-1/3 rounded-3xl border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
              View more
            </span>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto bg-[#262626]">
        <h2 className="ml-[5%] bg-[#262626] text-2xl sm:text-4xl md:text-6xl lg:text-6xl text-white mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 p-[5%] bg-[#262626]">
          <div className="bg-[#262626] col-span-2 row-span-1">
            <img src="../src/assets/photo_2024-07-23_17-03-58.jpg" alt="" />
          </div>
          <div className="bg-[#262626]">
            <img src="../src/assets/photo_2024-07-23_17-06-57.jpg" alt="" />
          </div>
          <div className="bg-[#262626]">
            <img src="../src/assets/photo_2024-07-23_17-08-07.jpg" alt="" />
          </div>
          <div className="bg-[#262626] col-span-2 row-span-1 relative">
            <img src="../src/assets/photo_2024-07-23_17-09-19.jpg" alt="" />
            <span
              className="absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-10 cursor-pointer rounded-3xl bg-transparent text-white border-[2px] border-white hover:bg-gray-200 hover:text-black transition-colors duration-300 sm:bottom-3 sm:left-1/2 sm:-translate-x-1/2 sm:py-2 sm:px-10 sm:text-sm md:bottom-5 md:left-1/2 md:-translate-x-1/2 md:py-3 md:px-20 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:py-3 lg:px-20"
            >
              View more
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoCom;
