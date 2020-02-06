import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import "./style.scss";


class SitebarForAdmin extends Component{




    render(){

        const productsMenu = ['How To','Phones','TVs','Laptops','Photography','News','Posts','Contact Us'];
        let accountName = 'Gor Stepanyan';

        return(
            <div className="sitebarForAdmin">

                <div className="accountSection">
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