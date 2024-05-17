import { TbError404 } from "react-icons/tb";

function PageNotFound() {
  return (
    <div className="w-full h-dvh bg-cyan-950 text-stone-50 text-4xl flex flex-col lg:flex-row items-center justify-center gap-5">
      <TbError404 className=" text-[2rem] md:[text-5rem] lg:text-[10rem]" />
      <p className="sm:text-[1rem] md:text-[3rem] lg:text-[4rem]">
        Page not Found
      </p>
    </div>
  );
}

export default PageNotFound;
