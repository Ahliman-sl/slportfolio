/* eslint-disable react/prop-types */
export default function ProgressBar({ color, value }) {
  return (
    <>
      {/*<!-- Component: Success progress bar with trailing icon --> */}
      <div className="flex w-[20rem] gap-2">
        <label
          id="p04f-label"
          htmlFor="p04f"
          className="order-2 mb-0 text-center text-xs text-emerald-500"
        >
          <span className="sr-only">uploading</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-labelledby="title-p04f desc-p04f"
          >
            <title id="title-p04f">Icon title</title>
            <desc id="desc-p04f">Some desc</desc>
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <progress
          aria-labelledby="p04f-label"
          id="p04f"
          max="100"
          value={value}
          className={`block w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-400 [&::-webkit-progress-value]:bg-${color}-500 [&::-moz-progress-bar]:bg-${color}-500`}
        >
          100%
        </progress>
      </div>
      {/*<!-- End Success progress bar with trailing icon --> */}
    </>
  );
}
