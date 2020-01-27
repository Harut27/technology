import React from "react";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";



class Laptops extends React.Component {

    state = {
        loading: true,
        laptopsData: []
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/laptops');
        let data = await response.json()

        this.setState({
            loading: false,
            laptopsData: data
        })
    }

    render() {

        let { loading, laptopsData } = this.state;

        if (loading) {
            return <Loading />
        }

        return (
            <div className="laptops">

                <div className="title-section">

                    <div className="laptop-title">
                        <h1>Laptops</h1>
                        <span>Laptops, netbooks, Chromebooks, gaming laptops and portable computing accessories.</span>
                    </div>

                    <div className="title-laptops">
                        <NewsCard size="625x460" image={laptopsData[0].src} hasBg={true}
                            title={laptopsData[0].title}
                            description={laptopsData[0].subtitle}
                            id={laptopsData[0].id}
                            link={`/posts/${laptopsData[0].id}/info`}
                        />

                        <div className="sub-title-laptop">
                            <NewsCard size="300x300" image={laptopsData[1].src} hasBg={true}
                                title={laptopsData[1].title}
                                id={laptopsData[1].id}
                                link={`/posts/${laptopsData[1].id}/info`}
                            />
                            <NewsCard size="300x300" image={laptopsData[2].src} hasBg={true}
                                title={laptopsData[2].title}
                                id={laptopsData[2].id}
                                link={`/posts/${laptopsData[2].id}/info`}
                            />
                        </div>

                    </div>


                    <div className="all-laptops">
                        <span>All Laptops</span>
                    </div>

                </div>
                <div className="laptops-content">
                    {
                        laptopsData.map((laptopCart, index) => {
                            return (
                                <div className="laptops-wrapper" key={index}>
                                    <MainCart image={laptopCart.src} hasBg={false}
                                        title={laptopCart.title}
                                        description={laptopCart.subtitle}
                                        id={laptopCart.id}
                                        link={`/posts/${laptopCart.id}/info`}
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

export default Laptops;