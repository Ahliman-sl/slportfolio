import arrayMethods from "../Assets/ArticlesImages/arraymethods.jpg";
import jsReview from "../Assets/ArticlesImages/jsReview.jpg";
import ReactSL from "../Assets/ArticlesImages/ReactSL.jpg";
import reactState from "../Assets/ArticlesImages/reactState.jpg";

/* eslint-disable react/prop-types */
export default function Articles() {
  return (
    <section className="w-[95%] mx-auto  lg:h-dvh">
      <p className="w-full h-max text-center text-2xl md:text-3xl lg:text-4xl p-5 text-violet-900 font-semibold border-b-2 border-cyan-600">
        Articles written by Ahliman Suleymanli
      </p>
      <div
        className="container px-6 m-auto w-full h-full flex md:flex-wrap flex-col md:flex-row max-lg:items-center  justify-center p-10 gap-5 
      "
      >
        <ArticleCard
          img={arrayMethods}
          text="Proqramlaşdırma dillərində məlumatların idarə edilməsi..."
          date="Published on Apr 14, 2024"
          url="https://medium.com/@ahliman.slymn/javascript-array-metodları-düzgün-metod-seçimi-9e125ab25046"
        />
        <ArticleCard
          img={ReactSL}
          text="React, müasir web tətbiqləri yaratmaq üçün..."
          date="Published on Apr 16, 2024"
          url="https://medium.com/@ahliman.slymn/how-to-work-react-behind-the-scenes-d8c9443b1ab8"
        />
        <ArticleCard
          img={jsReview}
          text="JavaScript web inkişafında ən çox istifadə..."
          date="Published on Apr 21, 2024"
          url="https://medium.com/@ahliman.slymn/javascript-a-short-review-for-react-567a4acb28dc"
        />
        <ArticleCard
          img={reactState}
          text="State management, web tətbiqləri (state) ilə əlaqədar..."
          date="Published on May 7, 2024"
          url="https://medium.com/@ahliman.slymn/state-managment-fundamentals-in-react-570e70670fd9"
        />
      </div>
    </section>
  );
}

function ArticleCard({ img, text, date, url }) {
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[20rem] h-[20rem] hover:scale-[1.07] transition duration-200">
      <a href={url} target="_blank">
        <figure>
          <img src={img} alt="card image" className="aspect-video w-full" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">{text}</h3>
            <p className="text-sm text-slate-400"> {date}</p>
          </header>
        </div>
      </a>
    </div>
  );
}
