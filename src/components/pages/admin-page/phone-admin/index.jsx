import React, { Component } from "react";
import "../style.scss";
import GetRequest from "../../../app_components/dataFromBackEnd";
import Loading from "../../../app_components/loader";
import NewsCard from "../../../app_components/news-card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NewPost from "../../admin-page/admin-components/admin-newPost";


class PhoneForAdmin extends Component{

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

                <NewPost path="/phones"/>
                
                {
                    phonesData.map((phone,index)=>{
                        return(
                            <div className="admin-cart" key={index}>
                                <NewsCard size="300x300" image={phone.src} hasBg={true}
                                title={phone.title}
                                link={`/posts/${phone.id}/info`}
                                
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

export default PhoneForAdmin;