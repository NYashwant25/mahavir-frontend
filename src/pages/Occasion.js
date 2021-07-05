import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Loader from "react-loader-spinner";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {HomePageData} from './../redux/actions/HomeAction';
import {OccasionProduct} from './../redux/actions/ProductListAction';
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


const Occasion = (props) => {
const classes = useStyles();
const [value, setValue] = React.useState(0);
const [occasion_set, setOccasion_set] = React.useState(false);

const usedispatch = useDispatch();


 const SearchOccasion = () => {
    const state = {
        Occasion:props.match.params.id,        
    }
    usedispatch(OccasionProduct(state))
}

const SearchFilter = (Name) => {
    const state = {
        Occasion:Name,        
    }
    usedispatch(OccasionProduct(state))
}

React.useEffect(()=>{
  window.scrollTo(0, 0)
    SearchOccasion()
},[])


const loading = useSelector((reduxState)=>{
  return reduxState.productlist.loading
})


const homedata = useSelector((reduxState)=>{
return reduxState.home.HomeData
})

const fetch_filter_data = useSelector((reduxState)=>{
return reduxState.productlist.occasion
})


const occasion_menu = useSelector((reduxState)=>{
return reduxState.productlist.menu
})

// const filterData = (id) => {
//   usedispatch(OccasionData(id))
//   setOccasion_set(true)
// }

const handleChange = (event, newValue) => {
setValue(newValue);
};
return(
<Layout>
<Banner />
<div className={classes.root}>


<div>
<div className="container" style={{padding:0}}>
<div className="row" style={{marginTop:0, padding:0}}>
<div className="col-lg-12">
  <div class="scrollmenu">
{
occasion_menu!==undefined ?
occasion_menu.map((row)=>(
  <Link onClick={()=>SearchFilter(row.Name)} to={`/occasion/${row.Name}`}>{row.Name}</Link>
))
:null}
</div>
</div>
 {loading
           ?
           <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        
        style={{ margin:"auto", marginTop:"20%"}}
      />  :
      fetch_filter_data.length!=0 ?
              fetch_filter_data.map((row)=>( 
                     <div className="col-lg-3 col-md-4 col-sm-2 col-xs-6 col-6" style={{padding:3}}>
                      <div id="product_background_box">
                        <div id="bestseller_div" style={{border:"none"}}>
                          <Link to="/product-details">
                          <h5 id="bestseller">Bestseller</h5>
                        <div id="product_box_img">
            {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
            {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                          <p>Promise Solitaire </p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                                <h6 id="price">₹ 35,496 &nbsp; &nbsp;<s style={{color:"#B1B1B1"}}>₹397,45</s></h6>
                              </div>
                                <div className="col-sm-5" style={{marginTop:-10}}>
                            <button id="quick_view">Quick View</button>
                          </div>
                            </div>
                          </div>
                        </div>
                        </Link>
                        </div>
                      </div>
                    </div>
                ))
              :
              <div style={{margin:"auto", marginTop:"20%"}}>
                <h4>Not Found Data</h4>
              </div>
                }
         

</div>
</div>
</div>

</div>
</Layout>
);
}

export default Occasion;