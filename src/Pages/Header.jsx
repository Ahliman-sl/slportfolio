// import Navbar from "../Components/Navbar";
import left from "../Assets/left.png";
import right from "../Assets/right.png";
// import qrcode from "../Assets/qrcode.png";
import { FaLinkedin } from "react-icons/fa";
import ResumeButton from "../Components/ResumeButton.jsx";
import profilPicture from "../Assets/profil.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Header() {
  return (
    <div>
      <HeaderText />
      {/* Top left left.png */}
      <img
        src={left}
        alt="Left"
        className="absolute top-0 left-0 w-50 h-auto"
      />

      {/* Bottom right.png */}
      <img
        src={right}
        alt="Right"
        className="absolute bottom-0 right-0 w-[26rem] h-auto"
      />
    </div>
  );
}

export default Header;

function HeaderText() {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="container px-6 w-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 justify-items-center items-center">
          <motion.div
            className="col-span-4 lg:col-span-6 z-10 flex flex-col gap-4 pt-[5rem] md:pt-0 "
            initial={{
              // rotate: 0,
              opacity: 0,
            }}
            animate={{
              // rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 4,
            }}
          >
            <p className="text-3xl text-[#7c3aed] font-bold">{`I'm`}</p>
            <h1 className="text-5xl font-bold">Ahliman Suleymanli</h1>
            <TypeAnimation
              className="text-left sm:text-xl mid:text-2xl lg:text-4xl  w-full h-[2rem] font-semibold"
              sequence={[
                "Welcome",
                2500,
                "I'm Web Developer",
                2500,
                "Feel free for explore",
                2500,
                "Discover my Projects",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <div className="w-max h-max flex items-center gap-4">
              <ResumeButton />
              <div className="icon-container">
                <a
                  href="https://linkedin.com/in/ahliman-suleymanli-7a44a0302"
                  target="_blank"
                >
                  <FaLinkedin className="text-4xl text-blue-700 icon cursor-pointer transition duration-300 hover:scale-[1.1]" />
                </a>
              </div>
            </div>
          </motion.div>
          <div className="col-span-4 lg:col-span-6 z-10">
            <img
              src={profilPicture}
              className="w-[18.5rem] h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
