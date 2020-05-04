import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Item from "./item"
import "../../Home_Page/site-visiteur/style-visiteur.css"
import Header from "../../Home_Page/site-visiteur/header"
import Footer from "../../Home_Page/site-visiteur/footer"
import list from "./list"

let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;

class Electronique extends Component {
    constructor(props) {
        super(props);
        this.state = { electronique:[],
            currentPage: 1,
            todosPerPage: 9 }
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
          currentPage:last
        });
      }
      handleFirstClick(event) {
    
        event.preventDefault();
    
        this.setState({
          currentPage:1
        });
      }
         
      componentDidMount() {
        this.getAll();
      }
      getAll() {
        fetch("http://localhost:3020/electronic/list", {method: "GET"})
          .then(response => response.json())
          .then(data => {
            console.log("electronique", data);
            this.setState({electronique: data})
          })
      }
    render() {
        let {electronique, currentPage, todosPerPage} = this.state;
         // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = electronique.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(electronique.length / todosPerPage);

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
                                    <a href="#">Shop</a>
                                    <span>Electronic</span>
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
                                    <h4 class="fw-title">Categories</h4>
                                    <ul class="filter-catagories">
                                        <li><a href="#">Small appliance</a></li>
                                        <li><a href="#">Large appliance</a></li>

                                    </ul>
                                </div>
                                <div class="filter-widget">
                                    <h4 class="fw-title">Brand</h4>
                                    <div class="fw-brand-check">
                                        <div class="bc-item">
                                            <label for="bc-calvin">
                                                Samsung
                                    <input type="checkbox" id="bc-calvin" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="bc-item">
                                            <label for="bc-diesel">
                                                LG
                                    <input type="checkbox" id="bc-diesel" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="bc-item">
                                            <label for="bc-polo">
                                                Whirlpool
                                    <input type="checkbox" id="bc-polo" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="bc-item">
                                            <label for="bc-tommy">
                                                Moulinex
                                    <input type="checkbox" id="bc-tommy" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
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
                                            data-min="0" data-max="1000">
                                            <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                    </div>
                                    <a href="#" class="filter-btn">Filter</a>
                                </div>
                                <div class="filter-widget">
                                    <h4 class="fw-title">Tags</h4>
                                    <div class="fw-tags">
                                        <a href="#">Blenders</a>
                                        <a href="#">Microwaves</a>
                                        <a href="#">Refrigerators</a>
                                        <a href="#">Mixers</a>
                                        <a href="#">Toasters</a>
                                        <a href="#">Dishwashers</a>
                                        <a href="#">Freezers</a>
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
                                </div>
                                <nav>

                                <Pagination className="d-flex">
                            
                                  <PaginationItem>
                                    { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                                      <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                                    }
                                  </PaginationItem>
                                  <PaginationItem>
                                    { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                                      <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                                    }
                                  </PaginationItem>
                                  {
                                    pageNumbers.map((number,i) =>
                                      <Pagination key= {i}>
                                        <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
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
                </section>

                <Footer />
            </div>
        );
    }
}

export default Electronique;
