/* eslint-disable react/prop-types */

export default function ButtonSwitcher({ setShowEducation }) {
  return (
    <>
      {/*<!-- Component: Basic lg sized button switch --> */}
      <div className="group relative inline-flex items-center rounded bg-slate-100">
        <input
          className="peer order-2 hidden"
          type="checkbox"
          value=""
          id="id-c001"
        />
        {/*  <!-- First label --> */}
        <button
          className="order-1 inline-flex h-12 cursor-pointer items-center border-2  duration-200 justify-center gap-2 rounded bg-emerald-500 px-10 lg:px-20 text-sm font-medium tracking-wide text-white transition-colors hover:bg-emerald-600  peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent"
          htmlFor="id-c001"
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
        {/*  <!-- Second label --> */}
        <button
          className="order-1 inline-flex h-12 cursor-pointer items-center border-2  duration-200 justify-center gap-2 rounded bg-violet-700 hover:bg-violet-500 px-10 lg:px-20 text-sm font-medium tracking-wide text-stone-50 transition-colors hover:text-slate-300 peer-checked:bg-emerald-500 peer-checked:text-white hover:peer-checked:bg-emerald-600 peer-checked:hover:text-white focus:peer-checked:bg-emerald-700"
          htmlFor="id-c001"
          onClick={() => setShowEducation(false)}
        >
          Experience
        </button>
      </div>
      {/*<!-- End Basic lg sized button switch --> */}
    </>
  );
}
