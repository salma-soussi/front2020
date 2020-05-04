import React, { Component } from 'react';
import "./style-visiteur.css"
// import mode from "../img01/img6.jpg"
// import info from "../img01/img4.jpg"
// import beauty from "../img01/img1.jpg"
// import furniture from "../img01/img2.jpg"
// import electronic from "../img01/img5.jpg"
// import sport from "../img01/img3.jpg"
import womn from "../../img01/products/women-1.jpg"
// import womn2 from "../img01/products/im11.jpg"
import womn3 from "../../img01/products/im66.jpg"
import womn4 from "../../img01/products/malek.jpg"
// import men1 from "../img01/products/f87.jpg"
import men2 from "../../img01/products/f8.jpg"
import men3 from "../../img01/products/jj.jpg"
import men4 from "../../img01/products/a52.jpg"
// import beaut from "../img01/products/s8.jpg"
// import beauty1 from "../img01/products/s6.jpg"
// import beauty2 from "../img01/products/s5.jpg"
// import beauty3 from "../img01/products/s3.jpg"
// import four from "../img01/products/p64.jpg"
// import four1 from "../img01/products/p5.jpg"
// import four2 from "../img01/products/p337.jpg"
// import four3 from "../img01/products/p33.jpg"

// import elect from "../img01/products/e2.jpg"
// import elect1 from "../img01/products/e586.jpg"
import elect2 from "../../img01/products/e88.jpg"
// import elect3 from "../img01/products/rr.jpg"


// import spor from "../img01/products/z1.jpg"
// import spor1 from "../img01/products/z3.jpg"
// import spor2 from "../img01/products/z6.jpg"
// import spor3 from "../img01/products/z32.jpg"


// import icon from "../img01/icon-1.png"
// import icon2 from "../img01/icon-2.png"

import Header from "./header"
import Footer from "./footer"

class shop extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="breacrumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb-text">
                                    <a href="#"><i class="fa fa-home"></i> Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="product-shop spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                                <div class="filter-widget">
                                    <h4 class="fw-title">Sector</h4>
                                    <ul class="filter-catagories">
                                        <li><a href="#">Mode</a></li>
                                        <li><a href="#">Informatique</a></li>
                                        <li><a href="#">Fourniture</a></li>
                                        <li><a href="#">Beauty</a></li>
                                        <li><a href="#">Electronique</a></li>
                                        <li><a href="#">Sport</a></li>
                                    </ul>
                                </div>
                                <div class="filter-widget">
                                    <h4 class="fw-title">Price</h4>
                                    <div class="filter-range-wrap">
                                        <div class="range-slider">
                                            <div class="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                        <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="33" data-max="98">
                                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                    </div>
                                    <a href="#" class="filter-btn">Filter</a>
                                </div>
                                <div class="filter-widget">
                                    <h4 class="fw-title">Color</h4>
                                    <div class="fw-color-choose">
                                        <div class="cs-item">
                                            <input type="radio" id="cs-black" />
                                            <label class="cs-black" for="cs-black">Black</label>
                                        </div>
                                        <div class="cs-item">
                                            <input type="radio" id="cs-violet" />
                                            <label class="cs-violet" for="cs-violet">Violet</label>
                                        </div>
                                        <div class="cs-item">
                                            <input type="radio" id="cs-blue" />
                                            <label class="cs-blue" for="cs-blue">Blue</label>
                                        </div>
                                        <div class="cs-item">
                                            <input type="radio" id="cs-yellow" />
                                            <label class="cs-yellow" for="cs-yellow">Yellow</label>
                                        </div>
                                        <div class="cs-item">
                                            <input type="radio" id="cs-red" />
                                            <label class="cs-red" for="cs-red">Red</label>
                                        </div>
                                        <div class="cs-item">
                                            <input type="radio" id="cs-green" />
                                            <label class="cs-green" for="cs-green">Green</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter-widget">
                                    <h4 class="fw-title">Tags</h4>
                                    <div class="fw-tags">
                                        <a href="#">Computers</a>
                                        <a href="#">Makeup</a>
                                        <a href="#">Women’s Clothing</a>
                                        <a href="#">Kid's clothing</a>
                                        <a href="#">Perfumes</a>
                                        <a href="#">Men’s Clothing</a>
                                        <a href="#">Living room</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 order-1 order-lg-2">
                                <div class="product-show-option">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7">
                                            <div class="select-option">
                                                <select class="sorting">
                                                    <option value="">Default Sorting</option>
                                                </select>
                                                <select class="p-show">
                                                    <option value="">Show:</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-5 text-right">
                                            <p>Show 01- 09 Of 36 Product</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-list">
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-6">
                                            <div class="product-item">
                                                <div class="pi-pic">
                                                    <img src={men2} alt="" />
                                                    <div class="sale pp-sale">Sale</div>
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
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $14.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Coat</div>
                                                    <a href="#">
                                                        <h5>Guangzhou sweater</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $13.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Guangzhou sweater</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $34.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                        <h5>Microfiber Wool Scarf</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $64.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Men's Painted Hat</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $44.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Converse Shoes</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $34.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <div class="product-item">
                                                <div class="pi-pic">
                                                    <img src={womn4} alt="" />
                                                    <div class="sale pp-sale">Sale</div>
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
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $64.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Coat</div>
                                                    <a href="#">
                                                        <h5>2 Layer Windbreaker</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $44.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
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
                                                    <div class="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Converse Shoes</h5>
                                                    </a>
                                                    <div class="product-price">
                                                        $34.00
                                            <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="loading-more">
                                    <i class="icon_loading"></i>
                                    <a href="#">
                                        Loading More
                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default shop;
