import React, { Component } from 'react';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import "./style-visiteur.css"
import mode from "../../img01/img6.jpg"
import info from "../../img01/img4.jpg"
import beauty from "../../img01/img1.jpg"
import furniture from "../../img01/img2.jpg"
import electronic from "../../img01/img5.jpg"
import sport from "../../img01/img3.jpg"
import womn from "../../img01/products/women-1.jpg"
import womn2 from "../../img01/products/im11.jpg"
import womn3 from "../../img01/products/im66.jpg"
import womn4 from "../../img01/products/malek.jpg"
import men1 from "../../img01/products/f87.jpg"
import men2 from "../../img01/products/f8.jpg"
import men3 from "../../img01/products/jj.jpg"
import men4 from "../../img01/products/a52.jpg"
import beaut from "../../img01/products/s8.jpg"
import beauty1 from "../../img01/products/s6.jpg"
import beauty2 from "../../img01/products/s5.jpg"
import beauty3 from "../../img01/products/s3.jpg"
import four from "../../img01/products/p64.jpg"
import four1 from "../../img01/products/p5.jpg"
import four2 from "../../img01/products/p337.jpg"
import four3 from "../../img01/products/p33.jpg"

import elect from "../../img01/products/e2.jpg"
import elect1 from "../../img01/products/e586.jpg"
import elect2 from "../../img01/products/e88.jpg"
import elect3 from "../../img01/products/rr.jpg"


import spor from "../../img01/products/z1.jpg"
import spor1 from "../../img01/products/z3.jpg"
import spor2 from "../../img01/products/z6.jpg"
import spor3 from "../../img01/products/z32.jpg"

import log1 from "../../img01/fatales.png"
import log2 from "../../img01/exist1.png"
import log3 from "../../img01/flormar.png"
import log4 from "../../img01/bershka.png"
import log5 from "../../img01/zara.png"


import icon from "../../img01/icon-1.png"
import icon2 from "../../img01/icon-2.png"

import Header from "./header"
import Footer from "./footer"


