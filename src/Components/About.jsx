import { useEffect } from "react";
import ListenMusic from "./ListenMusic";
// import video from "../Assets/janemaryam.mp4";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı en üste kaydır
  }, []); // Sadece bir kere yürüt
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6">
            <ListenMusic />
          </div>
          <div className="col-span-4 lg:col-span-6">
            <p className="text-3xl p-5">
              “<span>Moderately wise a man</span> should be not too crafty or
              clever. A learned man’s heart whose learning is deep seldom sings
              with joy.”
            </p>
            <p className="text-center text-2xl p-2">
              Hello there,My name is Ahliman Suleymanli
            </p>
            <p>
              {`Ahliman Suleymanli, a native of Azerbaijan, is a versatile
              individual with a passion for front-end development. Born on March
              16, 2000, Ahliman has dedicated himself to mastering various
              aspects of IT and web development, carving out a niche for himself
              in the digital realm. With a Bachelor's degree in Finance from
              UNEC and a Master's degree in Tax and Taxation from Azerbaijan
              University, Ahliman brings a unique blend of financial acumen and
              technical expertise to the table. His educational background has
              instilled in him a disciplined approach to problem-solving and a
              keen eye for detail, qualities that resonate in his work as a
              developer. Ahliman's journey into the world of IT began as a
              Junior IT Specialist at 166 Freight and Logistics, where he honed
              his skills in desktop and software installations, technical
              troubleshooting, and customer service. During this time, he
              demonstrated a knack for analyzing customer needs and delivering
              prompt, effective solutions. In his freelance endeavors as a
              Shutterstock contributor, Ahliman showcased his creativity by
              creating and marketing icons and vector graphics. This experience
              not only allowed him to explore his artistic side but also
              provided valuable insights into digital marketing and content
              creation. Proficient in a range of programming languages and tools
              including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React,
              npm, Git, and GitHub, Ahliman has demonstrated his ability to
              adapt to evolving technologies and industry trends. His portfolio
              speaks volumes about his expertise, featuring a diverse array of
              projects spanning web development, design, and digital solutions.
              Beyond his professional achievements, Ahliman is a multilingual
              individual, fluent in Azerbaijani and Turkish, with a proficient
              command of English. His language skills not only facilitate
              effective communication in multicultural environments but also
              underscore his commitment to continuous learning and personal
              growth. Outside of work, Ahliman has showcased his talents in
              various competitions and tournaments, emerging as a champion in
              debates and demonstrating his prowess as a skilled communicator.
              Having completed his military service in the "Commando" operations
              brigade, Ahliman embodies qualities of discipline, resilience, and
              determination, which are reflected in his approach to both
              professional and personal pursuits. With a driving license
              spanning categories B1, B, C1, and C, Ahliman is equipped to
              navigate both the digital landscape and the physical world with
              equal ease. As Ahliman continues to carve out his path in the
              world of front-end development, his portfolio serves as a
              testament to his dedication, creativity, and unwavering commitment
              to excellence.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
