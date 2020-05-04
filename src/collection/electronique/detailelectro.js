import React, { Component } from 'react';
import '../../product.css';


import Header from "../../Home_Page/site-visiteur/header"
import Footer from "../../Home_Page/site-visiteur/footer"

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                //les attribut de base de donnée
                price: "",
                name: "",
                image: "",
                reference: "",
                color: "",
                description: "",
            },
        };
    }
    componentDidMount() {
        this.getOne()
    }
    getOne() {
        fetch("http://localhost:3020/electronic/getByID/" + localStorage.getItem("idc"), { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log("GETONE", data);
                this.setState({ product: data })
            })
    }
    render() {
        return (
            <div>
                <Header />

                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">

                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[0]}`} /></div>
                                        <div class="tab-pane" id="pic-2"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[1]}`} /></div>
                                        <div class="tab-pane" id="pic-3"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[2]}`} /></div>
                                        <div class="tab-pane" id="pic-4"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[3]}`} /></div>
                                        <div class="tab-pane" id="pic-5"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[4]}`} /></div>
                                    </div>
                                    <ul class="preview-thumbnail nav nav-tabs">
                                        <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[0]}`} /></a></li>
                                        <li><a data-target="#pic-2" data-toggle="tab"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[1]}`} /></a></li>
                                        <li><a data-target="#pic-3" data-toggle="tab"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[2]}`} /></a></li>
                                        <li><a data-target="#pic-4" data-toggle="tab"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[3]}`} /></a></li>
                                        <li><a data-target="#pic-5" data-toggle="tab"><img src={`http://localhost:3020/electronic/getImage/${this.state.product.image[4]}`} /></a></li>
                                    </ul>
                                </div>
                                <div class="details col-md-6">
                                    <h2 class="product-title">{this.state.product.name}</h2>
                                    <p class="vote"><strong>ref :</strong>{this.state.product.reference} </p>
                                    <h4 class="price">current price: <span>{this.state.product.price}dt</span></h4>

                                    <h5 class="price">Description: </h5>
                                    <p class="product-description">{this.state.product.description}</p>


                                    <h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
                                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                                        <span class="size" data-toggle="tooltip" title="large">l</span>
                                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                                    </h5>
                                    <h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                        <span class="color green"></span>
                                        <span class="color blue"></span>
                                    </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

export default Product;