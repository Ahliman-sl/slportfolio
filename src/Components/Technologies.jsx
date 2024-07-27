import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiReactquery, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { DiNpm } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

export default function Technologies() {
  return (
    <div className="with-full h-max flex flex-col justify-center items-center mt-[10rem]">
      <h1 className="text-violet-900 font-bold text-4xl sm:text-3xl md:text-4xl  mb-5 overline decoration-sky-400 decoration-from-font decoration-double">
        Technologies
      </h1>
      <div className="text-violet-950 text-[5rem] w-full h-max gap-5 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mx-4 text-[#ff4405]">
          <AiFillHtml5 />
          <span className="text-[2rem] text-violet-950">HTML</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#4da9ff] ">
          <FaCss3Alt />
          <span className="text-[2rem] text-violet-950">CSS</span>
        </div>
        <div className="flex flex-col items-center mx-4  text-[#9d4dff]">
          <FaBootstrap />
          <span className="text-[2rem] text-violet-950">Bootstrap</span>
        </div>

        <div className="flex flex-col items-center mx-4   text-[#4da9ff]">
          <SiTailwindcss />
          <span className="text-[2rem] text-violet-950">Tailwindcss</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ffe14d] ">
          <IoLogoJavascript />
          <span className="text-[2rem] text-violet-950">Javascript</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#4da9ff] ">
          <FaReact />
          <span className="text-[2rem] text-violet-950">React</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#289477] ">
          <SiReactquery />
          <span className="text-[2rem] text-violet-950">React Query</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#000000] ">
          <SiReactrouter />
          <span className="text-[2rem] text-violet-950">React Router</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-purple-700 ">
          <SiRedux />
          <span className="text-[2rem] text-violet-950">Redux</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#289477] ">
          <RiSupabaseFill />
          <span className="text-[2rem] text-violet-950">Supabase</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff4405] ">
          <DiNpm />
          <span className="text-[2rem] text-violet-950">Npm</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff4405] ">
          <BsGit />
          <span className="text-[2rem] text-violet-950">Git</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-black ">
          <BsGithub />
          <span className="text-[2rem] text-violet-950">Github</span>
        </div>
      </div>
      {/* <CarouselBasicExample /> */}
    </div>
  );
}
