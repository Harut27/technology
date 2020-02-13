import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'

import "../style.scss";
import GetRequest from "../../../app_components/dataFromBackEnd";
import Loading from "../../../app_components/loader";
import NewsCard from "../../../app_components/news-card";
import NewPost from "../../admin-page/admin-components/admin-newPost"



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
               
                    <NewPost path="/howto"/>
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