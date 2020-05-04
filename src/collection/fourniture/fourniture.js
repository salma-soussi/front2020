import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Item from "./item"

import "../../Home_Page/site-visiteur/style-visiteur.css"
import Header from "../../Home_Page/site-visiteur/header"
import Footer from "../../Home_Page/site-visiteur/footer"

import list from "./list"
let prev = 0;
let next = 0;
let last = 0;
let first = 0;



class Fourniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fourniture: [],
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
    fetch("http://localhost:3020/furniture/list", { method: "GET" })
      .then(response => response.json())
      .then(data => {
        console.log("fourniture", data);
        this.setState({ fourniture: data })
      })
  }

  render() {
    let { fourniture, currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = fourniture.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(fourniture.length / todosPerPage);

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
                  <a href="#"><i class="fa fa-shop"></i> Shop</a>
                  <span>Furniture</span>
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
                    <li><a href="#">Living room Furniture</a></li>
                    <li><a href="#">Kitchen furniture</a></li>
                    <li><a href="#">Office furniture</a></li>
                    <li><a href="#">Chairs</a></li>
                    <li><a href="#">Tables</a></li>
                    <li><a href="#">Dressers</a></li>

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
                      data-min="20" data-max="90">
                      <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                      <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
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
        </section>

        <Footer />
      </div>
    );
  }
}

export default Fourniture;
