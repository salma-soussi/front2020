import React, { Component } from 'react';

class Item extends Component {
    handleClickEdit(e, id) {
        e.preventDefault();
        console.log("id", id);
        localStorage.setItem("idc", id);
        window.location.href = "/detailInform"
    }
    render() {
        const { image, price, name, _id } = this.props.item
        return (
            <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                    <div class="pi-pic">
                        <img src={`http://localhost:3020/product/getImage/${image[0]}`} />
                        <div class="sale pp-sale">Sale</div>
                        <div class="icon">
                            <i class="icon_heart_alt"></i>
                        </div>
                        <ul>
                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                            <li class="quick-view" onClick={evt => this.handleClickEdit(evt, _id)}><a>+ Quick View</a></li>
                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div class="pi-text">
                        <div class="catagory-name">Towel</div>
                        <a href="#">
                            <h5>{name}</h5>
                        </a>
                        <div class="product-price">
                            $14.00
                                        <span>${price}</span>
                        </div>
                    </div>
                </div>
            </div>




        );
    }
}

export default Item;