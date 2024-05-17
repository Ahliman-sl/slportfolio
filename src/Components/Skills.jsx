/* eslint-disable react/prop-types */
import ProgressBar from "./ProgressBar.jsx";
import ButtonSwitcher from "./ButtonSwitcher.jsx";
import { useState } from "react";

export default function Skills() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section className="w-full h-max mt-[12rem] mb-[5rem]">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Skills & Experience</h2>
            <p className="text-xl">
              For detailed information about my skill levels, education, and
              work experience, please visit the relevant sections on my profile.
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
            <div className="w-full h-max overflow-hidden">
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
      <div className="w-full h-max flex flex-col items-center justify-start gap-10 mt-5">
        <ExperienceText
          title=" 166 FREIGHT AND LOGISTICS "
          text="JUNIOR IT SPECIALIST"
          date="2020-2021"
        />
        <ExperienceText
          title="SHUTTERSTOCK "
          text="FREELANCE SHUTTERSTOCK CONTRIBUTOR"
          date="2018-2019"
        />
      </div>
    </>
  );
}
function EducationContainer() {
  return (
    <>
      <div className="w-full h-max flex  flex-col items-center justify-start gap-10 mt-5">
        <EducationText
          text="Tax and Taxation,Master Degree"
          title="Azerbaijan University"
          date="2020-2022"
        />
        <EducationText
          text="Finance(SABAH groups),Bachelour degree"
          title="UNEC"
          date="2016-2020"
        />
      </div>
    </>
  );
}

function ExperienceText({ title, text, date }) {
  return (
    <div className="w-full h-max flex flex-col gap-2 p-3">
      <p className="text-2xl font-semibold">{title}</p>
      <p>{text}</p>
      <p className="text-md text-purple-800">{date}</p>
    </div>
  );
}
function EducationText({ title, text, date }) {
  return (
    <div className="w-full h-max flex flex-col gap-2 p-3">
      <p className="text-2xl  font-semibold">{title}</p>
      <p className="text-xl">{text}</p>
      <p className="text-md text-purple-800">{date}</p>
    </div>
  );
}
