/* eslint-disable react/prop-types */
import ProgressBar from "./ProgressBar.jsx";
import ButtonSwitcher from "./ButtonSwitcher.jsx";
import { useState } from "react";

export default function Skills() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section className="w-full h-max mt-[12rem]">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Skills & Experience</h2>
            <p className="text-xl">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum clita dolor duo clita sit.
            </p>
            <h3 className="text-3xl font-semibold">My Skills</h3>
            <div className="w-full h-max flex flex-col lg:flex-row">
              {/* SKILLSET 1 */}
              <div className="w-full h-max">
                <div className="w-full h-max">
                  <p>HTML</p>
                  <ProgressBar color="green" value={100} />
                </div>
                <div className="w-full h-max">
                  <p>CSS</p>
                  <ProgressBar color="red" value={90} />
                </div>
                <div className="w-full h-max">
                  <p>TailwindCSS</p>
                  <ProgressBar color="cyan" value={100} />
                </div>
                <div className="w-full h-max">
                  <p>Bootstrap</p>
                  <ProgressBar color="emerald" value={100} />
                </div>
              </div>
              {/* SKILLSET 2 */}

              <div className="w-full h-max">
                <div className="w-full h-max">
                  <p>JavaScript</p>
                  <ProgressBar color="red" value={88} />
                </div>
                <div className="w-full h-max">
                  <p>React</p>
                  <ProgressBar color="cyan" value={94} />
                </div>
                <div className="w-full h-max">
                  <p>Redux</p>
                  <ProgressBar color="green" value={85} />
                </div>
                <div className="w-full h-max">
                  <p>React Router</p>
                  <ProgressBar color="emerald" value={90} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-6 flex flex-col">
            <div className="w-full h-max">
              <ButtonSwitcher
                showEducation={showEducation}
                setShowEducation={setShowEducation}
              />
            </div>
            {showEducation ? <EducationContainer /> : <ExperienceContainer />}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceContainer() {
  return (
    <>
      <div className="w-full h-max flex items-center justify-start gap-10 mt-5">
        <ExperienceText />
        <ExperienceText />
      </div>
      <div className="w-full h-max flex items-center justify-start gap-10 mt-5">
        <ExperienceText />
        <ExperienceText />
      </div>
    </>
  );
}
function EducationContainer() {
  return (
    <>
      <div className="w-full h-max flex items-center justify-start gap-10 mt-5">
        <EducationText />
        <EducationText />
      </div>
      <div className="w-full h-max flex items-center justify-start gap-10 mt-5">
        <EducationText />
        <EducationText />
      </div>
    </>
  );
}

function ExperienceText() {
  return (
    <div className="w-[10rem] h-max flex flex-col gap-2 p-3">
      <p className="text-2xl font-semibold">UI Designer</p>
      <p className="text-md text-purple-800">2000 - 2045</p>
      <p>Apex Software Inc</p>
    </div>
  );
}
function EducationText() {
  return (
    <div className="w-[10rem] h-max flex flex-col gap-2 p-3">
      <p className="text-2xl font-semibold">Education</p>
      <p className="text-md text-purple-800">2000 - 2045</p>
      <p>Apex Software Inc</p>
    </div>
  );
}
