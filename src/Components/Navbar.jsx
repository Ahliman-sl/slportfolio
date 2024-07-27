import { useState, useEffect, useRef } from "react";
import profilePicture from "../Assets/profil2.jpeg";
import {
  FaReact,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef(null);

  function toggleProfileMenu() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  function handleClick() {
    setIsToggleOpen(false);
    setIsProfileMenuOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);
  return (
    <>
      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      <header className="relative border-b-1  z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div
              id="ReactLogo"
              aria-label="React logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <FaReact className="text-5xl text-orange-500" />
              SL Portfolio
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={handleClick}
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/"
                >
                  <span>Main</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={handleClick}
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/projects"
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={handleClick}
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/articles"
                >
                  <span>Articles</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  onClick={handleClick}
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/about"
                >
                  <span>About me</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/*        <!-- Avatar --> */}
              <div
                onClick={toggleProfileMenu}
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white cursor-pointer"
              >
                <img
                  src={profilePicture}
                  alt="user name"
                  title="user name"
                  width="40"
                  height="40"
                  className="max-w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                  <span className="sr-only"> 7 new emails </span>
                </span>
              </div>
              {/*        <!-- End Avatar --> */}
            </div>
            {isProfileMenuOpen && (
              <div
                className="origin-top-right  absolute right-0 mt-2 w-48 rounded-l-md shadow-lg bg-stone-50 ring-1 ring-black ring-opacity-5"
                ref={profileMenuRef}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                    role="menuitem"
                    href="https://linkedin.com/in/ahliman-suleymanli-7a44a0302"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Follow me on <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                    role="menuitem"
                    href="https://github.com/Ahliman-sl"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Follow me on <FaGithub className="text-2xl" />
                  </a>
                  <a
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                    role="menuitem"
                    href="https://www.facebook.com/ehliman.s"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Follow me on <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-3"
                    role="menuitem"
                    href="https://www.instagram.com/ahlimansl/"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Follow me on <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Avatar--> */}
    </>
  );
}
