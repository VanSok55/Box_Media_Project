import { Footer } from "flowbite-react";
import {
  BsFacebook,
 BsYoutube,
  BsInstagram,
  BsTelegram,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <>
      <Footer>
        <div className="w-full">
          <div className="w-full bg-white">
            <div className="grid w-full grid-cols-3 gap-8 px-6 py-8 md:grid-cols-6">
              <img
                className="w-[70%]"
                src="../src/assets/Box Media Logo.png"
                alt="Box Media Logo"
              />
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Mission</Footer.Link>
                  <Footer.Link href="#">Vision</Footer.Link>
                  <Footer.Link href="#">Our clients</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Photo" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Commercial</Footer.Link>
                  <Footer.Link href="#">Fashion</Footer.Link>
                  <Footer.Link href="#">Corporate</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Video" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Photo</Footer.Link>
                  <Footer.Link href="#">Video</Footer.Link>
                  <Footer.Link href="#">Sound</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Sound" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Photo</Footer.Link>
                  <Footer.Link href="#">Video</Footer.Link>
                  <Footer.Link href="#">Sound</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Telegram: @Boxsmedia</Footer.Link>
                  <Footer.Link href="#">087 996 552</Footer.Link>
                  <Footer.Link href="#">
                    Address: St . Near chhrouy Jrouy Java
                  </Footer.Link>
                  <div className="mr-14 mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTelegram} />
                    <Footer.Icon href="#" icon={BsYoutube} />
                   
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-300 px-4 py-4 sm:flex sm:items-center sm:justify-center sm:flex-col sm:space-y-2">
            <div className="text-black bg-slate-300 font-thin text-center sm:text-left">
              Copyright™ 2023 Box Media Pte. Ltd. All rights reserved
            </div>
            <div className="text-black bg-slate-300 font-thin text-center sm:text-left">
              Business Reg No.: 00000XXXXX
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterCom;
