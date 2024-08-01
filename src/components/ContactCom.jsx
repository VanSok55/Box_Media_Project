import { LiaSquareFullSolid } from "react-icons/lia";
import { FaFacebook,FaTelegram,FaInstagram } from "react-icons/fa";

const ContactCom = () => {
  return (
    <>
      <section class="w-full mx-auto flex justify-center items-center h-auto py-20 bg-[#262626] mb-40 sm:w-[80%] sm:h-[80vh]">
        <div class="w-[90%] sm:w-full h-auto bg-[#262626]">
          <div class="w-[90%] sm:w-[80%] mx-auto text-center bg-[#262626]">
            <h1 class="bg-[#262626] text-4xl sm:text-5xl text-white font-thin">
              Reach our Team
            </h1>
            <p class="text-white mt-5 bg-[#262626] text-base sm:text-lg">
              Directly contact our company
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-[90%] sm:w-[80%] mx-auto text-white mt-10 bg-[#262626] font-thin">
            <div className="space-y-3 bg-[#262626]">
              <h2 class="text-2xl bg-[#262626] flex items-center">
                <LiaSquareFullSolid class="mr-2 h-3 w-3 bg-[#262626] text-red-600" />
                Director
              </h2>
              <p class="bg-[#262626]">Name: Hou Dara</p>
              <p class="bg-[#262626]">Email:</p>
              <p class="bg-[#262626]">Tel:</p>
            </div>
            <div className="space-y-3 bg-[#262626]">
              <h2 class="text-2xl bg-[#262626] flex items-center">
                <LiaSquareFullSolid class="mr-2 h-3 w-3 bg-[#262626] text-red-600" />
                Production Manager
              </h2>
              <p class="bg-[#262626]">Name:</p>
              <p class="bg-[#262626]">Email:</p>
              <p class="bg-[#262626]">Tel:</p>
            </div>
            <div className="space-y-3 bg-[#262626]">
              <h2 class="text-2xl bg-[#262626] flex items-center">
                <LiaSquareFullSolid class="mr-2 h-3 w-3 bg-[#262626] text-red-600" />
                Our Recruitment
              </h2>
              <p class="bg-[#262626]">Name: Nuth</p>
              <p class="bg-[#262626]">Email: nuth.boxmedia@gmail.com</p>
              <p class="bg-[#262626]">Tel: 011 33 44 55</p>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full h-auto py-20 bg-black flex justify-center items-center">
        <div class="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto text-center">
          <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin">
            Contact Us
          </h1>
          <p class="text-white text-base sm:text-lg md:text-xl lg:text-xl mt-5">
            Follow or Message us on our Social Media
          </p>
          <div class="flex justify-center items-center gap-10 mt-10">
            <a
              href="#"
              class=" hover:translate-y-1 transition-all duration-300"
            >
              <FaTelegram class="text-blue-500 bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            </a>
            <a
              href="#"
              class=" hover:translate-y-1 transition-all duration-300"
            >
              <FaFacebook class="text-blue-600 bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
            </a>
            <a
              href="#"
              class=" hover:translate-y-1 transition-all duration-300"
            >
              <img
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="../src/assets/gmail_5968534.png"
                alt="gmail_5968534.png"
              />
            </a>
            <a href="#" class="hover:translate-y-1 transition-all duration-300">
              <img
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                src="../src/assets/icons8-instagram-48.png"
                alt="icons8-instagram-48.png"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="mt-40 w-[80%] mx-auto flex flex-col justify-center gap-5">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-thin text-white text-center">
            Find us here
          </h1>
          <p className="text-white text-xl text-center">
            Black OX HQ Building, National Road No.6, Chrouy Chongva, Phnom Penh
          </p>
        </div>
        <div className="mt-5 w-[80%] h-auto mx-auto bg-white">
          <iframe
            target="_blank"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Black%20OX%20HQ%20Building%20National%20Road%20No.6,%20Chrouy%20Chongva,%20Phnom%20Penh+(Black%20OX%20HQ%20Building)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
        <div className="w-full h-auto mt-7 mb-20 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Black%20OX%20HQ%20Building%20National%20Road%20No.6,%20Chrouy%20Chongva,%20Phnom%20Penh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3A3939] text-white py-3 px-4 w-full text-center md:w-1/3 rounded-xl hover:bg-slate-300 hover:text-black active:bg-red-500 cursor-pointer transition-colors duration-300"
          >
            View on map
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactCom;
