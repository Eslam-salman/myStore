import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Defuale from './component/Defualt';
import Cart from './component/Cart';
import Model from './component/model';
import CustomizedBreadcrumbs from './component/breadcrumbs'
import CarouselPage from './component/Carousel'
import BlogList  from './component/blogList'
import index from './component/index'
import bBlogList from './component/bBageList'
import { Paper } from '@material-ui/core';
import Shop from './component/shop'
import Contact from './component/contact'
import Footer from "./component/Footer"
function App() {
  return (
  <React.Fragment>
    <Navbar/>
    <CustomizedBreadcrumbs/>
    
    
    <Switch>
      <Route exact path="/" component={index}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/blog/:id"component={bBlogList}/>
      <Route path="/blog"component={bBlogList}/>
      <Route path="/contact" component={Contact}/>
      <Route  component={Defuale}/>
    </Switch>
    <Model/>
   <Footer/>
  </React.Fragment>
  );
}

export default App;
