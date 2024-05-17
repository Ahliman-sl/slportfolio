import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdDoneAll } from "react-icons/io";
import ReusableButton from "../Components/ReusableButton.jsx";
import npmPicture from "../Assets/npm.jpg";
import reactPicture from "../Assets/react.jpg";
// import { useScroll, motion, useTransform } from "framer-motion";

export default function Experience() {
  // const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 500], [0, -100]);
  return (
    <motion.div
      className="container px-6 m-auto mt-[4rem] md:mt-0"
      // style={{ y }}
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-6 flex flex-col gap-4">
          <div className="w-full h-max flex items-center justify-center">
            <div className="w-auto h-auto flex flex-col gap-2">
              <p className="text-9xl font-bold text-center">1</p>
              <span className="text-2xl font-semibold tracking-[1.1rem]">
                Years
              </span>
            </div>
            <div>
              <p className="text-xl">of working experience in IT Industry</p>
            </div>
          </div>
          <div className="w-full h-max flex flex-col gap-5 items-start justify-center">
            <p className="text-xl">
              As a Front-End Developer, I am fueled by my passion for creating
              immersive and user-friendly web experiences. With a focus on React
              JS, I am eager to dive into the world of front-end development and
              grow alongside innovative projects.
            </p>
            <div className="w-max h-auto flex flex-col items-center justify-center">
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                Javascript
              </p>
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                Tailwind CSS
              </p>
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                React JS
              </p>
            </div>
            <div className="w-full h-auto">
              <Link to="/about">
                <ReusableButton>More Info</ReusableButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6">
          <div className="w-full h-auto flex flex-col lg:flex-row gap-4">
            <img src={npmPicture} className="w-[20rem] rounded-md" />
            <img src={reactPicture} className="w-[20rem] rounded-md" />
          </div>
          <div className="w-full h-auto mt-5 flex flex-col gap-5 ">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold border-r-2 pr-2 border-gray-400">
                Total Projects
              </p>
              <p className="text-2xl font-bold text-violet-700">20 +</p>
            </div>
            <div>
              <p>
                I continually enhance my skills by working on a diverse range of
                projects and tasks.
              </p>
            </div>
          </div>
          <div className="w-full h-auto mt-2 flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold border-r-2 pr-2 border-gray-400">
                Technical Proficiency
              </p>
              <p className="text-xl font-bold text-violet-700">
                React JS, Responsive Design, API Integration
              </p>
            </div>
            <div>
              <p>
                I focus on creating dynamic and responsive web applications
                using React JS. My experience in API integration ensures
                seamless communication between the front-end and back-end
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
