import React from "react";
import NewsCard from "../../../app_components/news-card";
import "./style.scss";
import ReactDOM from "react-dom"

import Sidebar from "../sidebar";
import Loading from "../../../app_components/loader";
import GetRequest from "../../../app_components/dataFromBackEnd/index"


class FreshNews extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()
   
    }



    state = {
        loading: true,
        laptopsData: [],
        phonesData: [],
        tvsData: [],
        photographyesData: [],
        HowtoData: []
    }

    async componentDidMount(){

        const [laptopData, PhoneData, tvData, photographyData, howData] = await GetRequest();

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

        // if(window.location.pathname == "/admin"){
        //     console.log( ReactDOM.findDOMNode(this.refs.container)
        //  }

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
        
        <div ref={this.myRef} className="freshNews centered">
            <div className="freshNewsContainer">
                <div className="freshNewsContent">

                    <div className="freshNewsTitle">
                        <h1>
                             Fresh News
                        </h1>
                    </div>
                    
                    <NewsCard size="625x460" image={laptopsData[13].src} hasBg={true}
                        title={laptopsData[13].title}
                        description={laptopsData[13].subtitle}
                        link={`/posts/${laptopsData[13].id}/info`}
                    />

                    <div className="full-supper-mini-section">
                        <NewsCard size="270x220" image={phonesData[10].src} hasBg={true}
                            title={phonesData[10].title}
                            link={`/posts/${phonesData[10].id}/info`}
                        />
                        <NewsCard size="270x220" image={phonesData[7].src} hasBg={true}
                            title={phonesData[7].title}
                            link={`/posts/${phonesData[7].id}/info`}
                        />
                    </div>

                    <div className="mini-cart-section">

                        <NewsCard size="300x300" image={tvsData[0].src} hasBg={true}
                            title={tvsData[0].title}
                            link={`/posts/${tvsData[0].id}/info`}
                            />

                        <NewsCard size="300x300" image={tvsData[2].src} hasBg={true}
                            title={tvsData[2].title}
                            link={`/posts/${tvsData[2].id}/info`}
                            />

                        <NewsCard size="300x300" image={tvsData[8].src} hasBg={true}
                            title={tvsData[8].title}
                            link={`/posts/${tvsData[8].id}/info`}
                            />

                    </div>


                    <div className="middle-cart-section">
                        <NewsCard size="460x330" image={photographyesData[12].src} hasBg={true} 
                            title={photographyesData[12].title}
                            link={`/posts/${photographyesData[12].id}/info`}
                            />

                        <NewsCard size="460x330" image={HowtoData[8].src} hasBg={true}
                            title={HowtoData[8].title}
                            link={`/posts/${HowtoData[8].id}/info`}
                            />
                       
                    </div>

                </div>
            </div>
            <Sidebar/>
        </div>

    )}
}

export default FreshNews;