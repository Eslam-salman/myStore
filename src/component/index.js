import React from 'react';

import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Defuale from './Defualt';
import Cart from './Cart';
import Model from './model';
import CustomizedBreadcrumbs from './breadcrumbs'
import CarouselPage from './Carousel'
import BlogList  from './blogList'
import { Paper } from '@material-ui/core';
function index() {
  return (
<React.Fragment>
<CarouselPage/>
<ProductList/>
<BlogList/>
<Model/>
</React.Fragment>

  )}
  export default index;