import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import laptopsData from "../../../data-from-backend/laptops-data";
import HowtoData from "../../../data-from-backend/howto-data";
import phonesData from "../../../data-from-backend/phones-data";
import photographyesData from "../../../data-from-backend/photography-data";
import tvsData from "../../../data-from-backend/tvs-data";

const allData = laptopsData.concat(HowtoData,phonesData,photographyesData,tvsData)




const Filter = ()=>{

    const [found, foundfiles] = useState([])

    let search = (e)=> {

        let found = allData.reduce((list, data)=>{
            let postTitle = data.title.toLowerCase();
            let postSubtitle = data.subtitle.toLowerCase();
            let value = e.target.value;
            let search = value.split(" ");
            let isMatch = 0;
    
            search.forEach(searhcWord => {
                if ("" == searhcWord) {
                    return;
                }
                if ((
                    (postTitle.indexOf(searhcWord) > -1) ||
                    (postSubtitle.indexOf(searhcWord) > -1)
                )) {
                    isMatch++;
                }
            });
    
            if (isMatch != 0) {
                list.push({
                    title: data.title,
                    subtitle: data.subtitle,
                    id: data.id,
                    isMatch: isMatch,
                });
            }
    
            return list;
        }, []);
    
        found.sort((a, b) => {
            return b.isMatch - a.isMatch;
        });
        foundfiles(found)
    }


    return(
        <div className="serch-section">
            <input className="serch-box" type="text" id="navbar-search" placeholder="Search..  " onKeyUp={search} 
             />
           {            
               (found.length !== 0) &&  (
                   <div className="founded">
                            {
                                found.map((item,index)=>(
                                    <Link to={`/posts/${item.id}/info`} key={index}>
                                        {item.title.slice(0, 38)}...
                                    </Link>
                                ))
                            }   
                    </div>
               )
           }
              
        </div>
    )
}

export default Filter;