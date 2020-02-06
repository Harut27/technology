import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import "./style.scss";


class SitebarForAdmin extends Component{




    render(){

        const productsMenu = ['How To','Phones','TVs','Laptops','Photography','Posts'];
        let accountName = 'Gor Stepanyan';


        return(
            <div className="sitebarForAdmin">

                <div className="accountSection">

                    <span>Admin : {accountName}</span>

                </div>

                <div className="productsFromAdmin">

                    {productsMenu.map((product,index)=>{
                            return(
                                <div className={`admin-product-link product-${product.toLowerCase().replace(/\s/g, '')}`} key={index}>

                                    <Link to={`/admin/${product.toLowerCase().replace(/\s/g, '')}`}> 
                                      {product}
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