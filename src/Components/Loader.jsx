export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 z-50">
      <div className="w-28 h-28">
        {/*<!-- Component: Colored amber base sized 1/2 spinner --> */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-live="polite"
          aria-busy="true"
          aria-labelledby="title-05 desc-05"
          className="w-full h-full animate animate-spin"
        >
          <title id="title-05">Icon title</title>
          <desc id="desc-05">Some desc</desc>
          <circle
            cx="12"
            cy="12"
            r="10"
            className="stroke-slate-200"
            strokeWidth="4"
          />
          <path
            d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
            className="stroke-amber-500"
            strokeWidth="4"
          />
        </svg>
        {/*<!-- End Colored amber base sized 1/2 spinner --> */}
      </div>
    </div>
  );
}
