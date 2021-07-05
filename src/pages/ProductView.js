import React, { useMemo } from 'react';
import { withRouter } from 'react-router';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import './../components/style.css';
import StarRatings from 'react-star-ratings';
import SliderImage from 'react-zoom-slider';
import AppBar from '@material-ui/core/AppBar';
import innerText from 'react-innertext';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Collapse } from 'antd';
import { Link, Prompt } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import ReactQuill from 'react-quill';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, RemoveToCart } from './../redux/actions/CartAction';
import './../App.css';
import { AllCategoryProductAction } from './../redux/actions/ProductListAction';
import { getPrice } from '../redux/actions/priceListAction';

const { Panel } = Collapse;
const breakPoints1 = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 3, itemsToScroll: 3 },
   { width: 768, itemsToShow: 5 },
   { width: 1200, itemsToShow: 5 }
];
const { Option } = Select;


// Components start from here
const ProductView = (props) => {
   const usedispatch = useDispatch();

   const product = JSON.parse(localStorage.getItem('ProductDetails'))

   // const [price, setPrice] = React.useState(product.ProductPrice.ProductPrice);
   const [rating, setRating] = React.useState(2);
   const [Quantity, setQuantity] = React.useState(1)
   const [ProductDetails, setProductDetails] = React.useState();
   const [CartDetails, setCartDetails] = React.useState();
   const [cartBtn, setcartBtn] = React.useState(false);
   const [ProductPrice, setProductPrice] = React.useState(0);
   const [ProductGram, setProductGram] = React.useState(product.Dimensions.ProductWeight);
   const [Discount, setDiscount] = React.useState(product.ProductPrice.DiscountPrice);
   const [GoldPrice_1g, setGoldPrice_1g] = React.useState(0);
   const [karetVal, setkaretVal] = React.useState([]);
   const [SetKaret, setSetKaret] = React.useState([]);
   const [ToatalMakingCharge, setToatalMakingCharge] = React.useState([]);
   const [ShippingCharge, setShippingCharge] = React.useState([]);
   const [OneGramGoldPrice, setOneGramGoldPrice] = React.useState(props.items.pricelist.GoldPrice1Gram)
   const [TaxAmount, setTaxAmount] = React.useState(0)
   const [Tax, setTax] = React.useState(3)
    
   React.useEffect(() => {
      console.log(props.items.pricelist.GoldPrice1Gram)
      setOneGramGoldPrice(props.items.pricelist.GoldPrice1Gram)
      window.scrollTo(0, 0);
      s()
   }, [])
   
   const s = () => {

      for (var pv = 0; pv < product.Purity.length; pv++) { // pv : Purity value
         
         let str = product.Purity[pv].Name;
         let matches = str.match(/\d+/g);

         karetVal.push(parseInt(matches[0])) // Pushing all karet value( like: 23, 22, 19 ) in array (karetVal)

         if (pv == product.Purity.length - 1) {

            let kv = Math.max.apply(null, karetVal) // kv: karet value,,,, geting higest or max karet value from array karetVal
            setSetKaret(kv) // set max karaet value to 

            let shipCharge = []
            
            var gram = ProductGram;
            var makingCharge = (gram * 1000) - Discount;
            setToatalMakingCharge(makingCharge)

            if (gram < 6 & makingCharge > 0) {
               setShippingCharge(800)
               shipCharge.push(800)
            }

            else {
               setShippingCharge(0)
               shipCharge.push(0)
            }

            if (kv == 23) {
               var tthk23 =   ((parseFloat(OneGramGoldPrice) * 0.97) * gram) + parseFloat(makingCharge) + parseInt(shipCharge)
               let taxableAmount =  (Math.round( ((tthk23 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
               let mainAmount = (Math.round( tthk23 * 100 ) / 100 ).toFixed(2)
               let finalAmountWithTax =(Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)
               setProductPrice( finalAmountWithTax )
               setTaxAmount( taxableAmount )
               setGoldPrice_1g(OneGramGoldPrice * 0.97)
            }

            if (kv == 22) {
               var ttk22 =   ((parseFloat(OneGramGoldPrice) * 0.92) * gram) + parseFloat(makingCharge) + parseInt(shipCharge)
               let taxableAmount =  (Math.round( ((ttk22 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
               let mainAmount = (Math.round( ttk22 * 100 ) / 100 ).toFixed(2)
               let finalAmountWithTax =(Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)
              
               setProductPrice( finalAmountWithTax )
               setTaxAmount( taxableAmount )
               setGoldPrice_1g(OneGramGoldPrice * 0.92)
            }

            if (kv == 18) {
               var ek18 =   ((parseFloat(OneGramGoldPrice) * 0.75) * gram) + parseFloat(makingCharge) + parseInt(shipCharge)
               let taxableAmount =  (Math.round( ((ek18 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
               let mainAmount = (Math.round( ek18 * 100 ) / 100 ).toFixed(2)
               let finalAmountWithTax =(Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)

               setProductPrice( finalAmountWithTax )
               setTaxAmount( taxableAmount )
               setGoldPrice_1g(OneGramGoldPrice * 0.75)
            }
         }

      }
   }

   const SearchCategory = (Category) => {
      usedispatch(AllCategoryProductAction({ SearchCategory: Category }))
   }

   const dispatch = useDispatch();

   const plus = () => {
      setQuantity(Quantity + 1)
   }

   const minus = () => {
      if (Quantity > 1) {
         setQuantity(Quantity - 1)
      }
   }

   const globalData = useSelector((reduxState) => {
      return reduxState.cart.CartId.includes(product._id)
   })

   const AddCart = (cart_data) => {
      let checkOutData = 
      {
         ProductId:product._id,
         ProductTitle:product.ProductTitle,
         Quantity: Quantity,
         SetKaret: SetKaret,
         ToatalMakingCharge: ToatalMakingCharge,
         ProductPrice: ProductPrice,
         ShippingCharge: ShippingCharge,
         TaxAmount: TaxAmount,
         Discount: Discount,
         GoldPrice_1g: GoldPrice_1g,
         ProductGram: ProductGram,
      }
      
      let CartData = {
         product:cart_data,
         checkOutData:checkOutData
      }

      dispatch(AddToCart(CartData))
   }

   const data = [];
   const AddProudctId = () => {
      localStorage.setItem('TryAtHomeProductId', product._id)
      props.props.history.push('/try-at-home')
   }
   product.ProductPictures.map((row) => (
      data.push(
         {
            image: row.url,
         }
      )
   ))

   const homedata = useSelector((reduxState) => {
      return reduxState.home.HomeData
   })

   const breakPoints2 = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 3, itemsToScroll: 3 },
      { width: 768, itemsToShow: 4 },
      { width: 1200, itemsToShow: 4 }
   ];

   const getPriceByPurity = (purity) => {
      var gram = ProductGram;
      var makingCharge = (gram * 1000) - Discount;
      setToatalMakingCharge(makingCharge)

      if (gram < 6 & makingCharge > 0) {
         setShippingCharge(800)
      }
      else {
         setShippingCharge(0)
      }

      if (purity == "23K") {
         // var tthk23 =   parseFloat( ( OneGramGoldPrice * 0.95 ) * gram) + parseFloat(makingCharge) + parseInt(ShippingCharge)
         // let taxableAmount =  (tthk23 / 100) * Tax 
         // let finalAmountWithTax = parseFloat( ( Math.round( tthk23 * 100 ) / 100 ).toFixed(2) ) + parseFloat( ( Math.round( taxableAmount * 100 ) / 100 ).toFixed(2) )
         
         var tthk23 = parseFloat( ( OneGramGoldPrice * 0.97 ) * gram) + parseFloat(makingCharge) + parseInt(ShippingCharge)
         let taxableAmount =  (Math.round( ((tthk23 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
         let mainAmount = (Math.round( tthk23 * 100 ) / 100 ).toFixed(2)
         let finalAmountWithTax =(Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)

         setProductPrice( finalAmountWithTax )
         setTaxAmount( taxableAmount )
         setGoldPrice_1g(OneGramGoldPrice * 0.97)
         setSetKaret(23)
      }

      if (purity == "22K") {
         var ttk22 =   ((parseFloat(OneGramGoldPrice) * 0.92) * gram) + parseFloat(makingCharge) + parseInt(ShippingCharge)
         let taxableAmount =  (Math.round( ((ttk22 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
         let mainAmount = (Math.round( ttk22 * 100 ) / 100 ).toFixed(2)
         // let finalAmountWithTax = (Math.round( ( parseFloat(ttk22) + parseFloat(taxableAmount) ) * 100) / 100 ).toFixed(2) ;
         let finalAmountWithTax =(Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)
         setProductPrice( finalAmountWithTax )
         setTaxAmount( taxableAmount )
         setGoldPrice_1g(OneGramGoldPrice * 0.92)
         setSetKaret(22)
      }

      if (purity == "18K") {
         var ek18 = parseFloat( ( OneGramGoldPrice * 0.75 ) * gram) + parseFloat(makingCharge) + parseInt(ShippingCharge)
         let taxableAmount =  (Math.round( ((ek18 / 100) * Tax )* 100 ) / 100 ).toFixed(2)
         let mainAmount = (Math.round( ek18 * 100 ) / 100 ).toFixed(2)
         let finalAmountWithTax = (Math.round( (+mainAmount + +taxableAmount) * 100 ) / 100 ).toFixed(2)

         setProductPrice( finalAmountWithTax )
         setTaxAmount( taxableAmount )
         setGoldPrice_1g(OneGramGoldPrice * 0.75)
         setSetKaret(18)
      }
      else {
         // setPrice(product.ProductPrice.ProductPrice)
      }

   }


   const ProductDetailss = (product) => {
      localStorage.setItem('ProductDetails', JSON.stringify(product))
      window.scrollTo(0, 0)
      props.props.history.push('/product-details')
   }

   let commentData = {};

   const checkOut = (d) => {
      let checkOutData = {
         ProductTitle:product.ProductTitle,
         Quantity: Quantity,
         SetKaret: SetKaret,
         ToatalMakingCharge: ToatalMakingCharge,
         ProductPrice: ProductPrice,
         ShippingCharge: ShippingCharge,
         TaxAmount: TaxAmount,
         Discount: Discount,
         GoldPrice_1g: GoldPrice_1g,
         ProductGram: ProductGram,
      }
      localStorage.setItem('checkOutData', JSON.stringify(checkOutData))
      let checkOut = true;
      if(checkOut){
         props.props.history.push('/check-out')
      }
   }

   return (

      <Layout>
         
         <div className="container" id="view">
            <div className="row">
               <div className="col-sm-12" style={{ textAlign: "left", marginTop: 10, marginBottom: 20 }}>
                  <Breadcrumb>
                     <Breadcrumb.Item>
                        <Link to="/">
                           Home</Link>
                     </Breadcrumb.Item>
                     <Breadcrumb.Item>Product Details</Breadcrumb.Item>
                  </Breadcrumb>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-5 col-md-12 col-sm-12">
                  <SliderImage
                     data={data}
                     showDescription={true}
                     direction="right"
                  />
               </div>
               <div className="col-lg-7 col-md-12 col-sm-12" id="product_title_col">
                  <div className="row">
                     <div className="col-sm-8 col-xs-8 col-8" style={{ textAlign: "left" }}>
                        <h5 id="main_title">{product.ProductTitle}
                        </h5>
                        <p style={{ marginTop: -12 }}><span style={{ fontSize: 10 }}>{product.ProductSubTitle}</span></p>
                     </div>
                     <div className="col-sm-4 col-xs-4 col-4">
                        <StarRatings
                           rating={rating}
                           starRatedColor="yellow"
                           numberOfStars={6}
                           name='rating'
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-12" style={{ textAlign: "left" }}>
                        <h5 id="price_text" style={{ marginBottom: -1, color: "#093363", fontWeight: "bold", color: "#093363" }}>

                           ₹ {ProductPrice}

                           <span >Discount : <span style={{ color: "#093363", fontWeight: "bold", color: "#093363" }}>{product.ProductPrice.Discount}%</span></span>  <span> - Incl. all of taxes</span> </h5>
                        <p><span style={{ fontSize: 10, }}>Weight  and price may very subject to the stock available</span><span style={{ marginLeft: 10 }}><a href="#price_specification">Price Breakup</a></span></p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-12" style={{ textAlign: "left" }}>
                        <img src="https://www.diamonddistrictblock.com/assets/images/ring-bnr.jpg" style={{ width: "80%", borderRadius: 5 }} />
                     </div>
                  </div>
                  <br />
                  <div className="row" id="qty_row">
                     <div className="col-sm-12" style={{ textAlign: "left" }}>
                        {/* <h6 style={{marginTop:10, color:"gray", marginBottom:10}}>TRY ON AVAILABLE</h6> */}
                        <div className="row">
                           <div className="col-sm-6 col-xs-6 col-6">
                              <div className="row">
                                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6" style={{ padding: 0, paddingLeft: 20 }}>
                                    <h6 style={{ marginTop: 10, fontSize: 12 }}><b>Gold Purity</b></h6>
                                 </div>
                                 <div className="col-sm-6 col-xs-6 col-6">

                                    <select id="purity_select" onChange={(e) => getPriceByPurity(e.target.value)}>
                                       {product.Purity.map((row, key) => {

                                          return (
                                             <option value={row.Name} selected={SetKaret + "K" == row.Name ? "selected" : ""}> { row.Name} </option>
                                          )
                                       })}
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 col-xs-6 col-6">
                              <div className="row">
                                 <div className="col-md-4 col-sm-5 col-xs-5 col-5" id="qty_col" styl={{ padding: 0 }}>
                                    <h6 style={{ marginTop: 10, fontSize: 12 }}><b>NetQty</b></h6>
                                 </div>
                                 <div className="col-sm-7 col-xs-7 col-7" id="qty_box" style={{ padding: 0 }}>
                                    <div class="number">
                                       <Link style={{ color: "black" }} onClick={() =>
                                          minus()}><span class="minus">-</span></Link>
                                       <input readonly type="text" value={Quantity} />
                                       <Link style={{ fontSize: 25, marginTop: 10, color: "black" }} onClick={() => plus()}><span class="plus">+</span></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row" id="applyPincode">

                           <div className="col-lg-6 col-md-6 col-sm-6 col-xs-7 col-7" id="d_col">
                              <p id="delivery" style={{ color: "black" }}><b>Delivery</b></p>
                              <div id="input">
                                 <input type="text" placeholder="Enter Pin Code" className="form-control" />
                                 <button id="apply_btn" style={{ position: "absolute", right: "15%" }}>Apply</button>
                                 <h6>[will be delivered in 2-3 days]</h6>
                              </div>
                           </div>

                           <div className="col-lg-6 col-md-6 col-sm-6 col-xs-7 col-7" style={{ marginTop: "40px" }}>
                              <div id="input">
                                 <button id="input" onClick={() =>
                                    AddProudctId()} style={{ border: "1px solid #e6e6e6", height: 37, borderRadius: 5, width: "80%" }}>
                                    <Link to="/try-at-home" onClick={() =>
                                       localStorage.setItem('TryAtHomeProductId', product._id)} style={{ color: "black" }}>Try At Available</Link>
                                 </button>
                              </div>
                           </div>


                        </div>
                     </div>
                  </div>
                  <br />
                  <div className="row" id="button_group">
                     <div className="col-sm-6 col-xs-6 col-6" id="product_details_mobile_btn_col">
                        {globalData ?
                           <Link to="/cart">
                              <button id="main_cart_btn"  style={{ background: "#A17D38" }}>VIEW CART</button></Link>
                           :
                           <button id="main_cart_btn"  onClick={() => AddCart(product)} style={{ background: "#A17D38" }}>ADD TO CART</button>
                        }
                     </div>
                     <div className="col-sm-6 col-xs-6 col-6" id="product_details_mobile_btn_col">

                        {globalData ?
                           <Link to="/cart">
                              <button id="main_cart_btn">BUY NOW</button></Link>
                           :
                           <button id="main_cart_btn" onClick={ () => checkOut(1) }>BUY NOW</button>
                        }

                     </div>
                  </div>
               </div>
            </div>
         </div>



         {/* PRICE BREAK DOWN AREA */}
         <div className="container" id="more_info">
            <div className="row">
               <div className="col-sm-12" style={{ textAlign: "left" }}>
                  <h5>MORE PRODUCT INFORMATION</h5>
               </div>
               <div className="col-md-12 col-sm-12" id="price_specification">
                  <Collapse defaultActiveKey={['1']}>
                     <Panel header="Product Specification"  >
                        <div className="row" style={{ paddingLeft: 20 }}>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p >SKU Number :-</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{product.SUK} </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p >Purity :-</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{SetKaret}K </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Gender :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{product.Gender}</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p >Type :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{product.SearchType}</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Stock :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{product.Stock}</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Metal :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>
                                 {
                                    product.Metal.Name != undefined ?
                                       product.Metal.Name
                                       : null
                                 }
                              </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Offer :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>
                                 {
                                    product.Offer.Name != undefined ?
                                       product.Offer.Name
                                       : null
                                 }
                              </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Category :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>
                                 {
                                    product.Category.Name != undefined ?
                                       product.Category.Name
                                       : null
                                 }</p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > MetalColor :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>
                                 {product.Color.map((row) => {
                                    return row.Name.toString()
                                 })}
                              </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Occasion :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>
                                 {
                                    product.Occasion != undefined ?
                                       product.Occasion.Name
                                       : null
                                 }
                              </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Dimensions :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{product.Dimensions.ProductHeight} (WxH)  </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p > Weight :- </p>
                           </div>
                           <div className="col-sm-3 col-xs-6 col-6">
                              <p style={{ fontWeight: "bold", color: "#093363" }}>{ProductGram} gm</p>
                           </div>
                        </div>
                     </Panel>
                  </Collapse>
               </div>
               {/* start price break div from here */}
               <div className="col-md-12 col-sm-12">
                  <Collapse
                     defaultActiveKey={['1']}
                  >
                     <Panel header="Price Breakup">
                        <div>
                           <table >
                              <thead>
                                 <tr style={{ padding: 20 }}>
                                    <th scope="col">Component</th>
                                    <th scope="col">Gold Rate{"(" + SetKaret + "K)"}</th>
                                    <th scope="col">Weight(gm)</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Final Value</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Account" style={{ textAlign: "left", paddingLeft: "15px" }}>
                                       {/* {product.ProductIn}   */}
                                       {SetKaret}K {product.ProductTitle}
                                    </td>
                                    <td data-label="Due Date">
                                       ₹ {Math.round((GoldPrice_1g * 100) / 100).toFixed(2) + "/g"}
                                    </td>
                                    <td >{ProductGram}gm</td>

                                    <td data-label="Period">  {/* ( parseFloat(goldPrice1g) * parseFloat(ProductGram) ) */}
                              ₹ {
                                          (
                                             Math.round(parseFloat(GoldPrice_1g) * parseFloat(ProductGram) * 100) / 100
                                          ).toFixed(2)
                                       }
                                    </td>



                                    <td data-label="Period">₹ {product.ProductPrice.DiscountPrice}</td>

                                    <td data-label="Period" style={{ textAlign: "right", paddingRight: "45px" }}>₹ {

                                       (
                                          Math.round(parseFloat(GoldPrice_1g) * parseFloat(ProductGram) * 100) / 100
                                       ).toFixed(2)

                                    }</td>
                                 </tr>
                                 <tr>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>Making Charge</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td data-label="Period">
                                       ₹ {
                                          (
                                             Math.round((parseFloat(ProductGram) * 1000) * 100) / 100
                                          ).toFixed(2)
                                       }
                                    </td>
                                    <td >-</td>
                                    <td data-label="Period" style={{ textAlign: "right", paddingRight: "45px" }}>
                                       ₹ {
                                          (
                                             Math.round((parseFloat(ProductGram) * 1000) * 100) / 100
                                          ).toFixed(2)
                                       }
                                    </td>
                                 </tr>
                                 { ShippingCharge > 0 ?
                                 <tr>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>Shipping Charge</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td data-label="Period">₹ {(Math.round(ShippingCharge * 100) / 100).toFixed(2)}</td>
                                    <td >-</td>
                                    <td data-label="Period" style={{ textAlign: "right", paddingRight: "45px" }}>₹ {(Math.round(ShippingCharge * 100) / 100).toFixed(2)} </td>
                                 </tr>
                                 :
                                 null}

                                 <tr style={{ borderTop: "1px solid lightgray" }}>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>Sub Total</td>
                                    <td >-</td>
                                    <td >
                                       {ProductGram}gm <br />
                              (Gross weight)
                              </td>
                                    <td >
                                       ₹ {
                                          (Math.round(
                                             (
                                                (parseFloat(GoldPrice_1g) * parseFloat(ProductGram))
                                                +
                                                (parseFloat(ProductGram) * 1000)
                                                +
                                                (parseInt(ShippingCharge))
                                             )
                                             * 100) / 100).toFixed(2)
                                       }
                                    </td>
                                    <td >₹ {product.ProductPrice.DiscountPrice}</td>
                                    <td  style={{ textAlign: "right", paddingRight: "45px" }}>
                                       ₹ {

                                          (Math.round(
                                             (
                                                (parseFloat(GoldPrice_1g) * parseFloat(ProductGram))
                                                +
                                                (parseFloat(ProductGram) * 1000)
                                                +
                                                (parseInt(ShippingCharge))
                                             )
                                             * 100) / 100).toFixed(2)
                                       }
                                    </td>
                                 </tr>
                                 <tr style={{ borderTop: "1px solid lightgray" }}>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>Discount on Selling Price</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td >₹ {product.ProductPrice.DiscountPrice}</td>
                                    <td >-</td>
                                 </tr>
                                 <tr>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px", width: "400px" }}>Subtotal After Discount</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td style={{ textAlign: "right", paddingRight: "45px" }}>
                                       ₹ {
                                             ( Math.round(
                                                (
                                                   (
                                                      (parseFloat(GoldPrice_1g) * parseFloat(ProductGram))
                                                      +
                                                      (parseFloat(ProductGram) * 1000)
                                                      +
                                                      parseInt(ShippingCharge)
                                                   )
                                                   -
                                                   parseFloat(product.ProductPrice.DiscountPrice)
                                                ) * 100
                                             ) / 100 ).toFixed(2)
                                       } 
                                    </td>
                                 </tr>

                                 <tr style={{ borderTop: "1px solid lightgray" }}>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>GST</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td > ₹ { ( Math.round( TaxAmount * 100 ) / 100 ).toFixed(2)   } </td>
                                    <td >₹ {product.ProductPrice.DiscountPrice}</td>
                                    <td style={{ textAlign: "right", paddingRight: "45px" }}>₹ { ( Math.round( TaxAmount * 100 ) / 100 ).toFixed(2)   }</td>
                                 </tr>

                                 <tr style={{ borderTop: "1px solid lightgray" }}>
                                    <td  style={{ textAlign: "left", paddingLeft: "15px" }}>Grand Total</td>
                                    <td >-</td>
                                    <td >-</td>
                                    <td > 
                                       ₹ {
                                          ProductPrice 
                                       } 
                                    </td>
                                    <td >₹ {product.ProductPrice.DiscountPrice}</td>
                                    <td style={{ textAlign: "right", paddingRight: "45px" }}>₹ {
                                          ProductPrice 
                                       }</td>
                                 </tr>

                                 

                              </tbody>
                           </table>
                        </div>
                     </Panel>
                  </Collapse>
               </div>
               {/* Ends price break div from here */}
               <div className="col-md-12 col-sm-12">
                  <Collapse
                     defaultActiveKey={['1']}
                  >
                     <Panel header="Description"  >
                        <div style={{ padding: 20 }}>
                           {
                              product.Description.replace(/<[^>]+>/g, '')
                           }
                        </div>
                     </Panel>
                  </Collapse>
               </div>
            </div>
         </div>
         <div className="container" id="product_details_page_offer">
            <div className="row">
               <div className="col-sm-12">
                  <center>
                     <h5 style={{ textAlign: "center" }}>New Offerings</h5>
                  </center>
               </div>
            </div>
            <div className="row" >
               <div className="col-md-12" style={{ padding: 0 }}>
                  <Carousel breakPoints={breakPoints2}>
                     {homedata.products !== undefined ?
                        homedata.products.map((row) => (
                           <div style={{ padding: 5 }} id="bestseller_div">
                              <Link to="product-details" onClick={() =>
                                 ProductDetailss(row)}>
                                 <h5 id="bestseller">Bestseller</h5>
                                 <div id="product_box_img">
                                    {row.ProductPictures[0] != undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{ width: "100%" }} /> : <img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                                    {row.ProductPictures[1] != undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> : <img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-12">
                                       <p>{row.Name}</p>
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="row">
                                          <div className="col-sm-7">
                                             <h6 id="price">₹ 35,496 &nbsp; &nbsp;<s style={{ color: "#B1B1B1" }}>₹397,45</s></h6>
                                          </div>
                                          <div className="col-sm-5" style={{ marginTop: -10 }}>
                                             <button id="quick_view">Quick View</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        ))
                        : null}
                  </Carousel>
               </div>
            </div>
         </div>
         <div className="container" id="product_details_page_offer">
            <div className="row">
               <div className="col-sm-12">
                  <center>
                     <h5 style={{ textAlign: "center" }}>Best Seller</h5>
                  </center>
               </div>
            </div>
            <div className="row" >
               <div className="col-md-12" style={{ padding: 0 }}>
                  <Carousel breakPoints={breakPoints2}>
                     {homedata.products !== undefined ?
                        homedata.products.map((row) => (
                           <div style={{ padding: 5 }} id="bestseller_div">
                              <Link to="/product-details" onClick={() =>
                                 ProductDetailss(row)}>
                                 <h5 id="bestseller">Bestseller</h5>
                                 <div id="product_box_img">
                                    {row.ProductPictures[0] != undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{ width: "100%" }} /> : <img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                                    {row.ProductPictures[1] != undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> : <img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                                 </div>
                                 <div className="row">
                                    <div className="col-sm-12">
                                       <p>Promise Solitaire ring</p>
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="row">
                                          <div className="col-sm-7">
                                             <h6 id="price">₹ 35,496 &nbsp; &nbsp;<s style={{ color: "#B1B1B1" }}>₹397,45</s></h6>
                                          </div>
                                          <div className="col-sm-5" style={{ marginTop: -10 }}>
                                             <button id="quick_view">Quick View</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        ))
                        : null}
                  </Carousel>
               </div>
            </div>
         </div>
         <div className="container" id="product_details_page_offer">
            <div className="row">
               <div className="col-sm-12">
                  <center>
                     <h5 style={{ textAlign: "center" }}>Shop By Products</h5>
                  </center>
               </div>
               <div className="col-sm-12">
                  <Carousel breakPoints={breakPoints1}>
                     {homedata.other_category != undefined ?
                        homedata.other_category.map((row) => (
                           <div id="carousel_product_box" style={{ padding: 5 }}>
                              <Link to={`/all-jewellery/${row.Name}`} onClick={() =>
                                 SearchCategory(row.Name)}>
                                 <h5 id="bestseller"></h5>
                                 <div id="category_product_box_img">
                                    <img src={row.CardImage} id="original_img" style={{ width: "100%" }} />
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
      </Layout>
   );
}


function Parent(props) {
   // Uninitialized state will cause Child to error out
   const [items, setItems] = React.useState();
 
   const usedispatch = useDispatch();
   // Data does't start loading
   // until *after* Parent is mounted
   React.useEffect(() => {
     fetch('http://localhost:4000/api/price/list')
       .then(res => res.json())
       .then(data => setItems(data));


       usedispatch(getPrice())
       console.log(globalDataOne)
   }, []);
 
   const globalDataOne = useSelector((reduxState) => {
      return reduxState.pricelist.priceList
   })

   return (
     <div>
       {items && <ProductView items={items} props={props} />}
     </div>
   );
 }


export default withRouter(Parent);