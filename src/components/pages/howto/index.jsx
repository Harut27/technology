import React from "react";
// import HowtoData from "../../../data-from-backend/howto-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";


class Howto extends React.Component {

    state = {
        loading: true,
        HowtoData: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/howto');
        const data = await response.json();

        this.setState({
            loading: false,
            HowtoData: data
        });
    }

    render() {
        const { loading, HowtoData } = this.state;

        if (loading) {
            return <Loading />;
        }

        return (
            <div className="laptops">

                <div className="title-section">

                    <div className="laptop-title">
                        <h1>Laptops</h1>
                        <span>Laptops, netbooks, Chromebooks, gaming laptops and portable computing accessories.</span>
                    </div>

                    <div className="title-laptops">
                        <NewsCard size="625x460" image={HowtoData[0].src} hasBg={true}
                            title={HowtoData[0].title}
                            description={HowtoData[0].subtitle}
                            id={HowtoData[0].id}

                            link={`/posts/${HowtoData[0].id}/info`}
                        />

                        <div className="sub-title-laptop">
                            <NewsCard size="300x300" image={HowtoData[1].src} hasBg={true}
                                title={HowtoData[1].title}
                                id={HowtoData[1].id}
                                link={`/posts/${HowtoData[1].id}/info`}
                            />
                            <NewsCard size="300x300" image={HowtoData[2].src} hasBg={true}
                                title={HowtoData[2].title}
                                id={HowtoData[2].id}
                                link={`/posts/${HowtoData[2].id}/info`}
                            />
                        </div>

                    </div>


                    <div className="all-laptops">
                        <span>All Laptops</span>
                    </div>

                </div>
                <div className="laptops-content">
                    {
                        HowtoData.map((how, index) => {
                            return (
                                <div className="laptops-wrapper" key={index}>
                                    <MainCart image={how.src} hasBg={false}
                                        title={how.title}
                                        description={how.subtitle}
                                        id={how.id}
                                        link={`/posts/${how.id}/info`}
                                    />
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        )
    }

}

export default Howto;











































