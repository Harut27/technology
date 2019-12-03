import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";

import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import fakedata from "../../../fakedata/news";


import laptopsData from "../../../data-from-backend/laptops-data";
import HowtoData from "../../../data-from-backend/howto-data";
import phonesData from "../../../data-from-backend/phones-data";
import photographyesData from "../../../data-from-backend/photography-data";
import tvsData from "../../../data-from-backend/tvs-data";


import { setNews, addSingleNews } from "../../../state/actions";

const News = ({ news, setNews, addSingleNews }) => {
  // useEffect(() => {
  //   const dataFromBackend = fakedata;
  //   setNews(dataFromBackend);
  // }, [news, setNews]);

  // const addNewNews = () => {
  //   const newDATA = {
  //     title: "new news",
  //     text: "blabla"
  //   };
  //   addSingleNews(newDATA);
  // };

  const dataToShow = [];
  let maxLength = 0;
  const setMax = (arr) => {
    if (maxLength < arr.length) { maxLength = arr.length; }
  };

  setMax(laptopsData);
  setMax(HowtoData);
  setMax(phonesData);
  setMax(photographyesData);
  setMax(tvsData);

  for (let i = 0; i < maxLength - 1; ++i) {
    laptopsData.length > i && dataToShow.push(laptopsData[i]);
    HowtoData.length > i && dataToShow.push(HowtoData[i]);
    phonesData.length > i && dataToShow.push(phonesData[i]);
    photographyesData.length > i && dataToShow.push(photographyesData[i]);
    tvsData.length > i && dataToShow.push(tvsData[i]);
  }

  return (

    <div className="phones">

      <div className="title-and-titlePhone">

        <div className="title-text">
          <h1>GS Tech news and features</h1>
          <span>All of the latest technology news and features from GS Tech</span>
        </div>

        <div className="title-photos">
          <NewsCard size="625x460" image={HowtoData[5].src} hasBg={true}
            title={HowtoData[5].title}
            description={HowtoData[5].subtitle}
            id={HowtoData[5].id}
            link={`/posts/${HowtoData[5].id}/info`}
          />

          <div className="sub-title-photos">
            <NewsCard size="300x300" image={laptopsData[6].src} hasBg={true}
              title={laptopsData[6].title}
              id={laptopsData[6].id}
              link={`/posts/${laptopsData[6].id}/info`}
            />

            <NewsCard size="300x300" image={tvsData[2].src} hasBg={true}
              title={tvsData[2].title}
              id={tvsData[2].id}
              link={`/posts/${tvsData[2].id}/info`}
            />
          </div>

        </div>

        <div className="all-phones">
          <span>All Phones</span>
        </div>

      </div>
      <div className="phones-content">
        {
          <div className="gago">
            {
              dataToShow.map((element, ind) => (
                <div className="phones-wrapper" key={ind}>
                  <MainCart image={element.src} hasBg={false}
                    title={element.title}
                    description={element.subtitle}
                    id={element.id}
                    link={`/posts/${element.id}/info`}
                  />
                </div>
              ))
            }

          </div>
        }
      </div>
    </div>


    // /* {news.length &&
    // news.map((post, index) => {
    //   return (
    //     <MainCart
    //       image={post.src}
    //       hasBg={false}
    //       title={post.title}
    //       description={`${post.content.slice(0, 102)}...`}
    //       id={post.id}
    //       link={`news/${post.id}`}
    //     />
    //   );
    // })} */

  );
};

const mapDispatchToProps = dispatch => {
  //uxarki es functian depi componenti props
  return {
    setNews: dataFromBackend => {
      dispatch(setNews(dataFromBackend));
    },
    addSingleNews: news => {
      dispatch(addSingleNews(news));
    } //  news uxarkuma actionin vor reduser# ashxati u @ngni propsi mej
  };
};

const mapStateToProps = state => {
  // vercnum enq stat@ propsi mijocov
  return {
    news: state.news
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
