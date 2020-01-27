import React from "react";
import "./style.scss";

import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";



class News extends React.Component {

  state = {
    loading: true,
    laptopsData: [],
    phonesData: [],
    tvsData: [],
    photographyesData: [],
    HowtoData: []
}


async componentDidMount(){

    let laptopResponse = await fetch('http://localhost:3000/laptops');
    let laptopData = await laptopResponse.json();

    let phoneResponse = await fetch('http://localhost:3000/phones');
    let PhoneData = await phoneResponse.json();

    let tvResponse = await fetch('http://localhost:3000/tvs');
    let tvData = await tvResponse.json();

    let phhotographyResponse = await fetch('http://localhost:3000/photography');
    let photographyData = await phhotographyResponse.json();

    let howtoResponse = await fetch('http://localhost:3000/howto');
    let howData = await howtoResponse.json();


    this.setState({
        loading: false,
        laptopsData: laptopData,
        phonesData: PhoneData,
        tvsData: tvData,
        photographyesData: photographyData,
        HowtoData: howData
    })
}

  render(){

    let {
      loading,
      laptopsData,
      phonesData,
      tvsData,
      photographyesData,
      HowtoData
  } = this.state;

  if(loading){
    return <Loading/>
  }


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

  )};
};


export default News;
