import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ProductListData} from './../redux/actions/ProductListAction';
import {useSelector, useDispatch} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

   heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const ProductList = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [sortvisible, setSortVisible] = React.useState(false);
  const usedispatch = useDispatch();

 const SearchType = () => {
        const state = {
            ProductIn:props.match.params.ProductIn,
            SearchCategory:props.match.params.SearchCategory,
            SearchType:props.match.params.SearchType,            
        }
        usedispatch(ProductListData(state))
    }

React.useEffect(()=>{
  window.scrollTo(0, 0)
    SearchType()
},[])



const productlist = useSelector((reduxState)=>{
  return reduxState.productlist.productIn
})


const loading = useSelector((reduxState)=>{
  return reduxState.productlist.loading
})


const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};

  const classes = useStyles();

  const showDrawer = () => {
        setVisible(false)
        setTimeout(() => {
            setVisible(true)
        }, 100);
	}

  const SortshowDrawer = () => {
        setSortVisible(false)
        setTimeout(() => {
            setSortVisible(true)
        }, 100);
	}


const onClose = () => {
    setVisible(false)
	}

  const onSortClose = () => {
    setSortVisible(false)
	}


const productDetails = (data) => {
  localStorage.setItem('ProductDetails',JSON.stringify(data))
}

  return(
  <Layout>
  <div id="product_list_banner">
    <Banner />
  </div>
    <div className={classes.root}>
       <div className="container" style={{marginTop:70}}>
            <div className="row" >
              <div className="col-sm-3" id="type_filter">
                <h6 style={{textAlign:"left"}}>Type</h6>
                <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>
          <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
            </div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
        </Collapse>


         <h6 style={{textAlign:"left", marginBottom:15, marginTop:50}}>Filter</h6>
             <Collapse
          defaultActiveKey={['1']}
          onChange={callback} 
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
           <Checkbox.Group style={{ width: '100%', marginLeft:10, marginTop:-20 }} >
          <div>
          <Checkbox value="A">Gold</Checkbox>
          </div>
          <div>
          <Checkbox value="B">Platinum</Checkbox>
          </div>
          <div>
          <Checkbox value="C">Elumunium</Checkbox>
          </div>
          <div>
          <Checkbox value="D">Diamond</Checkbox>
          </div>
          <div>
          <Checkbox value="E">Costmatic</Checkbox>
          </div>
        </Checkbox.Group>
          </Panel>
        </Collapse>
              </div>

              <div className="col-md-9 col-sm-12" id="product_list_colum">
                  <div className="row" style={{paddingLeft:10, paddingRight:10}}> 
          {loading
           ?
           <Loader
        type="Puff"
        color="#A17D38"
        height={50}
        width={50}
        
        style={{ margin:"auto", marginTop:"20%"}}
      />  :
      productlist.length!=0 ?
              productlist.map((row)=>( 
                     <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6" style={{padding:3}}>
                      <div id="product_background_box">
                        <div id="bestseller_div" style={{border:"none"}}>
                          <Link onClick={()=>productDetails(row)} to="/product-details">
                          <h5 id="bestseller">Bestseller</h5>
                        <div id="product_box_img">
            {row.ProductPictures[0]!==undefined ? <img src={row.ProductPictures[0].url} id="original_img" style={{width:"100%"}} /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" /> }
        {row.ProductPictures[1]!==undefined ? <img src={row.ProductPictures[1].url} id="dup_img" /> :<img src="https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg" id="dup_img" />}
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                          <p>{row.ProductTitle}</p>
                          </div>
                          <div className="col-sm-12">
                          <div className="row">
                          <div className="col-sm-7">
                                <h6 id="price">₹ { Math.round(row.ProductPrice.ProductPrice * 100)/100 } &nbsp; &nbsp;<s style={{color:"#B1B1B1"}}>₹{ Math.round(row.ProductPrice.ProductPrice * 100)/100 + 1000}</s></h6>
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
                    {visible==false ? 
                        <div className="row" id="button_group">
                                      <div className="col-sm-6 col-xs-6 col-6" id="filter_btn">
                                        <button id="main_cart_btn" onClick={()=>SortshowDrawer()} style={{background:"white", color:"black",}}>Sort <i className="fa fa-sort-amount-desc"></i></button>
                                      </div>
                                      <div className="col-sm-6 col-xs-6 col-6" id="filter_btn">
                                        <button id="main_cart_btn" onClick={()=>showDrawer()} style={{background:"white", color:"black", borderLeft:"0.1px solid gray"}}>Filter <i className="fa fa-filter"></i></button>
                                      </div>
                                    
                                </div>
                      :null}
      </div>
  </div>
  <div id="filter_box">
  <Drawer
          width={"100%"}
          onClose={() => onClose()}
          visible={visible}
          placement="bottom"
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'left',
              }}
            >
            </div>
          }
        >
         <div className="container-fluid">
            <div className="row" style={{padding:0}}>
                <div className="col-sm-12" style={{padding:0}}>
              <div id="filter_close">
                <center><p>Filter <i className="fa fa-filter"></i></p></center>
              </div>

    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Price </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Metal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Story </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Earing Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Ring Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Nechlace Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Bracelete Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>New In</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Discounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

        </div>
        </div>

        <div className="row" style={{position:"fixed", bottom:0, width:"100%"}}>
                        <div className="col-sm-12 col-xs-12 col-12" id="filter_btn">
                          <button id="main_cart_btn" style={{background:"#A17D38", color:"white", zIndex:5000000000000, borderLeft:"0.1px solid gray"}}>Apply</button>
                        </div>
                      
                  </div>
        </div>
        </Drawer>


          <Drawer
          width={"100%"}
          onClose={() => onSortClose()}
          visible={sortvisible}
          placement="bottom"
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'left',
              }}
            >
            </div>
          }
        >
         <div className="container-fluid" id="sorting">
            <div className="row" style={{padding:0}}>
                <div className="col-sm-12" style={{padding:0}}>
                <div id="filter_close">
                <center><p>Sorting <i className="fa fa-sort-amount-desc"></i></p></center>
              </div>
                    <Collapse
          defaultActiveKey={['1']}
        >
        <div style={{position:"fixed", bottom:"10%", width:"100%",}}>
         <div style={{height:40, paddingLeft:20, paddingTop:10, borderTop:"1px solid #e6e6e6", zIndex:10000000000000000000}}>
          <div style={{float:"left"}}><input type="radio" name="sort" id="1" style={{marginTop:5}} /> </div>
          <label for="1" style={{color:"black", fontSize:12, marginLeft:10, }}><b>Price (Low to High)</b></label>
         </div>

        <div style={{height:40, paddingLeft:20, paddingTop:10, borderTop:"1px solid #e6e6e6", zIndex:10000000000000000000}}>
          <div style={{float:"left"}}><input type="radio" name="sort" id="2" style={{marginTop:5}} /> </div>
          <label for="2" style={{color:"black", fontSize:12, marginLeft:10, }}><b>Price (High to Low)</b></label>
         </div>

         <div style={{height:40, paddingLeft:20, paddingTop:10, borderTop:"1px solid #e6e6e6", zIndex:10000000000000000000}}>
          <div style={{float:"left"}}><input type="radio" name="sort" id="4" style={{marginTop:5}} /> </div>
          <label for="4" style={{color:"black", fontSize:12, marginLeft:10, }}><b>New Arrival</b></label>
         </div>

         <div style={{height:40, paddingLeft:20, paddingTop:10, borderTop:"1px solid #e6e6e6", zIndex:10000000000000000000}}>
          <div style={{float:"left"}}><input type="radio" name="sort" id="3" style={{marginTop:5}} /> </div>
          <label for="3" style={{color:"black", fontSize:12, marginLeft:10, }}><b>Popularity</b></label>
         </div>

         

         <div style={{height:40, paddingLeft:20, paddingTop:10, borderTop:"1px solid #e6e6e6", zIndex:10000000000000000000}}>
          <div style={{float:"left"}}><input type="radio" name="sort" id="5" style={{marginTop:5}} /> </div>
          <label for="5" style={{color:"black", fontSize:12, marginLeft:10, }}><b>20% Discount</b></label>
         </div>

        
        </div>
        </Collapse>
                </div>
            </div>

        <div className="row" style={{position:"fixed", bottom:0, width:"100%"}}>
                      <div className="col-sm-12 col-xs-12 col-12" id="filter_btn">
                        <button id="main_cart_btn" style={{background:"#A17D38", color:"white", zIndex:5000000000000, borderLeft:"0.1px solid gray"}}>Apply</button>
                      </div>
                    
                </div>
        </div>
        </Drawer>
        </div>
        </Layout>
    );
}

export default ProductList;