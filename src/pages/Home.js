import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Loader from "react-loader-spinner";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Carousel as CarouselBanner } from 'react-bootstrap';
import './../components/style.css';
// import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import {HomePageData} from './../redux/actions/HomeAction';
import {AllCategoryProductAction, CollectionProduct} from './../redux/actions/ProductListAction';
import {useSelector, useDispatch} from 'react-redux';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

const breakPoints2 = [
  { width: 200, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
];

const breakPoints3 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];

const breakPoints4 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 }
];

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const Home = (props) => {
   const items = [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ProductDetails = (product) => {
    localStorage.setItem('ProductDetails', JSON.stringify(product))
    props.history.push('/product-details')
  }

const usedispatch = useDispatch();

React.useEffect(()=>{
  window.scrollTo(0, 0)
    usedispatch(HomePageData())
},[])


  const SearchCategory = (Category) => {
    usedispatch(AllCategoryProductAction({SearchCategory:Category}))
  }

  const homedata = useSelector((reduxState)=>{
    return reduxState.home.HomeData
  })

const CollectionSubmit = (Name) => {
  usedispatch(CollectionProduct({Collection:Name}))
}

return(
      <div id="home_page">
        <Layout>
  {homedata.category==undefined ?
    <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        timeout={50000} //3 secs
        style={{marginTop:"20%", marginBottom:"20%"}}
      />       
    :
    <>
            <div className="container-fluid" style={{ marginBottom:70}}>
            <div className="container" style={{padding:0}}>
            <div id="top_menu_mobile" >
              <div className="row" id="mobile_appoinment">
       <div className="col-sm-12 col-xs-12 col-12" style={{padding:0}}>
        <p><a href="#">Book an Appointment</a></p>
        <p><a href="#">Video Call</a></p>
        <p><a href="#">Try At Home</a></p>
        </div>
     </div>
      </div>
            </div>
              <div className="row" style={{position:"relative", zIndex:200}}>
                <div className="col-lg-6 col-md-12 col-sm-12" id="banner_left_side_col" style={{padding:0}}>
                <div id="banner_left">
                <div id="banner_img_box">
                  <img src="https://pavandbroome.com/admin/wp-content/uploads/2018/10/Tr700-Engagement-Ring.png" />
                </div>
                  <div className="row">
                  <div className="col-sm-2"></div>
                    <div className="col-sm-9">
                      <p>Exquisite Jewellery Collection</p>
                      <h5 style={{fontFamily:"Big-Caslon"}}>For Every Occasion!</h5>
                      <div className="row">
                        <div className="col-sm-6 col-xs-6 col-6">
                        <h6>We have built a legacy and trust of crafting 
of most exclusive pieces of jewelleries.
With wide range of all the latest designs,
at Infinity we have the best jewellery
for everyone for every occasion.
</h6>
                      </div>

                      <div className="col-sm-6 col-xs-6 col-6">
                        <h6>
                          We value you! At Infinity, we believe in 
setting standards for quality and trust by 
delivering the most authentic and exquisite 
craftsmanship in each jewellery design.
Experience the beauty, Experience Infinity!
                        </h6>
                      </div>
                      
                    </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                </div> 
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{padding:0}}>
                <CarouselBanner style={{position:"relative", zIndex:50}}>
 {
 homedata.banner!==undefined ?
 homedata.banner.map((row)=>(
  <CarouselBanner.Item id="slider_item">
    <img
      className="d-block w-100"
      src={row.BannerImage}
      alt="Third slide"
    />
    <CarouselBanner.Caption id="caption">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-md-8">
            <p style={{color:"#8D6E2C"}}>{row.Title}</p>
            <h5>{row.SubTitle}</h5>
          </div>
        </div>
      </div>
    </CarouselBanner.Caption>
  </CarouselBanner.Item>
  ))
  :null
}
</CarouselBanner>
                </div>
              </div>
            </div>
            <div className="container-fluid">
            <div id="right_side_stick">
            </div>
            </div>
    <div className="container" id="second_section_home">
      <div classes="row">
        <div className="col-sm-12">
        <div className="row">
        <div className="col-sm-12">
          <center><h5 id="samefont_size">Shop By Category</h5></center>
        </div>
        </div>
         <Carousel breakPoints={breakPoints}>
        {homedata.other_category!==undefined ?
        homedata.other_category.map((row)=>(
        <div id="carousel_product_box" style={{padding:5}}>
        <Link to={`/all-jewellery/${row.Name}`} onClick={()=>SearchCategory(row.Name)}>
        <h5 id="bestseller"></h5>
        <div id="category_product_box_img">
         <img src={row.CardImage} id="original_img" style={{width:"100%"}} />
        <img src={row.CardImage} id="dup_img" />
         </div>
        <h6 ><b>{row.Name}</b></h6>
        </Link>
        </div>
        ))
        :
        null
}
      </Carousel>
        </div>
      </div>
    </div>

  <div className="container" id="offer_top_banner">
    <div className="row">
      <div className="col-sm-12">
        <img src="assets/images/Banner1.jpg" style={{width:"100%", borderRadius:5,marginTop:70, marginBottom:70}} />
      </div>
    </div>
  </div>

  <div className="container" id="offers_section">
  <div className="row" style={{marginTop:20, marginBottom:-10}}>
      <div className="col-sm-12">
          <center><h2 id="samefont_size">Collections by Infinity</h2></center>
      </div>
    </div>
    <div className="row"  id="offer_banner">
    {homedata.collection.map((row)=>(
      <div className="col-sm-6">
      <Link onClick={()=>CollectionSubmit(row.Name)} to={`/collection/${row.Name}`}>
        <img src={row.Image.CardImage} style={{width:"100%"}} />
      </Link>
      </div>
    ))
    }    
    </div>

     
  </div>

  <div className={classes.root} style={{marginTop:70}} id="featured">
  <div className="container">
    <div className="row">
       <div className="col-sm-12" style={{padding:0}}>
          <center><h2 id="samefont_size">Explore Our Most Loved Designs</h2></center>
          <center><p id="t">Add glamour to your fashion with our exclusive collection of beatiful jewelleries</p></center>
      </div>
    </div>
  </div>
     <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label="FEATURED" {...a11yProps(0)} />
          <Tab label="TOP SELLING" {...a11yProps(1)} />
          <Tab label="NEW ARRIVALS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="container" style={{padding:0, marginTop:-10}}>
        <div className="row" >
          <div className="col-md-12" style={{padding:0}}>
            <Carousel breakPoints={breakPoints2}>
 {homedata.products!==undefined ? 
 homedata.products.map((row)=>(
 <div style={{padding:5}} id="bestseller_div">
         <Link to="product-details" onClick={()=>ProductDetails(row)}>
         <h5 id="bestseller">Bestseller</h5>
        <div id="product_box_img">
        {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
        {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
        </div>
       <div className="row">
                          <div className="col-sm-12">
                          <p>{row.ProductTitle.substring(0,20)}..</p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                                <h6 id="price" style={{color:"#093363"}}>₹ {Math.trunc(row.ProductPrice.ProductPrice)} &nbsp; &nbsp; </h6>
                                {/* <span style={{color:"#093363"}}>Discount : {row.ProductPrice.Discount}%</span> */}
                              </div>
                                <div className="col-sm-5" style={{marginTop:-10}}>
                            <button id="quick_view">Quick View</button>
                          </div>
                            </div>
                          </div>
                        </div>
        </Link>
        </div>
))
:
null
}
             </Carousel>
 
          </div>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container" style={{padding:0, marginTop:-10}}>
        <div className="row" >
          <div className="col-md-12" style={{padding:0}}>
            <Carousel breakPoints={breakPoints2}>
 {homedata.products!==undefined ? 
 homedata.products.map((row)=>(
 <div style={{padding:5}} id="bestseller_div">
         <Link to="product-details" onClick={()=>ProductDetails(row)}>
         <h5 id="bestseller">Bestseller</h5>
        <div id="product_box_img">
        {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
        {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
        </div>
       <div className="row">
                          <div className="col-sm-12">
                          <p>{row.ProductTitle.substring(0,20)}..</p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                               <h6 id="price" style={{color:"#093363"}}>₹ {Math.trunc(row.ProductPrice.ProductPrice)} &nbsp; &nbsp; </h6>
                              </div>
                                <div className="col-sm-5" style={{marginTop:-10}}>
                            <button id="quick_view" onClick={()=>ProductDetails(row)}>Quick View</button>
                          </div>
                            </div>
                          </div>
                        </div>
        </Link>
        </div>
))
:
null
}
      
        
             </Carousel>
 
          </div>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="container" style={{padding:0, marginTop:-10}}>
        <div className="row" >
          <div className="col-md-12" style={{padding:0}}>
            <Carousel breakPoints={breakPoints2}>
 {homedata.products!==undefined ? 
 homedata.products.map((row)=>(
 <div style={{padding:5}} id="bestseller_div">
         <Link to="/product-details" onClick={()=>ProductDetails(row)}>
         <h5 id="bestseller">Bestseller</h5>
        <div id="product_box_img">
        {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
        {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
        </div>
       <div className="row">
                          <div className="col-sm-12">
                          <p>{row.ProductTitle.substring(0,20)}..</p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                                <h6 id="price" style={{color:"#093363"}}>₹ {Math.trunc(row.ProductPrice.ProductPrice)} &nbsp; &nbsp; </h6>
                              </div>
                                <div className="col-sm-5" style={{marginTop:-10}}>
                            <button id="quick_view" onClick={()=>ProductDetails(row)}>Quick View</button>
                          </div>
                            </div>
                          </div>
                        </div>
        </Link>
        </div>
))
:
null
}
      
        
             </Carousel>
 
          </div>
        </div>
        </div>
      </TabPanel>
      </div>

      
      <div className="container">
      <div id="home_offer_banner">
       <div className="row">
       <div className="col-sm-12">
          <center><h2 id="samefont_size">Design With Love, For You!</h2></center>
          
      </div>
    </div>
        <div className="row" style={{padding:0}}>
        
          <div className="col-sm-6">
              <div id="exclusive" style={{backgroundImage:"url('assets/images/offers1.jpg')"}}>
              
              </div>
          </div>
           <div className="col-sm-6" >
              <div id="exclusive" style={{backgroundImage:"url('assets/images/offers2.jpg')"}}>
              
              </div>
          </div>
        </div>
      </div></div>

      <div className="container-fluid" id="home_centerBanner" style={{marginTop:100, marginBottom:70}}>
        <div className="row">
          <img src="https://cdn.shopify.com/s/files/1/0074/2129/6729/files/Earring-Banner_0c78aa61-7e64-4fe6-9b7f-a9bd07a1e2a2_1920x.jpg?v=1547712491" style={{width:"100%", position:"relative", zIndex:500}} />
        </div>
      </div>

        <div className="container" id="collection">
        <div className="row" style={{padding:0}}>
          <div className="col-sm-12" style={{padding:0}}>
          <center><h4 id="samefont_size">Collection For You</h4></center>
                   <Carousel breakPoints={breakPoints2}>
 {homedata.products!==undefined ? 
 homedata.products.map((row)=>(
 <div style={{padding:5}} id="bestseller_div">
         <Link to="product-details" onClick={()=>ProductDetails(row)}>
         <h5 id="bestseller">Bestseller</h5>
        <div id="product_box_img">
        {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
        {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
        </div>
       <div className="row">
                          <div className="col-sm-12">
                          <p>{row.ProductTitle.substring(0,20)}..</p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                               <h6 id="price" style={{color:"#093363"}}>₹ {Math.trunc(row.ProductPrice.ProductPrice)} &nbsp; &nbsp; </h6>
                              </div>
                                <div className="col-sm-5" style={{marginTop:-10}}>
                            <button id="quick_view" onClick={()=>ProductDetails(row)}>Quick View</button>
                          </div>
                            </div>
                          </div>
                        </div>
        </Link>
        </div>
))
:
null
}
      
        
             </Carousel>
 
          </div>
        </div>
      </div>

      <div className="container" id="latest_news_container" style={{ marginTop:50, marginBottom:70}}>
        <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12" style={{padding:0}}>
          <center><h4 id="samefont_size"><b>What's Trending</b></h4></center>
      <Carousel breakPoints={breakPoints4}>
    {homedata.news!==undefined ?
    homedata.news.map((row)=>(
        <div>
        <Link >
        <img src={row.Image} style={{width:"100%", height:250, marginTop:-10}} />
        <div id="latest_news">
        <h6>{row.Title}</h6>
        <p>{row.Description}</p>
        </div>
        </Link>
        </div>
)):null}
      </Carousel>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12" >
          <center><h4 style={{marginLeft:0}} id="samefont_size"><b>Testimonials</b></h4></center>
          <div id="testimonial_col">
          <CarouselBanner autoplay>
{homedata.testimonial!==undefined ?
homedata.testimonial.map((row)=>(
    <CarouselBanner.Item >
      <img src={row.Image} />
      <br /><br />
      <p><b>{row.Name}</b></p>
      <h6 style={{marginTop:-10}}><b>{row.Designation}</b></h6>
      <h6>{row.Description}</h6>
    </CarouselBanner.Item>
    ))
    :
    null
}  
  </CarouselBanner>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid" id="footer_top">
        <div className="row">
        <div className="col-sm-6" id="background">

        </div>
          <div className="col-sm-4" id="footer_top_col">
            <h3>Never Miss Our on Latest Collection by Infinity</h3>
            <p>Subscribe to our email list to get all the updates of offers and latest updates on exclusive jewellery collection.</p>
          </div>
        </div>
    </div>
    </>
}
</Layout>
</div>
    );
}

// const mapDispatchToProps = (dispatch) => ({
//   getHomeDataFromRedux : () => dispatch(HomePageData())
// })

// const mapStateToProps = (reduxState) => {
//   return{
//     data:reduxState,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home