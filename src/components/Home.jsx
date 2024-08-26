import { HiOutlineLightBulb } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { SlCamrecorder } from "react-icons/sl";
// import Photo from "../assets/photo_2024-07-24_22-04-52.jpg";
import BoxMediaimg1 from "../assets/photo_2024-07-24_22-04-52.jpg";
import BoxMediaimg2 from "../assets/photo_2024-07-23_17-06-57.jpg";
import BoxMediaimg3 from "../assets/photo_2024-07-24_22-12-53.jpg";
import BoxMediaimg4 from "../assets/photo_2024-07-24_22-14-02.jpg";
import BoxMediaimg5 from "../assets/photo_2024-07-24_22-15-07.jpg";
import BoxMediaimg6 from "../assets/photo_2024-07-24_22-20-49.jpg";
import BoxMediaimg7 from "../assets/photo_2024-07-24_22-21-34.jpg";
import BoxMediaimg8 from "../assets/photo_2024-07-23_17-06-57.jpg";
const Home = () => {
  return (
    <>
      <section className="bg-slate-300 w-[80%] h-full mx-auto flex flex-col justify-evenly">
        <div className="w-[100%] bg-slate-300">
          <img
            className="w-[100%] h-[400px] md:h-[600px] object-cover"
            src={BoxMediaimg1}
            alt="A description of the image"
          />
        </div>
        <div className="w-[100%] bg-[#444242] text-center p-4 md:p-6">
          <span className="text-slate-300 bg-[#444242] text-1xl md:text-3xl">
            BEST MEDIA SOLUTION FOR YOUR COMPANY
          </span>
        </div>
      </section>
      <section className="w-full max-w-screen-xl mx-auto min-h-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-6 md:px-14 md:py-14">
        <div className="w-full h-96 text-slate-300 flex flex-col justify-around text-center gap-2 md:p-14 ">
          <span className="text-3xl md:text-5xl font-normal">
            Transforming your media experience
          </span>
          <span className="text-sm md:text-base font-thin">
            “If you don’t try this app, you won’t become the superhero you were
            meant to be”
          </span>
          <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-8">
            <span className="p-2 w-full md:w-1/3 rounded-3xl border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
              Contact Us
            </span>
            <span className="p-2 w-full md:w-1/3 rounded-3xl  border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
              Our Services
            </span>
          </div>
        </div>
        <div className="w-full h-96 bg-white"></div>
      </section>
      <section className="w-full max-w-screen-xl mx-auto px-4 md:px-24 py-8 md:py-14 bg-[#262626]">
        <div className="w-full grid gap-16 md:gap-24 bg-[#262626]">
          <div className="text-center space-y-8 md:space-y-12 text-slate-300 bg-[#262626]">
            <h2 className="text-3xl md:text-5xl font-semibold bg-[#262626]">
              Our Expertise
            </h2>
            <p className="text-base md:text-lg bg-[#262626]">
              We are experienced in providing media production including video,
              sound, and photography. With our creativity, technology, and
              modern equipment, we ensure that we provide the best solution to
              our clients’ needs.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-20 bg-[#262626]">
            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover w-full h-[260px] mb-4 md:mb-8 rounded-md"
                src={BoxMediaimg2}
                alt="A description of the image"
              />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Photo
              </h3>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover w-full h-[260px] mb-4 md:mb-8 rounded-md"
                src={BoxMediaimg3}
                alt="A description of the image"
              />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Video
              </h3>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover w-full h-[260px] mb-4 md:mb-8 rounded-md"
                src={BoxMediaimg4}
                alt="A description of the image"
              />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Sound
              </h3>
            </div>
          </div>

          <div className="text-center space-y-8 md:space-y-12 text-slate-300 bg-[#262626]">
            <h2 className="text-3xl md:text-5xl font-semibold bg-[#262626]">
              Why choose us?
            </h2>
            <p className="text-base md:text-lg bg-[#262626]">
              We are experienced in providing media production including video,
              sound and photography. With our creativity, technology and modern
              equipment, we ensure that we provide the best solution to our
              clients’ need.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-20 bg-[#262626]">
            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <HiOutlineLightBulb
                className="bg-[#262626]"
                color="red"
                size="100"
              />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Creativity
              </h3>
              <p className="bg-[#262626] text-center mt-2">
                Our approach to our work process involve creative thinking and
                concept development
              </p>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <FaUsers className="bg-[#262626]" color="red" size="100" />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Professionalism
              </h3>
              <p className="bg-[#262626] text-center mt-2">
                We are confident in what we do and we communicate with clients
                confidence and trust.
              </p>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <SlCamrecorder className="bg-[#262626]" color="red" size="100" />
              <h3 className="bg-[#262626] text-xl md:text-2xl mt-2 text-center">
                Technology
              </h3>
              <p className="bg-[#262626] text-center mt-2">
                Our studio is packed with all modern equipment and props to
                produce high quality media.
              </p>
            </div>
          </div>

          <div className="text-center space-y-8 md:space-y-12 text-slate-300 bg-[#262626]">
            <h2 className="text-3xl md:text-5xl font-semibold bg-[#262626]">
              Our Best Service
            </h2>
            <p className="text-base md:text-lg bg-[#262626]">
              The best quality media solution, content creation strategy, sound
              and video production and more.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-20 bg-[#262626]">
            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover w-full h-[300px] mb-4 md:mb-8 rounded-md"
                src={BoxMediaimg5}
                alt="A description of the image"
              />
              <p className="bg-[#262626] mt-2">
                Our approach to our work process involve creative thinking and
                concept development
              </p>
              <a href="#" className="bg-[#262626] mt-2 text-[12px] font-thin">
                Learn More
              </a>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover w-full h-[300px] mb-4 md:mb-8 rounded-md"
                src={BoxMediaimg6}
                alt="A description of the image"
              />
              <p className="bg-[#262626] mt-2">
                Our approach to our work process involve creative thinking and
                concept development
              </p>
              <a href="#" className="bg-[#262626] mt-2 text-[12px] font-thin">
                Learn More
              </a>
            </div>

            <div className="flex flex-col items-center text-slate-300 bg-[#262626]">
              <img
                className="object-cover mb-4 w-full h-[300px] md:mb-8 rounded-md"
                src={BoxMediaimg7}
                alt="A description of the image"
              />
              <p className="bg-[#262626] mt-2">
                Our approach to our work process involve creative thinking and
                concept development
              </p>
              <a href="#" className="bg-[#262626] mt-2 text-[12px] font-thin">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center bg-[#262626]">
          <span className="p-2 text-slate-300 bg-[#262626] md:px-6 md:py-3 rounded-3xl border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
            Our Services
          </span>
        </div>
      </section>
      <section className="w-[80%] mx-auto h-auto">
        <div className="w-full h-96 text-slate-300 flex flex-col justify-around text-center gap-2 md:p-14 ">
          <span className="text-3xl md:text-5xl font-normal">
            Transforming your media experience
          </span>
          <span className="text-sm md:text-base font-thin">
            “If you don’t try this app, you won’t become the superhero you were
            meant to be”
          </span>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
            <span className="p-3 w-full md:w-1/5 rounded-3xl border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
              Contact Us
            </span>
            <span className="p-3 w-full md:w-1/5 rounded-3xl  border-[3px] border-slate-300 hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300">
              Our Services
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#262626] w-[80%] mx-auto h-auto flex flex-col gap-10 md:py-20 md:px-36">
        <h2 className="bg-[#262626] text-slate-300 text-2xl md:text-4xl space-x-3 text-center">
          Trusted by our government and companies
        </h2>
        <img
          src={BoxMediaimg1}
          className="object-cover"
          alt="goverment img"
        />
      </section>
    </>
  );
};

export default Home;
