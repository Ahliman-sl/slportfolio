import Resume from "../Docs/AhlimanCV.pdf";
export default function ResumeButton() {
  return (
    <>
      {/*<!-- Component: Large primary button with trailing icon  --> */}
      <a href={Resume} download={Resume}>
        <button className="inline-flex h-12  items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-6 text-md font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
          <span>Download Resume</span>
          <span className="relative only:-mx-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-32 desc-32"
            >
              <title id="title-32">AhlimanCV.pdf</title>
              <desc id="desc-32">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </span>
        </button>
      </a>
      {/*<!-- End Large primary button with trailing icon  --> */}
    </>
  );
}
