// import { useEffect, useState } from "react";
// import Loader from "./Loader.jsx";
import Header from "../Pages/Header";
import Main from "../Pages/Main";
import Footer from "../Pages/Footer";
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
    <div className="w-full h-max bg-[#FAFAFB] flex flex-col">
      {/* {loading ? (
        <Loader />
      ) : (
        <> */}
      <Header />
      <Main />
      <Footer />
      {/* </>
      )} */}
    </div>
  );
}
