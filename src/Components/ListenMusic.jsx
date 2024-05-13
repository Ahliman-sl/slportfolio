/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReusableButton from "./ReusableButton";
import profilPicture from "../Assets/profil.png";
import janemaryam from "../Assets/Audio/janemaryam.mp3";
import { motion } from "framer-motion";

export default function ListenMusic({ setDarktheme }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(janemaryam);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Şarkıyı başa sar.
    }

    // Component kaldırıldığında temizlik yap.
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]); // isPlaying değiştiğinde useEffect çalışacak.

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setDarktheme(!isPlaying);
  };

  return (
    <div>
      <div className="w-full h-max flex justify-center">
        {isPlaying ? (
          <motion.p
            className="text-3xl text-violet-900 w-[20rem] h-[25rem] flex items-center justify-center"
            initial={{
              // rotate: 0,
              opacity: 0,
            }}
            animate={{
              // rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 4,
            }}
          >
            Now you can read with music 🎶
          </motion.p>
        ) : (
          <motion.img
            src={profilPicture}
            className="w-[20rem] h-[25rem] object-cover rounded-full"
            alt="Profile"
            initial={{
              // rotate: 0,
              opacity: 0,
            }}
            animate={{
              // rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-10">
        <p>Are you bored of reading?</p>
        <p>{`Don't worry, click the button :)`}</p>
      </div>
      <div className="flex justify-center">
        <ReusableButton onClick={togglePlay}>
          {isPlaying ? "Stop" : "Play"}
        </ReusableButton>
      </div>
    </div>
  );
}
