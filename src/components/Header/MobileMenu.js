import React from 'react';
import { Drawer, Button, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import './../style.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Loader from "react-loader-spinner";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Cart from './Cart'
import {OccasionProduct} from './../../redux/actions/ProductListAction';
import {ProductListData, searchPriceRange, PuritySearch, CollectionProduct, AllCategoryProductAction} from './../../redux/actions/ProductListAction';
import { Badge } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {HomePageData} from './../../redux/actions/HomeAction'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const MobileMenu = (props) => {
const [menuvisible, setMenuVisible] = React.useState(false);
const [cartvisible, setCartVisible] = React.useState(false);
const [anchorEl, setAnchorEl] = React.useState(null);

const Purity = (Name) => {
  dispatch(PuritySearch({Purity:Name}))
}
  const SearchCategory = (productIn, Category) => {
        const state = {
            ProductIn:productIn,
            SearchCategory:Category
        }
        dispatch(ProductListData(state))
    }

    const ProductIn = (productIn) => {
        const state = {
            ProductIn:productIn,
        }
        dispatch(ProductListData(state))
    }

    const SearchType = (productIn, Category, Type) => {
        const state = {
            ProductIn:productIn,
            SearchCategory:Category,
            SearchType:Type
        }
        dispatch(ProductListData(state))
    }

    const SearchCollection = (CollectionName) => {
      dispatch(CollectionProduct({Collection:CollectionName}));
  }


const showMenuDrawer = () => {
setMenuVisible(true)
}

const logout = () => {
localStorage.removeItem('token');
setAnchorEl(null);
}

const onMenuClose = () => {
setMenuVisible(false)
}

const showCartDrawer = () => {
setCartVisible(false)
setTimeout(() => {
setCartVisible(true)
}, 100);
}

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const onCartClose = () => {
setCartVisible(false)
}

const dispatch = useDispatch();
React.useEffect(()=>{
dispatch(HomePageData());
},[])

const MenuData = useSelector((reduxState)=>{
return reduxState.home.HomeData
})
const index_category = [];
const push_purpose = useSelector((reduxState)=>{
if(reduxState.home.HomeData.category!=undefined){
return reduxState.home.HomeData.category.map((row)=>{
index_category.push(row.Name)
})
}
else{
return []
}
})

const cartCount = useSelector((reactRedux)=> {
    return reactRedux.cart.CartCount
})

const OccasionSearch = (OccasionName) => {
  dispatch(OccasionProduct({Occasion:OccasionName}))
}


const price_range_search = (Min, Max) => {
  dispatch(searchPriceRange({Min:Min, Max:Max}))
}

return (
<div id="MobileMenu">
<div id="mobile_top_nav">
<div className="container" style={{hidden:100, paddingTop:10}}>
<div className="row">
<div className="col-sm-2 col-xs-2 col-2" style={{padding:0}}>
<a href="#" onClick={() => showMenuDrawer()} style={{color:"#8D6E2C", marginLeft:0, marginTop:10}}><i className="fa fa-bars fa-2x"></i></a>
</div>
<div className="col-sm-7 col-xs-7 col-7">
<Link to="/">
<img src="https://mahaveer-jewellers.s3.ap-south-1.amazonaws.com/logo.png" style={{width:"70%", float:"left", marginLeft:-30}} />
</Link>
</div>
<div className="col-sm-3 col-xs-3 col-3" style={{padding:0, marginTop:10}}>

{localStorage.getItem('token') && localStorage.getItem('token')!='undefined' ?     
                  <>
                    <Link onClick={handleClick} id="mobiletop_icons" style={{color:"#A17D38"}}><i className="fa fa-user-o"></i></Link>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{marginTop:40, marginLeft:10}}
                        >
                        <MenuItem onClick={handleClose}><p style={{paddingLeft:20}}></p><Link to="/profile"> Profile </Link> <p style={{paddingRight:20}}></p></MenuItem>
                        <MenuItem onClick={logout}><p style={{paddingLeft:20}}></p> <Link to="/signin"> Logout </Link> <p style={{paddingRight:20}}></p></MenuItem>
                        </Menu>
                    </>    
                        :
                        <Link to="/signin" id="mobiletop_icons" style={{color:"#A17D38"}}><i className="fa fa-user-o"></i></Link>
                            }


<Link  id="mobiletop_icons" onClick={() => showCartDrawer()}>
<Badge count={cartCount} style={{color:"white !important", marginTop:-10}} ><i className="fa fa-shopping-cart" style={{color:"#A17D38"}}></i></Badge></Link>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row">
<div className="col-sm-12 col-xs-12 col-12">
<input type="search" placeholder="Search" id="mobile_search"/>
<i className="fa fa-search" style={{position:"absolute", marginTop:"4%", left:"7%"}}></i>
</div>
</div>


</div>
<Drawer
title="Menu"
placement="left"
closable={false}
onClose={() => onMenuClose()}
visible={menuvisible}
key="left"
>
<div style={{position:"absolute", top:"1.5%", right:"2%"}}>
<button onClick={() => onMenuClose()} style={{width:40, height:40, border:"none", background:"white"}}>X</button>
</div>
<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography>
  <Link to="product-list/Gold" onClick={()=>ProductIn('Gold')}>Gold</Link></Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
{
                  MenuData.category!=undefined ?
                  MenuData.category.map((row)=>(
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b><Link to={`/product-list/Gold/${row.Name}`} onClick={()=>SearchCategory('Gold',row.Name)}>{row.Name}</Link></b></p>
      {MenuData.JewelleryType!=undefined ? 
                          MenuData.JewelleryType.map((j_row)=>(
                          j_row.CategoryId==row._id ?
                          <p><Link onClick={()=>SearchType('Gold',row.Name, j_row.Name)} style={{color:"gray"}} to={`/product-list/Gold/${row.Name}/${j_row.Name}`}>{j_row.Name}</Link></p>
                          :null
                          )):null
                          
                          }
                  </div>
                  ))
                  :null}

                  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Other Categories</b></p>
    {MenuData.other_category!=undefined ?
                          MenuData.other_category.map((row)=>(
                          index_category.includes(row.Name)!=true ?
                            <p><Link to={`/product-list/Gold/${row.Name}`} onClick={()=>SearchCategory('Gold', row.Name)} style={{color:"gray"}}>{row.Name}</Link></p>
                          :null
                          ))
            :null}
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Coins</b></p>
    {MenuData.coins!=undefined ?
                        MenuData.coins.map((row)=>(
                          <p><a href="#" style={{color:"gray"}}>{row.Name}</a></p>
                      ))
                          :
                          null
                          }
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Metal</b></p>
    {MenuData.metal!=undefined ?
                        MenuData.metal.map((row)=>(
                          <p><Link to='product-list' style={{color:"gray"}}>{row.Name}</Link></p>
                      ))
                          :
                          null
                          }
  </div>
</div>
</div>
</Typography>
</AccordionDetails>


</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography ><Link to={`/product-list/Diamond`} onClick={()=>ProductIn('Diamond')}>Diamond</Link></Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
{
MenuData.category!=undefined ?
MenuData.category.map((row)=>(
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b><Link to={`/product-list/Diamond/${row.Name}`} onClick={()=>SearchCategory('Diamond', row.Name)}>{row.Name}</Link></b></p>
      {MenuData.JewelleryType!=undefined ? 
                          MenuData.JewelleryType.map((j_row)=>(
                          j_row.CategoryId==row._id ?
                          <p><Link style={{color:"gray"}} to={`/product-list/Diamond/${row.Name}/${j_row.Name}`} onClick={()=>SearchType('Diamond', row.Name, j_row.Name)}>{j_row.Name}</Link></p>
                          :null
                          )):null
                          
                          }
  </div>
                  ))
                  :null}

                  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Other Categories</b></p>
    {MenuData.other_category!=undefined ?
                          MenuData.other_category.map((row)=>(
                          index_category.includes(row.Name)!=true ?
                            <p><Link to={`/product-list/Diamond/${row.Name}`} onClick={()=>SearchCategory('Diamond',row.Name)} style={{color:"gray"}}>{row.Name}</Link></p>
                          :null
                          ))
                          :null}
  </div>
</div> 
</div>
</Typography>
</AccordionDetails>


</Accordion>

<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography><Link to="product-list/Gold+Diamond" onClick={()=>ProductIn('Gold+Diamond')}>Gold+Diamond</Link></Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
{
                  MenuData.category!=undefined ?
                  MenuData.category.map((row)=>(
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b><Link to={`/product-list/Gold+Diamond/${row.Name}`} onClick={()=>SearchCategory('Gold+Diamond',row.Name)}>{row.Name}</Link></b></p>
      {MenuData.JewelleryType!=undefined ? 
                          MenuData.JewelleryType.map((j_row)=>(
                          j_row.CategoryId==row._id ?
                          <p><Link to={`/product-list/Gold+Diamond/${row.Name}/${j_row.Name}`} onClick={()=>SearchType('Gold+Diamond',row.Name, j_row.Name)}>{j_row.Name}</Link></p>
                          :null
                          )):null
                          
                          }
  </div>
                  ))
                  :null}

                  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Other Categories</b></p>
    {MenuData.other_category!=undefined ?
      MenuData.other_category.map((row)=>(
      index_category.includes(row.Name)!=true ?
        <p><Link to={`/product-list/Gold+Diamond/${row.Name}`} onClick={()=>SearchCategory('Gold+Diamond',row.Name)}>{row.Name}</Link></p>
      :null
      ))
      :null}
  </div>
</div> 
</div>
</Typography>
</AccordionDetails>


</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography >Silver</Typography>
</AccordionSummary>

</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography >Collection</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                {MenuData.collection != undefined ?
                                MenuData.collection.map((row)=>(
                                    <div className="col-md-2 col-sm-3 col-xs-6 col-6">
                                        <Link to={`/collection/${row.Name}`} onClick={()=>SearchCollection(row.Name)}><img src={row.Image.CardImage} style={{width:"100%", borderRadius:5, marginTop:5}} /></Link>
                                    </div>
                                ))
                                :
                            <Loader
                            type="Puff"
                            color="#A17D38"
                            height={50}
                            width={50}
                            timeout={50000} //3 secs
                            style={{margin:"auto"}}
                            />   
                                
                                }
                                </div>
                            </div>
</Typography>
</AccordionDetails>


<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>
</div> 
</div>
</Typography>
</AccordionDetails>


</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography >Offer</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>

  


    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Finger Ring</b></p>
    <p>Ring - one</p>
    <p>Ring - two</p>
    <p>Ring - three</p>
    <p>Ring - four</p>
    <p>Ring - five</p>
    <p>Ring - six</p>
  </div>
</div> 
</div>
</Typography>
</AccordionDetails>





</Accordion>

<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography >Gift & Rewards</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
  <p><b>Gift By Occasion</b></p>
                                       {MenuData.occasion!=undefined ?
                                      MenuData.occasion.map((row)=>(
                                        <p><Link onClick={()=>OccasionSearch(row.Name)} to={`/occasion/${row.Name}`} style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Gift for Special Ones</b></p>
                                        <p><Link style={{color:"gray"}}>GIFT FOR HER</Link></p>
                                            <p><Link style={{color:"gray"}}>GIFT FOR HIM</Link></p>
                                                <p><Link style={{color:"gray"}}>GIFT FOR KIDS</Link></p>
                                                    <p><Link style={{color:"gray"}}>CORPORATE GIFT</Link></p>
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Price Range</b></p>
                                        <p><Link to="/price-range/5000-15000" onClick={()=>price_range_search(5000, 15000)} style={{color:"gray"}}>5000-15000</Link></p>
                                        <p><Link to="/price-range/15000-30000" style={{color:"gray"}} onClick={()=>price_range_search(15000, 30000)}>15000-30000</Link></p>
                                        <p><Link to="/price-range/30000-80000" style={{color:"gray"}} onClick={()=>price_range_search(30000, 80000)}>30000-80000</Link></p>
                                        <p><Link to="/price-range/80000-800000" style={{color:"gray"}} onClick={()=>price_range_search(80000, 800000)}>80000-Above</Link></p>
  </div>

  
</div> 
</div>
</Typography>
</AccordionDetails>



</Accordion>

<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography >All Jewellery</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
<div classNme="container" id="menu_font">
<div className="row">
  <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
  <p><b>All Categories</b></p>
    {MenuData.category!=undefined ?
    MenuData.category.map((row)=>(
          <p><Link style={{color:"gray"}} onClick={()=>SearchCategory(row.Name)} to={`/All-Jewellery/${row.Name}`}>
    {/* <img src={row.ProductImage} style={{width:45}}/> */}
    {row.Name}</Link></p>
    )):null}
    {MenuData.other_category!=undefined ?
                            MenuData.other_category.map((row)=>(
                            index_category.includes(row.Name)!=true ?
                                <p><Link style={{color:"gray"}} onClick={()=>SearchCategory(row.Name)} to={`/All-Jewellery/${row.Name}`}>
                                {/* <img src={row.ProductImage} style={{width:45}}/> */}
                                {row.Name}</Link></p>
                            :null
                            ))
                            :null}
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Purity</b></p>
                                       {MenuData.purity!=undefined ?
                                      MenuData.purity.map((row)=>(
                                        <p><Link to={`/All-Jewellery/purity/${row.Name}`} onClick={()=>Purity(row.Name)} style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Coins</b></p>
                                    {MenuData.coins!=undefined ?
                                      MenuData.coins.map((row)=>(
                                        <p><Link style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
  </div>

    <div className="col-sm-6 col-xs-6 col-6" style={{marginTop:10}}>
    <p><b>Metal</b></p>
                                        {MenuData.metal!=undefined ?
                                      MenuData.metal.map((row)=>(
                                        <p><Link onClick={()=>ProductIn(row.Name)} to={`/product-list/${row.Name}`} style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
  </div>
</div> 
</div>
</Typography>
</AccordionDetails>





</Accordion>

</Drawer>

<Cart visible={cartvisible} />
</div>
);
}


export default MobileMenu