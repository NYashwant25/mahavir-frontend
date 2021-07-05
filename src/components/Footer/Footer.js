import React from 'react';
import {Link} from 'react-router-dom';
import { BackTop } from 'antd';
const Footer = () => {
    return(
        <div id="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-6">
                        <h6 style={{textAlign:"left", fontSize:14}}>YOUR ACCOUNT</h6>
                        <ul>
                        <li><Link to="/contact"> Specials</Link></li>
                        <li><Link to="/contact"> Prices Drops</Link></li>
                        <li><Link to="/contact"> Contact Us</Link></li>
                        <li><Link to="/contact"> Our Stores</Link></li>
                        <li><Link to="/contact"> Sitemap</Link></li>
                        <li><Link to="/contact"> Credit Slips</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-6">
                    <h6 style={{textAlign:"left", fontSize:14}}>PRODUCTS</h6>
                     <ul>
                        <li><Link to="/contact"> Specials</Link></li>
                        <li><Link to="/contact"> Prices Drops</Link></li>
                        <li><Link to="/contact"> Contact Us</Link></li>
                        <li><Link to="/contact">  Our Stores</Link></li>
                        <li><Link to="/contact"> Sitemap</Link></li>
                        <li><Link to="/contact"> Credit Slips</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                    <h6 style={{textAlign:"left", fontSize:14}}>OUR COMPANY</h6>
                     <ul>
                        <li><Link to="/contact"> Specials</Link></li>
                        <li><Link to="/contact"> Prices Drops</Link></li>
                        <li><Link to="/contact"> Contact Us</Link></li>
                        <li><Link to="/contact"> Our Stores</Link></li>
                        <li><Link to="/contact"> Sitemap</Link></li>
                        <li><Link to="/contact"> Credit Slips</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                     <h6 style={{textAlign:"left", fontSize:14}}>STORE INFORMATION</h6>
                      <ul>
                        <li><a>
                        <div className="row">
                        <div className="col-sm-1 col-xs-1 col-1">
                        <i className="fa fa-location-arrow" style={{fontSize:12, marginTop:5}}></i>
                        </div>
                        <div className="col-sm-10 col-xs-10 col-10" style={{padding:2}}>
                          HotelMadhuban Parisar, Sadar Bazar Rd, Sadar Bazar, Raipur, Chhattisgarh 492001
                          </div>
                          </div>
                          </a></li>
                        <li><a><i className="fa fa-phone" style={{fontSize:12}}></i> 077122 33502</a></li>
                        <li><a><i className="fa fa-envelope" style={{fontSize:12}}></i> info@gmail.com</a></li>
                        </ul>
                        
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{textAlign:"left", fontSize:14}}>CONNECT</h6>
                        <div className="row">
                            <div className="col-sm-3 col-xs-4 col-2">
                                <Link style={{color:"black"}}>
                                <i className="fa fa-twitter fa-2x"></i>                                
                                </Link>
                            </div>
                            <div className="col-sm-3 col-xs-4 col-2">
                            <Link style={{color:"black"}}>
                                <i className="fa fa-facebook fa-2x"></i>
                            </Link>
                            </div>
                            <div className="col-sm-3 col-xs-4 col-2">
                            <Link style={{color:"black"}}>
                                <i className="fa fa-instagram fa-2x"></i>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <BackTop>
      <div ><img src="https://29a70r2zwlqz3o93gi35w22n-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/up.png" style={{width:50, marginLeft:20}}/></div>
    </BackTop>
                </div>
            </div>

            
        </div>
    )
}

export default Footer