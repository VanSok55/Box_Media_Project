import BoxMediaimg1 from "../assets/photo_2024-07-24_23-18-38.jpg";
import BoxMediaimg2 from "../assets/photo_2024-07-24_23-18-38.jpg";
import BoxMediaimg3 from "../assets/photo_2024-07-22_23-42-35.jpg";
import BoxMediaimg4 from "../assets/photo_2024-07-24_23-22-45.jpg";
import BoxMediaimg5 from "../assets/photo_2024-07-24_23-24-54.jpg";
import BoxMediaimg6 from "../assets/photo_2024-07-24_23-25-53.jpg";
import BoxMediaimg7 from "../assets/photo_2024-07-24_23-30-09.jpg";
import BoxMediaimg8 from "../assets/photo_2024-07-24_23-30-50.jpg";
import BoxMediaimg9 from "../assets/photo_2024-07-24_23-31-54.jpg";
import BoxMediaimg10 from "../assets/photo_2024-07-24_23-32-32.jpg";
import BoxMediaimg11 from "../assets/photo_2024-07-24_23-33-12.jpg";
import BoxMediaimg12 from "../assets/photo_2024-07-24_23-33-49.jpg";
import BoxMediaimg13 from "../assets/photo_2024-07-23_10-01-10.jpg";

const AboutCom = () => {
  return (
    <>
      <section className="w-[80%] mx-auto h-auto">
        <div className="text-center text-black bg-white">
          <h2 className="text-3xl md:text-5xl font-semibold bg-white md:pt-14">
            Our company
          </h2>
          <p className="md:w-[60%] mx-auto text-base md:text-lg bg-white py-14">
            Box Film Media Production Co., Ltd. is established with the vision
            of expanding clients’ customers and enhancing branding to increase
            market value and sale volume. Box Media prides itself on providing
            clients with quality media production, communications, and media
            consultancy services.
          </p>
        </div>
      </section>
      <section className="w-[80%] mx-auto grid gap-10 text-slate-300 py-14 md:grid-rows-2">
        <div className="w-[80%] mx-auto grid gap-8 items-center py-12 md:grid-cols-2">
          <img
            className="p-10"
            src={BoxMediaimg1}
            alt="photo_2024-07-24_23-18-38.jpg"
          />
          <div className="p-5 flex flex-col gap-12">
            <h2 className=" text-3xl text-center md:text-left md:text-4xl font-semibold">
              Our mission
            </h2>
            <span className="text-xl text-center md:text-2xl md:text-left">
              Box Media is aimed to produce high quality contents for clients’
              business or solve your problems with creative contents and
              services using technology and multimedia.
            </span>
          </div>
        </div>
        <div className="w-[80%] mx-auto grid gap-8 items-center py-12 md:grid-cols-2">
          <img
            className="p-10"
            src={BoxMediaimg2}
            alt="photo_2024-07-24_23-18-38.jpg"
          />
          <div className="p-5 flex flex-col gap-12">
            <h2 className=" text-3xl text-center md:text-left md:text-4xl font-semibold">
              Our mission
            </h2>
            <span className="text-xl text-center md:text-2xl md:text-left">
              Box Media is aimed to produce high quality contents for clients’
              business or solve your problems with creative contents and
              services using technology and multimedia.
            </span>
          </div>
        </div>
      </section>
      <section className="bg-white w-[80%] mx-auto h-auto flex flex-col gap-10 md:py-20 md:px-36">
        <h2 className="bg-white text-black text-2xl md:text-4xl space-x-3 text-center">
          Trusted by our government and companies
        </h2>
        <img src={BoxMediaimg3} className="object-cover" alt="goverment img" />
        <div className="mt-10 w-full flex flex-col bg-white">
          <h2 className="bg-white text-3xl md:text-6xl font-semibold text-center">
            Box Media Team
          </h2>
          <p className="bg-white mt-10 text-[16px] md:mt-20 md:text-2xl">
            It is crucial for our success that we have a good and cooperative
            teamwork. Meet our awesome team members who contribute to all of our
            good work we have done so far. We have worked together as a team for
            many projects. We are continuing to move forward together as an
            expert in our field.
          </p>
          <img
            className="mt-10"
            src={BoxMediaimg4}
            alt="photo_2024-07-24_23-22-45.jpg"
          />
        </div>
      </section>
      <section className=" w-[80%] h-auto mx-auto flex flex-col bg-white">
        <h2 className="bg-white md:text-6xl font-semibold text-center">
          Team Members
        </h2>
        <div className="bg-white grid grid-cols-2 grid-rows-2 md:grid-rows-3 md:grid-cols-3 my-10">
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg13} alt="photo_2024-07-23_10-01-10.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg5} alt="photo_2024-07-24_23-24-54.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg6} alt="photo_2024-07-24_23-25-53.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg7} alt="photo_2024-07-24_23-30-09.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg8} alt="photo_2024-07-24_23-30-50.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg9} alt="photo_2024-07-24_23-31-54.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg10} alt="photo_2024-07-24_23-32-32.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg11} alt="photo_2024-07-24_23-33-12.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
          <div className="w-full p-10 bg-white text-white">
            <img src={BoxMediaimg12} alt="photo_2024-07-24_23-33-49.jpg" />
            <p className="mt-3 text-center text-black bg-white">Team Members</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCom;
