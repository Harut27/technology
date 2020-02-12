import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import "./style.scss";
import "../../../../../style.scss";

class SitebarForAdmin extends Component{



    render(){

        const productsMenu = ['Home Page','News','How To','Phones','TVs','Laptops','Photography','Posts','Contact Us'];
        let accountName = 'Anhayt Bajanord';

        return(
            <div className="sitebarForAdmin sticky">

                <div className="accountSection">
                    <div className="account-image">
                        <img src="https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_IMAGE_MOBILE$&$NOWA/scarecrow-handprint-craft-kit~13705882" alt=""/>
                    </div>
                    <span>Admin : {accountName}</span>
                </div>

                <div className="pagesFromAdmin">

                    <div className="pagesFromAdminTitle">Pages</div>
                    {productsMenu.map((product,index)=>{
                            return(
                                <div className={`admin-pages-link pages-${product.toLowerCase().replace(/\s/g, '')}`} key={index}>
                                    <Link to={`/admin/${product.toLowerCase().replace(/\s/g, '')}`}> 
                                      {product}
                                      <FontAwesomeIcon icon={faAngleRight}/>
                                    </Link>
                                </div>
                            )
                        })}
                </div>

            </div>
        )
    }
}

export default SitebarForAdmin;