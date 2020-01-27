import React from "react";
// import phonesData from "../../../data-from-backend/phones-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";





class Phones extends React.Component {

    state = {
        loading: true,
        phonesData: []
    }


    async componentDidMount(){
        const respons = await fetch('http://localhost:3000/phones');
        let data = await respons.json()

        this.setState({
            loading:false,
            phonesData: data
        })

    }


    render(){

        let {loading,phonesData} = this.state;

        if(loading){
            return <Loading/>
        }

    return(
        <div className="phones">
            
            <div className="title-and-titlePhone">

                <div className="title-text">
                    <h1>Phones</h1>
                    <span>iPhone, Android phones, Windows Phones and more plus the best free and paid apps</span>
                </div>

                <div className="title-photos">
                    <NewsCard size="625x460" image={phonesData[0].src} hasBg={true}
                        title={phonesData[0].title}
                        description={phonesData[0].subtitle}
                        id={phonesData[0].id}
                        link={`/posts/${phonesData[0].id}/info`}
                    />

                    <div className="sub-title-photos">
                        <NewsCard size="300x300" image={phonesData[1].src} hasBg={true}
                            title={phonesData[1].title}
                            id={phonesData[1].id}
                            link={`/posts/${phonesData[1].id}/info`}
                        />
                        <NewsCard size="300x300" image={phonesData[2].src} hasBg={true}
                            title={phonesData[2].title}
                            id={phonesData[2].id}
                            link={`/posts/${phonesData[2].id}/info`}
                        />
                    </div>
                   
                </div>
                

                <div className="all-phones">
                    <span>All Phones</span>
                </div>

            </div>
            <div className="phones-content">
                {
                    phonesData.map((photocart,index)=>{
                        return(
                            <div className="phones-wrapper" key={index}>
                                <MainCart image={photocart.src} hasBg={false} 
                                title={photocart.title}
                                description={photocart.subtitle}
                                id={photocart.id}
                                link={`/posts/${photocart.id}/info`}
                                /> 
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )}
}

export default Phones;