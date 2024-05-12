import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      {/*    <!-- Component: Dark Theme Footer --> */}
      <footer className="w-full text-slate-400 mt-5">
        {/*      <!-- Main footer --> */}
        <div className="pt-5 pb-5 text-sm border-t border-slate-900 bg-slate-800">
          <div className="container px-6 mx-auto w-full h-full flex items-center justify-center">
            <p className="w-max h-max text-xl">
              This site designed and created by Ahliman Suleymanli
            </p>
          </div>
        </div>
        {/*      <!-- Sub Footer --> */}
        <div className="py-4 text-sm border-t border-slate-900 bg-slate-700">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
                SL Portfolio version 1.0
              </div>
              <nav
                aria-labelledby="footer-social-links-dark"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
              >
                <h2 className="sr-only" id="footer-social-links-dark">
                  Social Media Links
                </h2>
                <div className="flex items-center justify-end gap-4">
                  <FaLinkedin className="text-2xl transition duration-300 hover:scale-[1.1] cursor-pointer" />
                  <FaGithub className="text-2xl transition duration-300 hover:scale-[1.1] cursor-pointer" />
                  <FaFacebook className="text-2xl transition duration-300 hover:scale-[1.1] cursor-pointer" />
                  <FaInstagram className="text-2xl transition duration-300 hover:scale-[1.1] cursor-pointer" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Dark Theme Footer --> */}
    </>
  );
}
