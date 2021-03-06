import React from "react";
// import tvsDataFromBackend from "../../../data-from-backend/tvs-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";


class Tvs extends React.Component {

    state = {
        loading: true,
        tvsDataFromBackend: []
    }


    async componentDidMount(){
        const response = await fetch('http://localhost:3000/tvs');
        const data = await response.json();


        this.setState({
            loading:false,
            tvsDataFromBackend: data
        })
    }

    render(){

        const {loading,tvsDataFromBackend} = this.state;

        if(loading){
            return <Loading/>
        }

    

    return(
        <div className="phones">
            

            <div className="title-and-titlePhone">

                <div className="title-text">
                    <h1>TVs</h1>
                    <span>4K televisions, plasma TVs, LCD TVs, 3D TVs and OLED TVs.</span>
                </div>

                <div className="title-photos">
                    <NewsCard size="625x460" image={tvsDataFromBackend[0].src} hasBg={true}
                        title={tvsDataFromBackend[0].title}
                        description={tvsDataFromBackend[0].subtitle}
                        id={tvsDataFromBackend[0].id}
                        link={`/posts/${tvsDataFromBackend[0].id}/info`}
                    />

                    <div className="sub-title-photos">
                        <NewsCard size="300x300" image={tvsDataFromBackend[1].src} hasBg={true}
                            title={tvsDataFromBackend[1].title}
                            id={tvsDataFromBackend[1].id}
                            link={`/posts/${tvsDataFromBackend[1].id}/info`}
                        />
                        <NewsCard size="300x300" image={tvsDataFromBackend[2].src} hasBg={true}
                            title={tvsDataFromBackend[2].title}
                            id={tvsDataFromBackend[2].id}
                            link={`/posts/${tvsDataFromBackend[2].id}/info`}
                        />
                    </div>
                   
                </div>
                

                <div className="all-phones">
                    <span>All TVs</span>
                </div>

            </div>
            <div className="phones-content">
                {
                    tvsDataFromBackend.map((tvcart,index)=>{
                        return(
                            <div className="phones-wrapper" key={index}>
                                <MainCart image={tvcart.src} hasBg={false}
                                title={tvcart.title}
                                description={tvcart.subtitle}
                                id={tvcart.id}
                                link={`/posts/${tvcart.id}/info`}
                                /> 
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )}
}

export default Tvs;