import React, { Component } from 'react';
import Header from "./header"
import Footer from "./footer"
import "./style-visiteur.css"
import {Col,Form,FormGroup,Input,Label,} from 'reactstrap';
import axios from 'axios'
class Contact extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,

            TO: '',
            Sub: '',
            Text: '',
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }
    handelSubmit() {

        axios.post("http://localhost:3020/email/send", {

            to: this.state.TO,
            subject: this.state.Sub,
            text: this.state.Text,
        })
            .then(res => {
                console.log(res);
            }
            )
    }



    render() {
        return (
            <div>
                <Header />

                <div class="breacrumb-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb-text">
                                    <a href="/"><i class="fa fa-home"></i> Home</a>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="map spad ">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-1 ">  </div>
                            <div class="col-lg-8 offset-lg-1 ">
                                <div class="contact-form">
                                    <div class="leave-comment">
                                        <h4 style={{ "text-align": "center" }}>Leave A Comment</h4>
                                        <br />
                                        <p>Our staff will call back later and answer your questions.</p>
                                        <Form action="" method="post" className="form-horizontal">
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="hf-email">To</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input type="email" id="hf-email" name="hf-email"
                                                        placeholder="" autoComplete="email"
                                                        value={this.state.TO}
                                                        onChange={evt => this.setState({ TO: evt.target.value })} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="hf-password">Subject</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input type="texte" id="hf-password" name="hf-password"
                                                        placeholder="" autoComplete="current-password"
                                                        value={this.state.Sub}
                                                        onChange={evt => this.setState({ Sub: evt.target.value })} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="textarea-input">Text</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                                        placeholder="Content..."
                                                        value={this.state.Text}
                                                        onChange={evt => this.setState({ Text: evt.target.value })} />
                                                </Col>
                                            </FormGroup>
                                            <br />
                                            <FormGroup row>
                                                <Col md="5">

                                                </Col>
                                                <Col xs="12" md="6">
                                                    <button type="submit" onClick={this.handleSendClick} class="site-btn">Send message</button>
                                                </Col>
                                            </FormGroup>

                                        </Form>
                                        <br />
                                    </div>
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

export default Contact;