import React from 'react';
import Layout from './../components/Layout/Index.js';
import Banner from './../components//Header/Banner.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import {getCollection, CollectionProduct} from './../redux/actions/ProductListAction';
import {useSelector, useDispatch} from 'react-redux';


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


  const Collection = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getCollection())
  },[]);

  const collection_banner = useSelector((reduxState)=>{
    return reduxState.productlist.collection_banner
  })

  const SearchCollection = (CollectionName) => {
    dispatch(CollectionProduct({Collection:CollectionName}));
}



    return(
        <Layout>
      <div className="container">
         <div className="row">
                <div className="col-sm-12" style={{textAlign:"left", marginTop:0, marginBottom:0}}>
                      <Breadcrumb>
    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
                </div>
            </div>
      </div>
      {collection_banner.map((row)=>(
        <Link to={`/collection/${row.Name}`} onClick={()=>SearchCollection(row.Name)}>
         <div className="container-fluid" style={{marginTop:0, marginTop:20}}>
              <div className="row">
                <div className="col-sm-12" style={{padding:0}}>
                  <img src={`${row.Image.BannerImage}`} style={{width:"100%"}} />
                </div>
              </div>
            </div>
          </Link>
        ))}
        </Layout>
    );
}

export default Collection;