import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Item from "./item"

import womn from "../../img01/products/women-1.jpg"
import womn3 from "../../img01/products/im66.jpg"
import womn4 from "../../img01/products/malek.jpg"

import "../../Home_Page/site-visiteur/style-visiteur.css"
import Header from "../../Home_Page/site-visiteur/header"
import Footer from "../../Home_Page/site-visiteur/footer"
import list from "./list"
let prev = 0;
let next = 0;
let last = 0;
let first = 0;
class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: [],
            currentPage: 1,
            todosPerPage: 9
        }
        this.handleClick = this.handleClick.bind(this);

        this.handleLastClick = this.handleLastClick.bind(this);

        this.handleFirstClick = this.handleFirstClick.bind(this);

    }
    handleClick(event) {

        event.preventDefault();

        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleLastClick(event) {

        event.preventDefault();

        this.setState({
            currentPage: last
        });
    }
    handleFirstClick(event) {

        event.preventDefault();

        this.setState({
            currentPage: 1
        });
    }



    componentDidMount() {
        this.getAll();
    }
    getAll() {
        fetch("http://localhost:3020/mode/list", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log("mode", data);
                this.setState({ mode: data })
            })
    }
    render() {
        let { mode, currentPage, todosPerPage } = this.state;
        // Logic for displaying current todos

        let indexOfLastTodo = currentPage * todosPerPage;

        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

        let currentTodos = mode.slice(indexOfFirstTodo, indexOfLastTodo);


        prev = currentPage > 0 ? (currentPage - 1) : 0;

        last = Math.ceil(mode.length / todosPerPage);

        next = (last === currentPage) ? currentPage : currentPage + 1;



        // Logic for displaying page numbers

        let pageNumbers = [];

        for (let i = 1; i <= last; i++) {
            pageNumbers.push(i);
        }
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

                                        {currentTodos.map((el, index) => <Item item={el} key={index} />)}
                                    </div>

                                    <nav>

                                        <Pagination className="d-flex">

                                            <PaginationItem>
                                                {prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                                                    <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                                                }
                                            </PaginationItem>
                                            <PaginationItem>
                                                {prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                                                    <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                                                }
                                            </PaginationItem>
                                            {
                                                pageNumbers.map((number, i) =>
                                                    <Pagination key={i}>
                                                        <PaginationItem active={pageNumbers[currentPage - 1] === (number) ? true : false} >
                                                            <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                                                                {number}
                                                            </PaginationLink>
                                                        </PaginationItem>
                                                    </Pagination>
                                                )}

                                            <PaginationItem>
                                                {
                                                    currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
                                                        <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
                                                }
                                            </PaginationItem>

                                            <PaginationItem>
                                                {
                                                    currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
                                                        <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
                                                }
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>


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