import React from 'react';
import { Drawer, Button, Radio, Space, Form, Input, Select, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './../style.css';
import './search_css.css';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Cart from './Cart'
import { Badge } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {HomePageData} from './../../redux/actions/HomeAction';
import {OccasionProduct} from './../../redux/actions/ProductListAction';
import {search, dropdownSearch} from './../../redux/actions/SearchAction';
import {ProductListData, searchPriceRange, PuritySearch, CollectionProduct, AllCategoryProductAction} from './../../redux/actions/ProductListAction';
import 'react-notifications/lib/notifications.css';



import {NotificationContainer, NotificationManager} from 'react-notifications';
const DesktopMenu = (props) => {
	 const [visible, setVisible] = React.useState(false);
     const [visibleSearch, setVisibleSearch] = React.useState(false);
     const [search_visible, setSearch_visible] = React.useState(false);
     const [anchorEl, setAnchorEl] = React.useState(null);
     const [SearchField, setSearchField] = React.useState(null);

     const dispatch = useDispatch();


const SearchCollection = (CollectionName) => {
    dispatch(CollectionProduct({Collection:CollectionName}));
}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
      localStorage.removeItem('token');
      setAnchorEl(null);
  }

    

    React.useEffect(()=>{
        dispatch(HomePageData());
    },[])
    
    const MenuData = useSelector((reduxState)=>{
        return reduxState.home.HomeData
    })

    const SearchCategory = (Category) => {
        const state = {
            SearchCategory:Category
        }
        dispatch(AllCategoryProductAction(state))
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

    const index_category = [];
    const push_purpose = useSelector((reduxState)=>{
        if(reduxState.home.HomeData.category!=undefined){
        return reduxState.home.HomeData.category.map((row)=>{
            index_category.push(row.Name)
        })
        }
        else{
            return [];
        }
    })

	const showDrawer = () => {
        setVisible(false)
        setTimeout(() => {
            setVisible(true)
        }, 100);
	}

    const showSearch = () =>{
         setSearch_visible(false)
        setTimeout(() => {
            setSearch_visible(true)
        }, 100);
    }

    const onSearchClose = () =>{
        setSearch_visible(false)
    }

	const onClose = () => {
    setVisible(false)
	}

    const cartCount = useSelector((reactRedux)=> {
    return reactRedux.cart.CartCount
})

const notification_redux = useSelector((reduxState)=>{
    return reduxState.auth.login
})

const Purity = (Name) => {
    dispatch(PuritySearch({Purity:Name}))
}


const SearchDropdown = (e) => {
    setSearchField(e.target.value);
    dispatch(dropdownSearch({Search:SearchField}))
}

const getDrodownSearch = useSelector((reduxState)=>{
    return reduxState.userSearch.dropdownSearch
})

const productDetails = (row) => {
    localStorage.setItem('ProductDetails',JSON.stringify(row))
    onSearchClose()
}

const OccasionSearch = (OccasionName) => {
    dispatch(OccasionProduct({Occasion:OccasionName}))
}


const price_range_search = (Min, Max) => {
    dispatch(searchPriceRange({Min:Min, Max:Max}))
}

    return (
	<div>
    <NotificationContainer/>
        <div id="DesktopMenu">
        <div className="container-fluid" id="border">
        <div className="row" id="top_menu">
            <div className="col-sm-12">
                 <div className="top_menu_desktop">
                        <ul>
                            <li><Link to="/appointment">Book An Appointment</Link></li>
                            <li><Link to="/video-call">Video Call</Link></li>
                            <li><Link to="/try-at-home">Try At Home</Link></li>
                        </ul>
                    </div>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="row">
                <div className="col-sm-3" style={{position:"absolute",zIndex:1000}}>
                    <Link to="/"><img src="https://mahaveer-jewellers.s3.ap-south-1.amazonaws.com/logo.png" style={{ marginTop:-40}} /></Link>
                </div>
                <div className="col-sm-12">
                   <ul id="main_nav">
                        <li><Link onClick={()=>ProductIn('Gold')} to="/product-list/Gold">Gold</Link>
                             <ul className="dropdown">
                                <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                {MenuData.category!=undefined ?
                                MenuData.category.map((row)=>(
                                    <div className="col-md-2 col-sm-3">
                                        <h6><b><Link onClick={()=>SearchCategory('Gold', row.Name)} to={`/product-list/Gold/${row.Name}`}>{row.Name}</Link></b></h6>
                                        {MenuData.JewelleryType!=undefined ? 
                                        MenuData.JewelleryType.map((j_row)=>(
                                        j_row.CategoryId==row._id ?
                                        <p>
                                        <Link onClick={()=>SearchType('Gold',row.Name,j_row.Name)} style={{color:"gray"}} to={`/product-list/Gold/${row.Name}/${j_row.Name}`}>
                                        <img src={j_row.Image} style={{width:50}}/>
                                        {j_row.Name}
                                        </Link></p>
                                        :null
                                        )):null
                                        }
                                    </div>
                                    ))
                                :null
                                }

                                    <div className="col-md-2 col-sm-3">
                                        <h6><b>Other Categories</b></h6>
                                        {MenuData.other_category!=undefined ?
                                        MenuData.other_category.map((row)=>(
                                        index_category.includes(row.Name)!=true ?
                                         <p><Link style={{color:"gray"}} to={`/product-list/Gold/${row.Name}`}>
                                        {/* <img src={row.CardImage} style={{width:45}}/> */}
                                         {row.Name}</Link></p>
                                        :null
                                        ))
                                        :null}
                                    </div>

                                    <div className="col-md-1 col-sm-3">
                                      <h6><b>Coins</b></h6>
                                      {MenuData.coins!=undefined ?
                                      MenuData.coins.map((row)=>(
                                        <p><Link style={{color:"gray"}} to={`/product-list/${row.Name}`}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
                                    </div>
                                  
                                    <div className="col-md-1 col-sm-3">
                                       <h6><b>Metal Colour</b></h6>
                                     {MenuData.metal!=undefined ?
                                      MenuData.metal.map((row)=>(
                                        <p><Link style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
                                    </div>
                                </div>
                            </div>
                             </ul>
                        </li>
                        <li><Link onClick={()=>ProductIn("Diamond")} to="/product-list/Diamond">Diamond</Link>
                             <ul className="dropdown">
                                <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                {MenuData.category!=undefined ?
                                MenuData.category.map((row)=>(
                                    <div className="col-md-2 col-sm-3">
                                        <h6><b><Link onClick={()=>SearchCategory('Gold', row.Name)} to={`/product-list/Diamond/${row.Name}`}>{row.Name}</Link></b></h6>
                                        {MenuData.JewelleryType!=undefined ? 
                                        MenuData.JewelleryType.map((j_row)=>(
                                        j_row.CategoryId==row._id ?
                                        <p>
                                        <Link onClick={()=>SearchType('Gold',row.Name,j_row.Name)} style={{color:"gray"}} to={`/product-list/Diamond/${row.Name}/${j_row.Name}`}>
                                        <img src={j_row.Image} style={{width:50}}/>
                                        {j_row.Name}
                                        </Link></p>
                                        :null
                                        )):null
                                        }
                                    </div>
                                    ))
                                :null
                                }

                                    <div className="col-md-2 col-sm-3">
                                        <h6><b>Other Categories</b></h6>
                                        {MenuData.other_category!=undefined ?
                                        MenuData.other_category.map((row)=>(
                                        index_category.includes(row.Name)!=true ?
                                         <p><Link style={{color:"gray"}} to={`/product-list/Gold/${row.Name}`}>
                                      {/* <img src={row.CardImage} style={{width:45}}/> */}
                                         {row.Name}</Link></p>
                                        :null
                                        ))
                                        :null}
                                    </div>
                                </div>
                            </div>
                             </ul>
                        </li>
                        
            <li><Link to={`product-list/Gold+Diamond`} onClick={()=>ProductIn("Gold+Diamond")}>Gold+Diamond</Link>
                <ul className="dropdown">
                    <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-1"></div>
                    {MenuData.category!=undefined ?
                                MenuData.category.map((row)=>(
                                    <div className="col-md-2 col-sm-3">
                                        <h6><b><Link onClick={()=>SearchCategory('Gold+Diamond', row.Name)} to={`/product-list/Gold+Diamond/${row.Name}`}>{row.Name}</Link></b></h6>
                                        {MenuData.JewelleryType!=undefined ? 
                                        MenuData.JewelleryType.map((j_row)=>(
                                        j_row.CategoryId==row._id ?
                                        <p>
                                        <Link onClick={()=>SearchType('Gold+Diamond',row.Name,j_row.Name)} style={{color:"gray"}} to={`/product-list/Gold+Diamond/${row.Name}/${j_row.Name}`}>
                                        <img src={j_row.Image} style={{width:50}}/>
                                        {j_row.Name}
                                        </Link></p>
                                        :null
                                        )):null
                                        }
                                    </div>
                                    ))
                                :null
                                }
                        <div className="col-md-2 col-sm-3">
                            <h6><b>Other Categories</b></h6>
                            {MenuData.other_category!=undefined ?
                            MenuData.other_category.map((row)=>(
                            index_category.includes(row.Name)!=true ?
                                <p><Link style={{color:"gray"}} onClick={()=>SearchCategory('Gold+Diamond',row.Name)} to={`product-list/Gold+Diamond/${row.Name}`}>
                                {/* <img src={row.ProductImage} style={{width:45}}/> */}
                                {row.Name}</Link></p>
                            :null
                            ))
                            :null}
                        </div>
                    </div>
                            </div>
                             </ul>
                        </li>
                        <li><Link to="/product-list/Silver" onClick={()=>ProductIn("Silver")}>Silver</Link></li>
                        <li><a href="/collection">Collection</a>
                            <ul className="dropdown" style={{padding:30}}>
                                <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                {MenuData.collection != undefined ?
                                MenuData.collection.map((row)=>(
                                    <div className="col-md-2 col-sm-3">
                                        <Link to={`/collection/${row.Name}`} onClick={()=>SearchCollection(row.Name)}><img src={row.Image.CardImage} style={{width:"100%"}} /></Link>
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
                             </ul>
                        </li>
                        <li><Link to="/product-list/Offers" onClick={()=>ProductIn("Offers")}>Offers</Link></li>
                        <li><Link>Gift and Rewards</Link>
                            <ul className="dropdown">
                                <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                    <div className="col-md-2 col-sm-3">
                                        <h6><b>Gift By Occasion</b></h6>
                                       {MenuData.occasion!=undefined ?
                                      MenuData.occasion.map((row)=>(
                                        <p><Link onClick={()=>OccasionSearch(row.Name)} to={`/occasion/${row.Name}`} style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
                                    </div>

                                    <div className="col-md-2 col-sm-3">
                                      <h6><b>Gift for Special Ones</b></h6>
                                        <p><Link style={{color:"gray"}}>GIFT FOR HER</Link></p>
                                            <p><Link style={{color:"gray"}}>GIFT FOR HIM</Link></p>
                                                <p><Link style={{color:"gray"}}>GIFT FOR KIDS</Link></p>
                                                    <p><Link style={{color:"gray"}}>CORPORATE GIFT</Link></p>
                                    
                                    </div>

                                    <div className="col-md-2 col-sm-3">
                                       <h6><b>Price Range</b></h6>
                                        <p><Link to="/price-range/5000-15000" onClick={()=>price_range_search(5000, 15000)} style={{color:"gray"}}>5000-15000</Link></p>
                                        <p><Link to="/price-range/15000-30000" style={{color:"gray"}} onClick={()=>price_range_search(15000, 30000)}>15000-30000</Link></p>
                                        <p><Link to="/price-range/30000-80000" style={{color:"gray"}} onClick={()=>price_range_search(30000, 80000)}>30000-80000</Link></p>
                                        <p><Link to="/price-range/80000-800000" style={{color:"gray"}} onClick={()=>price_range_search(80000, 800000)}>80000-Above</Link></p>
                                    </div>
                                </div>
                            </div>
                            </ul>
                        </li>
                               <li><Link to="/All-Jewellery" onClick={()=>ProductIn("All-Jewellery")}>All Jewellery</Link>
                             <ul className="dropdown">
                                <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-1"></div>
                                    <div className="col-md-2 col-sm-3">
                                        <h6><b>All Categories</b></h6>

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

                                    <div className="col-md-2 col-sm-3">
                                      <h6><b>Purity</b></h6>
                                       {MenuData.purity!=undefined ?
                                      MenuData.purity.map((row)=>(
                                        <p><Link to={`/All-Jewellery/purity/${row.Name}`} onClick={()=>Purity(row.Name)} style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
                                    </div>

                                    <div className="col-md-2 col-sm-3">
                                      <h6><b>Coins</b></h6>
                                    {MenuData.coins!=undefined ?
                                      MenuData.coins.map((row)=>(
                                        <p><Link style={{color:"gray"}}>{row.Name}</Link></p>
                                    ))
                                        :
                                        null
                                        }
                                    </div>

                                    <div className="col-md-2 col-sm-3">
                                       <h6><b>Metal</b></h6>
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
                             </ul>
                        </li>
                        <li style={{marginLeft:35}}><Link onClick={()=>showSearch()}><i className="fa fa-search"></i></Link></li>
                        <li><Link onClick={()=>showDrawer()}> <Badge count={cartCount} style={{color:"white !important", marginTop:-10}}><i className="fa fa-shopping-cart"></i></Badge></Link></li>
                        {localStorage.getItem('token') && localStorage.getItem('token')!='undefined' ? 
                        <li className="dropdown-user">
                        <Link onClick={handleClick}><i className="fa fa-user-o"></i></Link>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{marginTop:37, marginLeft:-50}}
                        ><MenuItem></MenuItem>
                        <MenuItem onClick={handleClose}><p style={{paddingLeft:20}}></p><Link to="/profile"> Profile </Link> <p style={{paddingRight:20}}></p></MenuItem>
                        <MenuItem onClick={logout}><p style={{paddingLeft:20}}></p> <Link to="/signin"> Logout </Link> <p style={{paddingRight:20}}></p></MenuItem>
                        </Menu>
                        </li>
                        :
                        <li><Link to="/signin"><i className="fa fa-user-o"></i></Link></li>
                            }
                   </ul>
                
                </div>
                
            </div>
            
        </div>

<div id="min_stick"></div>        </div>
        </div>
        </div>
 
 <Cart visible={visible} onDrawerOpen={()=>showDrawer()} />

<div id="search_box">
<Drawer
          width={"100%"}
          onClose={() => onSearchClose()}
          visible={search_visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'left',
              }}
            >
            </div>
          }
          id="search_boxx"
        >
         <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <input type="search" onChange={(e)=>SearchDropdown(e)} placeholder="Search for you" id="main_search" className="form-control" value={SearchField} />
                    <button id="main_search" style={{right:0, width:50, marginLeft:30, paddingLeft:50, background:"none"}} className="form-control"><i className="fa fa-search"></i></button>
                <div style={{marginTop:"9%"}}>        
                   
            {getDrodownSearch.map((row)=>(
                <Link to="/product-details" onClick={()=>productDetails(row)}>
                    <div className="row" id="searchProudcts">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">
                                {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} style={{width:"30%", float:"right"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" /> }
                             
                                </div>
                                <div className="col-sm-8">
                                    <h6>                                    
                                    <b>{row.ProductTitle}</b>
                                    </h6>
                                    <h6>
                                    <b>SKU </b>: {row.SKU}
                                    </h6>
                                    <h6><b>Price:{row.ProductPrice.ProductPrice}</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
                </div>
                </div>
            </div>
         </div>
        </Drawer>
</div>

 <div style={{marginBottom:100}} id="desktop_margin">.</div>
      </div>
    );
}

export default DesktopMenu