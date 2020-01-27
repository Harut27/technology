import React from "react";
// import photographyesData from "../../../data-from-backend/photography-data";
import "../style.scss"
import MainCart from "../../app_components/news-main-cart";
import NewsCard from "../../app_components/news-card";
import Loading from "../../app_components/loader";


class Photographyes extends React.Component {


    state = {
        loading:true,
        photographyesData: []
    }


    async componentDidMount(){
        const response = await fetch('http://localhost:3000/photography')
        let data = await response.json()

        this.setState({
            loading: false,
            photographyesData: data
        })
    }


    render(){

        const {loading,photographyesData} = this.state;

        if(loading){
            return <Loading/>
        }
    

    return(
        <div className="laptops">
            

            <div className="title-section">

                <div className="laptop-title">
                    <h1>Photography</h1>
                    <span>The latest camera news and reviews, from DSLRs and CSCs to point-and-shoots and accessories, plus the best tips and advice</span>
                </div>

                <div className="title-laptops">
                    <NewsCard size="625x460" image={photographyesData[7].src} hasBg={true}
                        title={photographyesData[7].title}
                        description={photographyesData[7].subtitle}
                        id={photographyesData[7].id}
                        link={`/posts/${photographyesData[7].id}/info`}
                    />

                    <div className="sub-title-laptop">
                        <NewsCard size="300x300" image={photographyesData[8].src} hasBg={true}
                            title={photographyesData[8].title}
                            id={photographyesData[8].id}
                            link={`/posts/${photographyesData[8].id}/info`}
                        />
                        <NewsCard size="300x300" image={photographyesData[13].src} hasBg={true}
                            title={photographyesData[13].title}
                            id={photographyesData[13].id}
                            link={`/posts/${photographyesData[13].id}/info`}
                        />
                    </div>
                   
                </div>
                

                <div className="all-laptops">
                    <span>All Laptops</span>
                </div>

            </div>
            <div className="laptops-content">
                {
                    photographyesData.map((Photography,index)=>{
                        return(
                            <div className="laptops-wrapper"  key={index}>
                                <MainCart image={Photography.src} hasBg={false}
                                title={Photography.title}
                                description={Photography.subtitle}
                                id={Photography.id}
                                link={`/posts/${Photography.id}/info`}
                                /> 
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )}
}

export default Photographyes;