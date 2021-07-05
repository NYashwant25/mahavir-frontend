import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import './../components/style.css';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <Layout>
            <div className="container" style={{paddingBottom:70}}>
             <div className="row">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:0, marginBottom:30}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>404 Not Found</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
            <img src="assets/images/404.jpeg" style={{width:"100%"}} />
            </div>
            
        </Layout>
    );
}

export default NotFound;