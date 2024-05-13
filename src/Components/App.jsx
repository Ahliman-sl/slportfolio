// import { useEffect, useState } from "react";
// import Loader from "./Loader.jsx";
import Navbar from "../Components/Navbar";
import Main from "../Pages/Main";
import Articles from "./Articles";
import About from "./About";
import Footer from "../Pages/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "../Styles/index.css";

export default function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <Router>
      <div className="w-full h-max bg-[#FAFAFB] flex flex-col">
        {/* {loading ? (
        <Loader />
      ) : (
        <> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />

        {/* </>
      )} */}
      </div>
    </Router>
  );
}
