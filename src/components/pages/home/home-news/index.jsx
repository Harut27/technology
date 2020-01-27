import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../../../app_components/news-card";
import "./style.scss";

// import laptopsData from "../../../../data-from-backend/laptops-data";
// import HowtoData from "../../../../data-from-backend/howto-data";
// import photographyesData from "../../../../data-from-backend/photography-data";
// import tvsData from "../../../../data-from-backend/tvs-data";
import Loading from "../../../app_components/loader";


class HomeNews extends React.Component{

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
    return(
        <div className="homeNews">
            <div className=" card-wrapper">

                <div className="more-fresh-news">
                    <Link to="/news">View More News >></Link>
                </div>

                <NewsCard size="460x450" image={laptopsData[1].src} hasBg={false}
                    title={laptopsData[1].title}
                    description={laptopsData[1].description}
                    descriptionLabel={laptopsData[1].descriptionLabel}
                    link={`/posts/${laptopsData[1].id}/info`}
                />

                <NewsCard size="460x450" image={laptopsData[4].src} hasBg={false}
                title={laptopsData[4].title}
                description={laptopsData[4].description}
                link={`/posts/${laptopsData[4].id}/info`}
                />

                <NewsCard size="460x450" image={laptopsData[17].src} hasBg={false}
                title={laptopsData[17].title}
                description={laptopsData[17].description}
                descriptionLabel={laptopsData[17].descriptionLabel}
                link={`/posts/${laptopsData[17].id}/info`}
                />  


                <div className="small-cart-wrapper">
                    <NewsCard size="340x350" image={HowtoData[3].src} hasBg={false}
                        title={HowtoData[3].title}
                        description={HowtoData[3].subtitle}
                        link={`/posts/${HowtoData[3].id}/info`}
                    />
                    
                    <NewsCard size="340x350" image={HowtoData[4].src} hasBg={false}
                    title={HowtoData[4].title}
                    description={HowtoData[4].subtitle}
                    link={`/posts/${HowtoData[4].id}/info`}
                    />

                    <NewsCard size="340x350" image={HowtoData[5].src} hasBg={false}
                    title={HowtoData[5].title}
                    description={HowtoData[5].subtitle}
                    link={`/posts/${HowtoData[5].id}/info`}
                    />

                    <NewsCard size="340x350" image={tvsData[13].src} hasBg={false}
                    title={tvsData[13].title}
                    description={tvsData[13].subtitle}
                    link={`/posts/${tvsData[13].id}/info`}
                    />

                    <NewsCard size="340x350" image={tvsData[14].src} hasBg={false}
                    title={tvsData[14].title}
                    description={tvsData[14].subtitle}
                    link={`/posts/${tvsData[14].id}/info`}
                    />

                    <NewsCard size="340x350" image={tvsData[15].src} hasBg={false}
                    title={tvsData[15].title}
                    description={tvsData[15].subtitle}
                    link={`/posts/${tvsData[15].id}/info`}
                    />

                    <NewsCard size="340x350" image={photographyesData[2].src} hasBg={false}
                    title={photographyesData[2].title}
                    description={photographyesData[2].subtitle}
                    link={`/posts/${photographyesData[2].id}/info`}
                    />

                     <NewsCard size="340x350" image={photographyesData[10].src} hasBg={false}
                     title={photographyesData[10].title}
                     description={photographyesData[10].subtitle}
                     link={`/posts/${photographyesData[10].id}/info`}
                     />

                </div>

            </div>
        </div>
    )}
}

export default HomeNews;
