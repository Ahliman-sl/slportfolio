import ReusableButton from "../Components/ReusableButton";
import EmailSend from "./EmailSend.jsx";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function Contact() {
  const handleButtonClick = () => {
    window.open(
      "https://linkedin.com/in/ahliman-suleymanli-7a44a0302",
      "_blank"
    );
  };
  return (
    <section className="w-full h-max mt-[12rem] p-5">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex flex-col">
            <h5 className="font-bold text-5xl">{`Let's Work Together`}</h5>
            <div className="w-full h-max mt-5">
              <p className="text-xl">Call Me:</p>
              <p className="w-full h-max p-4 border-b-2 text-2xl font-semibold border-gray-400">
                +994(50)-804-98-00
              </p>
            </div>
            <div className="w-full h-max mt-5">
              <p className="text-xl">My Email:</p>
              <p className="w-full h-max p-4 border-b-2 text-2xl font-semibold border-gray-400">
                ahliman.slymn@gmail.com
              </p>
            </div>
            <div className="w-full h-max mt-5">
              <p className="text-xl">Location : </p>
              <p className="w-full h-max p-4 border-b-2 text-2xl font-semibold border-gray-400">
                Baku,Azerbaijan
              </p>
            </div>
            <div className="w-full h-max mt-5">
              <p className="text-xl">Follow me : </p>
              <div className="w-full h-max p-4 border-b-2 text-2xl font-semibold border-gray-400 flex gap-2">
                <a
                  href="https://linkedin.com/in/ahliman-suleymanli-7a44a0302"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl text-sky-950 transition duration-300 hover:scale-[1.1]" />
                </a>
                <a href="https://github.com/Ahliman-sl" target="_blank">
                  <FaMedium className="text-3xl text-sky-950 duration-300 hover:scale-[1.1] cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/ehliman.s" target="_blank">
                  <FaFacebook className="text-3xl text-sky-950 duration-300 hover:scale-[1.1] cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/ahlimansl/" target="_blank">
                  <FaInstagram className="text-3xl text-sky-950 duration-300 hover:scale-[1.1] cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-6 flex flex-col gap-3">
            <div className="w-full h-max flex justify-end">
              <ReusableButton
                onClick={handleButtonClick}
              >{`Let's Connect :)`}</ReusableButton>
            </div>
            <p className="text-xl">
              {` I'm currently looking for new opportunities,my inbox is always open.
            Whethever you have a question or just want to say hi, I'll try my
            best to get back to you!`}
            </p>
            <EmailSend />
          </div>
        </div>
      </div>
    </section>
  );
}
