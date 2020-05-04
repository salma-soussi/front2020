import React, { Component } from 'react';
import prod1 from "../../img01/select-product-1.jpg"
import prod2 from "../../img01/select-product-2.jpg"
import "./style-visiteur.css"
import { Route, Link,NavLink, BrowserRouter as Router } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div>

                <div id="preloder">
                    <div class="loader"></div>
                </div>

                <header class="header-section">
                    <div class="header-top">
                        <div class="container">
                            <div class="ht-left">
                                <div class="mail-service">
                                    <i class=" fa fa-envelope"></i>
                                    <a >email: justtn.pfe@gmail.com </a>
                                </div>
                                <div class="phone-service">
                                    <i class=" fa fa-phone"></i>
+216 22 749 274
</div>
                            </div>
                            <div class="ht-right">
                                <a href="#" class="login-panel"><i class="fa fa-user"></i>Login</a>

                                <div class="top-social">
                                    <a href="#"><i class="ti-facebook"></i></a>
                                    <a href="#"><i class="ti-linkedin"></i></a>
                                    <a href="#"><i class="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="inner-header">
                            <div class="row">
                                <div class="col-lg-3 col-md-3">
                                    <div class="logo">
                                        <a href="index-2.html">
                                            <img src="./img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7">
                                    <div class="advanced-search">
                                        <button type="button" class="category-btn" >All Categories</button>
                                        <div class="input-group">
                                            <input type="text" placeholder="What do you need?" />
                                            <button type="button"><i class="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item">
                        <div class="container">
                            <div class="nav-depart">
                                <div class="depart-btn">
                                    <i class="ti-menu"></i>
                                    <span> departments</span>
                                    <ul class="depart-hover">
                                        
                                        <li class="active"> <NavLink exact to="/mode">Mode</NavLink></li>
                                        <li > <NavLink exact to="/informatique">Informatique</NavLink></li>
                                        <li > <NavLink exact to="/fourniture">Fourniture</NavLink></li>
                                            <li > <NavLink exact to="/beaute">Beauté</NavLink></li>
                                            <li > <NavLink exact to="/eletronique">Electronique</NavLink></li>
                                            <li > <NavLink exact to="/sport">Sport</NavLink></li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <nav class="nav-menu mobile-menu">
                                <ul>
                                    
                                    <li class="active" > <NavLink exact to="/">Home</NavLink></li>
                                    <li > <NavLink exact to="/shop">Shop</NavLink></li>
                                    <li><a href="#">Collection</a>
                                        <ul class="dropdown">
                                        <li > <NavLink exact to="/mode">Mode</NavLink></li>
                                        <li > <NavLink exact to="/informatique">Informatique</NavLink></li>
                                        <li > <NavLink exact to="/fourniture">Fourniture</NavLink></li>
                                        <li > <NavLink exact to="/beaute">Beauté</NavLink></li>
                                        <li > <NavLink exact to="/eletronique">Electronique</NavLink></li>
                                        <li > <NavLink exact to="/sport">Sport</NavLink></li>

                                        </ul>
                                    </li>
                                    <li > <NavLink exact to="/contact">Contact</NavLink></li>
                                   
                                   
                                    <li><a href="#">Pages</a>
                                    <ul class="dropdown">
                                    <li><NavLink exact to="/loginasbuyer">Se Connecter</NavLink></li>
                                    <li><NavLink exact to="/signupasbuyer"> CRÉER UN COMPTE</NavLink></li>
                                    <li><NavLink exact to="/schoppingcard"> Shopping Cart</NavLink></li>
                                    <li><a href="faq.html">Faq</a></li>
                                   
                                  
                                    </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div id="mobile-menu-wrap"></div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;