/* eslint-disable react/prop-types */
// Import Project Images
import Bankist from "../Assets/ProjectImages/BANKIST.png";
import Mapty from "../Assets/ProjectImages/Mapty.png";
import usepopcorn from "../Assets/ProjectImages/usepopcorn.png";
import eatnsplit from "../Assets/ProjectImages/eatnsplit.png";
import GMN from "../Assets/ProjectImages/GMN.png";
import InsightSphere from "../Assets/ProjectImages/Insgihtsphere.png";
import Forkify from "../Assets/ProjectImages/FORKIFY.png";
import calculator from "../Assets/ProjectImages/calculator.png";
import weatherapp from "../Assets/ProjectImages/weatherapp.png";
import azwayfinder from "../Assets/ProjectImages/azwayfinder.png";
import fitnessStore from "../Assets/ProjectImages/fitnessStore.png";
import fastreactpizza from "../Assets/ProjectImages/fastreactpizza.png";

// import Bmicalculator from "../Assets/ProjectImages/bmicalculator.png";
import onlinekeyboard from "../Assets/ProjectImages/onlinekeyboard.png";
import lawyerwebsite from "../Assets/ProjectImages/lawyerWebsite.png";
import loginPage from "../Assets/ProjectImages/loginPage.png";
import reactQuiz from "../Assets/ProjectImages/reactquiz.png";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  // IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    text: "Fitness Store",
    description:
      "Discover a wide range of high-quality supplements tailored to meet your fitness goals at Fitness Store. Achieve peak performance with our expertly curated selection of vitamins, protein powders, and more",
    imgSRC: fitnessStore,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    program8: "Redux Toolkit",
    program9: "React Router",

    urlLink: "https://fitnessstore.netlify.app/",
  },
  {
    text: "Fast-React-Pizza",
    description:
      "Indulge in delicious, handcrafted pizzas made with the freshest ingredients at our pizza restaurant. Experience the perfect blend of flavors with our gourmet selections, from classic Margherita to innovative specialty pies",
    imgSRC: fastreactpizza,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    program8: "Redux Toolkit",
    program9: "React Router",
    urlLink: "https://fastpizzasl.netlify.app/",
  },
  {
    text: "Usepopcorn",
    description:
      "A watched movie app that helps you keep track of the films you've watched, offering personalized recommendations and ratings.",
    imgSRC: usepopcorn,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://usepopcornsl.netlify.app/",
  },
  {
    text: "Lawyer Website",
    description:
      "I've developed a user-friendly and functional design for a lawyer website. The site is customized to meet the needs of clients.",
    imgSRC: lawyerwebsite,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://lawyersl.netlify.app/",
  },
  {
    text: "AzWayFinder",
    description:
      "Through Azwayfinder, you can see the distance between the cities you want to go to within Azerbaijan, you can get acquainted with the weather forecast in the city you are going to according to the selected date.",
    imgSRC: azwayfinder,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://azwayfinder.netlify.app",
  },
  {
    text: "TT login",
    description:
      "A user-friendly and secure login page that unlocks new travel experiences. An ideal platform for managing your travel plans and safeguarding your information.",
    imgSRC: loginPage,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://loginsl.netlify.app/",
  },
  {
    text: "InSightSphere",
    description:
      "My website is a platform where you can stay updated on the latest news and current events.",
    imgSRC: InsightSphere,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program6: "Responsive",
    program7: "Bootstrap",
    urlLink: "https://insightspheresl.netlify.app/",
  },
  {
    text: "Eat and Split",
    description:
      "Eat and Split is a convenient app that allows you to easily split restaurant bills and make payments.",
    imgSRC: eatnsplit,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    urlLink: "https://eatnsplitsl.netlify.app/",
  },

  {
    text: "Mapty",
    description:
      "My website allows users to easily navigate to their desired location by clicking on the desired location in their city, enabling them to set a marker, for instance, for running purposes.",
    imgSRC: Mapty,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program6: "Responsive",
    urlLink: "https://maptysl.netlify.app/",
  },
  {
    text: "Bankist",
    description:
      "My website is an online banking application where users can create accounts and perform transactions such as sending money and applying for loans.",
    imgSRC: Bankist,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program6: "Responsive",
    urlLink: "https://bankistsl.netlify.app/",
  },
  {
    text: "React Quiz",
    description:
      "Test your knowledge with this interactive React quiz! Dive into diverse topics and challenge yourself with engaging questions.",
    imgSRC: reactQuiz,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://reactquizsl.netlify.app",
  },
  {
    text: "GMN",
    description:
      "My website hosts a 'Guess My Number' game where users can enjoy guessing numbers.",
    imgSRC: GMN,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program6: "Responsive",
    urlLink: "https://gmngsl.netlify.app/",
  },
  {
    text: "Forkify",
    description:
      "My website is a recipe site where you can discover a wide range of culinary delights.",
    imgSRC: Forkify,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program6: "Responsive",
    urlLink: "https://forkifysl.netlify.app/",
  },
  {
    text: "Online Keyboard",
    description:
      "An online keyboard app that provides virtual keyboard functionality for convenient typing across various devices and platforms.",
    imgSRC: onlinekeyboard,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    urlLink: "https://onlinekeyboardsl.netlify.app/",
  },
  {
    text: "Rollin Calc",
    description:
      "A calculator app designed for quick and efficient mathematical calculations, featuring a user-friendly interface and essential functions for everyday use.",
    imgSRC: calculator,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://rcalcsl.netlify.app/",
  },
  {
    text: "Weather App",
    description:
      "A weather app providing real-time updates on current weather conditions, forecasts, and personalized weather alerts based on location preferences.",
    imgSRC: weatherapp,
    program1: "HTML5",
    program2: "CSS",
    program3: "JavaScript",
    program4: "SCSS",
    program5: "React",
    program6: "Responsive",
    program7: "Tailwind CSS",
    urlLink: "https://rcalcsl.netlify.app/",
  },

  // Diğer projeler buraya eklenecek...
];
export default function Projects({ showOnlyFirstSix }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı en üste kaydır
  }, []); // Sadece bir kere yürüt
  // Eğer showOnlyFirstFour true ise sadece ilk dört projeyi göster
  const projectsToShow = showOnlyFirstSix
    ? projectsData.slice(0, 6)
    : projectsData;

  return (
    <>
      <div className="w-full h-max flex flex-col gap-10">
        <div className="w-full justify-center items-center h-max flex flex-row flex-wrap gap-5 mt-4 ">
          {/* Proje verilerini haritalama ve BookingCard bileşenlerini oluşturma */}
          {projectsToShow.map((project, index) => (
            <BookingCard key={index} {...project} />
          ))}
        </div>
        <div className="w-full h-max flex items-center justify-center">
          {showOnlyFirstSix ? (
            <Link
              to="/projects"
              className="inline-flex h-12 w-[10rem] items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              All projets
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

function BookingCard({
  text,
  imgSRC,
  description,
  program1,
  program2,
  program3,
  program4,
  program5,
  program6,
  program7,
  program8,
  program9,
  urlLink,
}) {
  return (
    <Card className="w-full max-w-[24rem] h-[40rem] md:max-w-[35rem] md:h-[45rem]  lg:max-w-[26rem] lg:h-[40rem] rounded-xl shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={imgSRC}
          className="w-full h-[25rem] object-cover"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold text-2xl w-full h-[3rem] flex items-center justify-center text-center"
          >
            {text}
          </Typography>
        </div>
        <Typography color="gray" className="text-center p-1">
          {description}
        </Typography>
        <div className="group mt-8 inline-flex w-full flex-wrap items-center justify-center gap-3">
          <Tooltip content={program1}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program1}
            </span>
          </Tooltip>
          {[
            "Usepopcorn",
            "Rollin Calc",
            "Weather App",
            "Bmi calculator",
            "Lawyer Website",
            "TT login",
            "React Quiz",
            "AzWayFinder",
            "Fitness Store",
            "Fast-React-Pizza",
          ].includes(text) && (
            <Tooltip content={program7}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program7}
              </span>
            </Tooltip>
          )}
          {["Fitness Store", "Fast-React-Pizza"].includes(text) && (
            <Tooltip content={program8}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program8}
              </span>
            </Tooltip>
          )}
          {["Fitness Store", "Fast-React-Pizza"].includes(text) && (
            <Tooltip content={program9}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program9}
              </span>
            </Tooltip>
          )}
          <Tooltip content={program2}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program2}
            </span>
          </Tooltip>
          <Tooltip content={program3}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {program3}
            </span>
          </Tooltip>
          {/* Show program4 tooltip for only Forkify*/}
          {text === "Forkify" && (
            <Tooltip content={program4}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program4}
              </span>
            </Tooltip>
          )}
          {/* Show program7 tooltip for only Insightspheresl*/}
          {text === "InSightSphere" && (
            <Tooltip content={program7}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program7}
              </span>
            </Tooltip>
          )}
          {[
            "Eat and Split",
            "Usepopcorn",
            "Rollin Calc",
            "Weather App",
            "Bmi calculator",
            "Lawyer Website",
            "TT login",
            "React Quiz",
            "AzWayFinder",
            "Fitness Store",
            "Fast-React-Pizza",
          ].includes(text) && (
            <Tooltip content={program5}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program5}
              </span>
            </Tooltip>
          )}
          {[
            "Weather App",
            "Usepopcorn",
            "Online Keyboard",
            "Rollin Calc",
            "Eat and Split",
            "InSightSphere",
            "Lawyer Website",
            "TT login",
            "AzWayFinder",
            "Fitness Store",
            "Fast-React-Pizza",
          ].includes(text) && (
            <Tooltip content={program6}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {program6}
              </span>
            </Tooltip>
          )}

          <Tooltip content="Status:Online ">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3 pb-5 text-center flex items-center justify-center">
        <a href={urlLink} target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-slate-700 text-sm rounded-md  w-[6rem] h-[3rem]  flex items-center justify-center hover:bg-rose-500 transition duration-300  text-white"
            fullWidth={true}
          >
            Go website
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
