import React, { Component } from "react";
import "../style.scss";
import GetRequest from "../../../app_components/dataFromBackEnd";
import Loading from "../../../app_components/loader";
import NewsCard from "../../../app_components/news-card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

class HowToForAdmin extends Component{

    state = {
        loading: true,
        laptopsData: [],
        phonesData: [],
        tvsData: [],
        photographyesData: [],
        HowtoData: []
    }

    async componentDidMount(){

        const [laptopData, PhoneData,  photographyData, tvData, howData] = await GetRequest();


        



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
            <div className="admin-carts">
                {
                    HowtoData.map((howTo,index)=>{
                        return(
                            <div className="admin-cart" key={index}>
                                <NewsCard size="300x300" image={howTo.src} hasBg={true}
                                title={howTo.title}
                                link={`/posts/${howTo.id}/info`}
                                
                                />
                               
                                <div className="icons">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default HowToForAdmin;