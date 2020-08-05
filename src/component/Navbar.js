import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {ButttonCntainer,NavbarContent}from './Navstyle.js';
import logo from '../logo.svg';
import styled from 'styled-components';


class Navbar extends Component{
    render(){
        return(
            <NavbarContent className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to='/' className="nav-link">
                    <img src={logo} alt="store" className="navbar-brand"/>Phone Store
                </Link>
             
                <Link to="/cart" className="ml-auto">
                    <ButttonCntainer>
                        <span className ="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        
                        my Cart
                    </ButttonCntainer>
                </Link>
                </NavbarContent>
        )
    }
   
}

export default Navbar;
