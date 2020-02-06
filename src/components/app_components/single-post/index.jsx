import React from "react";
import "./style.scss"
import Loading from "../../app_components/loader";
import GetRequest from "../dataFromBackEnd";


class SinglePost extends React.Component{

  state = {
    loading: true,
    laptopsData: [],
    phonesData: [],
    tvsData: [],
    photographyesData: [],
    HowtoData: [],
}


async componentDidMount(){

    const [laptopData,PhoneData,tvData,photographyData,howData] = await GetRequest()

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
      HowtoData,
  } = this.state;

  const allData = laptopsData.concat(HowtoData,phonesData,photographyesData,tvsData)


  if(loading){
    return <Loading/>
  }
    
    return(

        <div className="post-page">
      { allData.map((post,index) => {


        if(this.props.postid == post.id){

          return (
            <div className="post-wrapper" key={index}>

              <div className="title-wrapper">

                <h2>
                  {post.title}
                </h2>

                <span className="category">
                  Category - {post.category}
                </span>

                <span className="subtittle">
                  {post.subtitle}
                </span>

              </div>

              <img src={post.src} alt=""/>

              <div className="post-content">
                <div dangerouslySetInnerHTML={{ __html:post.content}} />
              </div>

            </div>
          );
          }
        })
      } 
    </div>
    )}
}

export default SinglePost;