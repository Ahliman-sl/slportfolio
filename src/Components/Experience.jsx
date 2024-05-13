import { IoMdDoneAll } from "react-icons/io";
import ReusableButton from "../Components/ReusableButton.jsx";
import npmPicture from "../Assets/npm.jpg";
import reactPicture from "../Assets/react.jpg";
// import { useScroll, motion, useTransform } from "framer-motion";
import { motion } from "framer-motion";

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
              <p className="text-xl">
                of working experience as a web designer & developer
              </p>
            </div>
          </div>
          <div className="w-full h-max flex flex-col gap-5 items-start justify-center">
            <p className="text-xl">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
              nonumy clita sit at, sed sit sanctus dolor eos.
            </p>
            <div className="w-max h-auto flex flex-col items-center justify-center">
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                Afordable Prices
              </p>
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                Afordable Prices
              </p>
              <p className="flex gap-2 items-center text-xl">
                <IoMdDoneAll className="text-2xl" />
                Afordable Prices
              </p>
            </div>
            <div className="w-full h-auto">
              <ReusableButton>More Info</ReusableButton>
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
                Happy Clients
              </p>
              <p className="text-2xl font-bold text-violet-700">1234</p>
            </div>
            <div>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam amet diam ipsum clita labore dolor duo clita.
              </p>
            </div>
          </div>
          <div className="w-full h-auto mt-2 flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold border-r-2 pr-2 border-gray-400">
                Happy Clients
              </p>
              <p className="text-2xl font-bold text-violet-700">1234</p>
            </div>
            <div>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam amet diam ipsum clita labore dolor duo clita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
