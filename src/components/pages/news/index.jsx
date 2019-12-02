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
  useEffect(() => {
    const dataFromBackend = fakedata;
    setNews(dataFromBackend);
  }, [news, setNews]);

  const addNewNews = () => {
    const newDATA = {
      title: "new news",
      text: "blabla"
    };
    addSingleNews(newDATA);
  };

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

































    // {
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
    // }
    // {/* 
    // <MainCart
    //   image={Gaming}
    //   hasBg={false}
    //   title="The ambitious future of gaming is here: our Google Stadia review"
    //   description="
    //                       We put Stadia through its paces on three different devices on three
    //                        different connections - here’s how Google’s ambitious game-streaming platform 
    //                        performed."
    //   id="2"
    //   link="/news/2 "
    // /> */}

    // {
    /* <MainCart
    image={HonorWatch}
    hasBg={false}
    title="Honor Watch Magic 2 launch date confirmed - and
                    we've got the first images"
    description="
                    Exclusive: We've got pictures of Honor's new smartwatch, and it seems to
                    take a step away from the 'classic' watch design."
    id="3"
    link="/news/3 "
  />

  <MainCart
    image={BlackFriday}
    hasBg={false}
    title="Walmart is already offering big Black Friday-style 
                discounts"
    description="
                Walmart's Black Friday 2019 sale is here and we've rounded up the best early deals
                on TVs, laptops, AirPods, Apple Watches, toys, and more."
    id="4"
    link="/news/4 "
  />

  <MainCart
    image={DisneyPlus}
    hasBg={false}
    title="We've got some tips and tricks for Disney+"
    description="
                If Disney keeps it updated with new content, Disney Plus could rival Netflix
                sooner rather than later."
    id="5"
    link="/news/5 "
  />

  <MainCart
    image={PhotoshopIPad}
    hasBg={false}
    title="Not my Photoshop: our Photoshop for iPad review"
    description="
                Adobe's long-awaited version of Photoshop for iPad is here,
                but it's not quite ready for prime time."
    id="6"
    link="/news/6 "
  />

  <MainCart
    size="300x300"
    image={Ps5}
    hasBg={false}
    title="PS5 price won't be as bad as we thought, if this leak is to be
                believed"
    description="
                A new leak may have spilled the beans on the PlayStation 5 price and release date."
    id="7"
    link="/news/7 "
  />

  <MainCart
    image={GalaxyS10}
    hasBg={false}
    title="Get a Samsung Galaxy S10e for under $400 with this early Black Friday deal"
    description="The Samsung Galaxy S10e is even cheaper with this pair of Black Friday deals."
    id="8"
    link="/news/8 "
  />

  <MainCart
    image={Ibm}
    hasBg={false}
    title="IBM launches huge open-source security platform"
    description="
                IBM's Cloud Pak for Security allows organizations to connect with any security tool,
                cloud or on-premise system without having to move data."
    id="9"
    link="/news/9 "
  />

  <MainCart
    size="300x300"
    image={StarWars}
    hasBg={false}
    title="2022's Star Wars movie will be announced in January and has a director, says report"
    description="2022's Star Wars film won't be Rian Johnson's movie or from the Game of Thrones creators. So who's directing it?"
    id="10"
    link="/news/10 "
  />
  <MainCart
    image={MobileDeals}
    hasBg={false}
    title="The best mobile phone deals in the UK this month"
    description="Search and compare all of the UK's mobile phone deals or go with 
                our editor's recommendations."
    id="11"
    link="/news/11 "
  />

  <MainCart
    image={S10}
    hasBg={false}
    title="Samsung Galaxy S10 Lite surprisingly just confirmed by Samsung"
    description="Samsung has just mentioned the Galaxy S10 Lite by name, even
                though it's a name that doesn't make much sense."
    id="12"
    link="/news/12 "
  />

  <MainCart
    image={BlackFriday2}
    hasBg={false}
    title="Get your cybersecurity needs sorted with Bitdefender's new
                Black Friday deal "
    description="Don't miss out on these top-notch Black Friday deal - save up to
                64% on the world's best antivirus software."
    id="13"
    link="/news/13 "
  />

  <MainCart
    image={Apple}
    hasBg={false}
    title="Apple could be making an iTunes successor specifically 
                for Windows"
    description="Apple is looking for a senior software engineer who 'loves music' 
                and has experience making Windows apps."
    id="14"
    link="/news/14 "
  />

  <MainCart
    image={BestAppleWatch}
    hasBg={false}
    title="The best Apple Watch apps we've used in 2019"
    description="Our list of the very best Apple Watch apps for fitness,
                sleep, travel and more."
    id="15"
    link="/news/15 "
  />

  <MainCart
    image={Rupauls}
    hasBg={false}
    title="How to watch RuPaul's Drag Race UK online: stream from the
                UK or abroad"
    description="Don't miss a second of the glamorous action, use this handy
                guide to see how to watch RuPaul's Drag Race UK online from
                anywhere."
    id="16"
    link="/news/16 "
  />

  <MainCart
    image={Athlon}
    hasBg={false}
    title="AMD launches ridiculously cheap $49 Athlon 3000G processor – 
                which can  even be overclocked"
    description="AMD’s new Athlon 3000G processor costs less than $50, but
                it looks like it could be a formidable little CPU."
    id="17"
    link="/news/17 "
  />

  <MainCart
    image={IntelCPU}
    hasBg={false}
    title="Intel apologizes for CPU shortages – which remain a problem
                (AMD will be glad to hear)"
    description="It’s a case of fewer CPUs, more problems for Intel, with supply
                issues exacerbated by intense competition from AMD."
    id="18"
    link="/news/18 "
  />

  <MainCart
    image={Ps4Ps4Pro}
    hasBg={false}
    title="PS4 and PS4 Pro Black Friday deals 2019: what prices and bundles
                to expect"
    description="We'll tell you what PS4, PS4 Pro, PSVR, gaming and accessory deals
                to expect on Black Friday and Cyber Monday 2019."
    descriptionLabel="black friday 2019"
    id="19"
    link="/news/19 "
  /> */
    // }

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