class Home extends Component {
    render() {
        return (
            <div>





                <Header />

                <section class="hero-section">
                    <div class="hero-items owl-carousel">
                        <div class="single-hero-items  e"  >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <span>Bag,kids</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
                                        <a href="#" class="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div class="off-card">
                                    <h2>Sale <span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="single-hero-items e2" >
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <span>Bag,kids</span>
                                        <h1>Black friday</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>
                                        <a href="#" class="primary-btn">Shop Now</a>
                                    </div>
                                </div>
                                <div class="off-card">
                                    <h2>Sale <span>50%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="banner-section spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={mode} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/mode"><h4>Mode</h4></NavLink></li>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={info} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/informatique"><h4>Informatique</h4></NavLink></li>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={beauty} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/beaute"><h4>Beauté</h4></NavLink></li>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={furniture} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/fourniture"><h4>Furniture</h4></NavLink></li>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={electronic} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/electronique"><h4>Electronique</h4></NavLink></li>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-banner">
                                    <img src={sport} />
                                    <div class="inner-text">
                                        <li > <NavLink exact to="/sport"><h4>Sport</h4></NavLink></li>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large e3" >
                                    <h2>Mode</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Women's clothings</li>
                                        <li>Men's clothings </li>
                                        <li>kid's clothings</li>
                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <a href="#">
                                                <h5>T-shirt</h5>
                                            </a>
                                            <div class="product-price">
                                                40 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Bags</div>
                                            <a href="#">
                                                <h5>Handbag</h5>
                                            </a>
                                            <div class="product-price">
                                                60 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Dress</h5>
                                            </a>
                                            <div class="product-price">
                                                120 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={womn4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Towel</div>
                                            <a href="#">
                                                <h5>Pull</h5>
                                            </a>
                                            <div class="product-price">
                                                60 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Peripheral</li>
                                        <li>Computers</li>
                                        <li>Printers&Scanner</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men1} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Hardware</div>
                                            <a href="#">
                                                <h5>Mouse</h5>
                                            </a>
                                            <div class="product-price">
                                                20 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Hardware</div>
                                            <a href="#">
                                                <h5> Bluetooth earbuds</h5>
                                            </a>
                                            <div class="product-price">
                                                30 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Hardware</div>
                                            <a href="#">
                                                <h5>Keyboard</h5>
                                            </a>
                                            <div class="product-price">
                                                10 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={men4} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Hardware</div>
                                            <a href="#">
                                                <h5> Beats cordless headphones</h5>
                                            </a>
                                            <div class="product-price">
                                                34 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f"
                                >
                                    <h2>Informatique</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large f2" >
                                    <h2>beaute</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Makeup</li>
                                        <li>Perfumes </li>
                                        <li>Accessories</li>
                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={beaut} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Cosmetics</div>
                                            <a href="#">
                                                <h5> Lipsticks</h5>
                                            </a>
                                            <div class="product-price">
                                                20 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={beauty1} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Nail polish bottles</div>
                                            <a href="#">
                                                <h5>Nail polish </h5>
                                            </a>
                                            <div class="product-price">
                                                10 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={beauty2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Beaute</div>
                                            <a href="#">
                                                <h5>Makeup brush</h5>
                                            </a>
                                            <div class="product-price">
                                                15 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={beauty3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Face Makeup</div>
                                            <a href="#">
                                                <h5>powder</h5>
                                            </a>
                                            <div class="product-price">
                                                40 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Living room Furniture</li>
                                        <li>Kitchen furniture</li>
                                        <li>Office furniture</li>
                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={four} alt="" />

                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Furniture</div>
                                            <a href="#">
                                                <h5>Sectional sofa</h5>
                                            </a>
                                            <div class="product-price">
                                                950 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={four1} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Furniture</div>
                                            <a href="#">
                                                <h5> leather sofa</h5>
                                            </a>
                                            <div class="product-price">
                                                300 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={four2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Furniture</div>
                                            <a href="#">
                                                <h5>Gray chair</h5>
                                            </a>
                                            <div class="product-price">
                                                200 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={four3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Furniture</div>
                                            <a href="#">
                                                <h5>Sofa</h5>
                                            </a>
                                            <div class="product-price">
                                                1000 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f3">
                                    <h2>Fourniture</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="women-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="product-large f4" >
                                    <h2>Electronic</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-1">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Cuisinière</li>
                                        <li>Televisions </li>
                                        <li>Camera</li>
                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={elect} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>westone electric</h5>
                                            </a>
                                            <div class="product-price">
                                                130 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={elect1} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Kitchen robot</h5>
                                            </a>
                                            <div class="product-price">
                                                140 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={elect2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Coffee maker</h5>
                                            </a>
                                            <div class="product-price">
                                                220 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={elect3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Kitchen oven</h5>
                                            </a>
                                            <div class="product-price">
                                                600 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="man-banner spad">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="filter-control">
                                    <ul>
                                        <li class="active">Sport clothings</li>
                                        <li>Sport shoes</li>
                                        <li>Sport&Fitness</li>

                                    </ul>
                                </div>
                                <div class="product-slider owl-carousel">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={spor} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Tights</h5>
                                            </a>
                                            <div class="product-price">
                                                14 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={spor1} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Hoodie</h5>
                                            </a>
                                            <div class="product-price">
                                                19 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={spor2} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>T-shirt</h5>
                                            </a>
                                            <div class="product-price">
                                                34 TND
</div>
                                        </div>
                                    </div>
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img src={spor3} alt="" />
                                            <div class="icon">
                                                <i class="icon_heart_alt"></i>
                                            </div>
                                            <ul>
                                                <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                                                <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name"></div>
                                            <a href="#">
                                                <h5>Bag</h5>
                                            </a>
                                            <div class="product-price">
                                                50 TND
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="product-large  m-large f5"
                                >
                                    <h2>Sport</h2>
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="partner-logo">
                    <div class="container">
                        <div class="logo-carousel owl-carousel">
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log1} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log2} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log3} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log4} alt="" />
                                </div>
                            </div>
                            <div class="logo-item">
                                <div class="tablecell-inner">
                                    <img src={log5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <Footer />

            </div>
        );
    }
}

export default Home;
