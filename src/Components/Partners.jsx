import { useEffect } from "react";
import Glide from "@glidejs/glide";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";

export default function Partners() {
  return (
    <div className="w-full h-max mt-[6rem] flex flex-col gap-2">
      <p className="text-4xl font-bold w-full h-max text-center text-slate-700">
        TechnoSlide
      </p>
      <CarouselLogo />
    </div>
  );
}

function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <AiFillHtml5 className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
            <li>
              <FaCss3Alt className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
            <li>
              <SiTailwindcss className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
            <li>
              <IoLogoJavascript className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
            <li>
              <FaReact className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
            <li>
              <SiRedux className="m-auto h-20 max-h-full w-auto max-w-full" />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
