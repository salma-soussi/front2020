import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from "./Home_Page/site-visiteur/home"
import Home1 from "./Home_Page/onePage/logged_out/components/Main"
import Contact from "./Home_Page/site-visiteur/contact"
import Mode from "./collection/mode/mode"
import Eletronique from "./collection/electronique/eletro"
import Sport from "./collection/sport/sport"
import Fourniture from "./collection/fourniture/fourniture"
import Beaute from "./collection/beaute/beaute"
import Informatique from "./collection/informatique/informatique"
import Detailmode from "./collection/mode/detailmode"
import Detailbeauty from "./collection/beaute/beautedetail"
import Detailelectro from "./collection/electronique/detailelectro"
import Detailfourni from "./collection/fourniture/detailfourni"
import DetailInform from "./collection/informatique/detailInform"
import DetailSport from "./collection/sport/detailSport"
import Shop from "./Home_Page/site-visiteur/shop"

import Signup from './Home_Page/Signup'
import Signup2 from './Home_Page/Signup2'
import Login from './Home_Page/Login'
import Login2 from './Home_Page/Login2'

import Stats from './Seller_Dashboard/components/Stats';
import SoldItems from './Seller_Dashboard/components/SoldItems';
import Quotations from './Seller_Dashboard/components/Quotations';
import RequestQuotation from './Seller_Dashboard/components/RequestQuotation';
import Customers from './Seller_Dashboard/components/Customers';
import Profil from './Seller_Dashboard/components/Profil';
import CustomerContact from './Seller_Dashboard/dhasboard parts/CustomerContact';
import Dashboard from './Seller_Dashboard/dhasboard parts/Dashboard_Cards/Dashboard';
import QuotationReqTemplate from './Seller_Dashboard/dhasboard parts/Quotation_Status/QuotationReqTemplate';
import AnsweredQuotationTemplate from './Seller_Dashboard/dhasboard parts/Quotation_Status/AnsweredQuotationTemplate';
import QuotationForm from './Seller_Dashboard/dhasboard parts/Quotation_Status/QuotationForm';
import SoldQuotation from './Seller_Dashboard/dhasboard parts/Quotation_Status/SoldQuotation';

import DashboardBuyer from './Buyer_Dashboard/components/DashboardBuyer';
import AllQuotationSent from './Buyer_Dashboard/components/AllQuotationSent';
import QuotationReceived from './Buyer_Dashboard/Quotations_Status/QuotationReceived';
import AllQuotationReceived from './Buyer_Dashboard/components/AllQuotationReceived';
import QuotationSent from './Buyer_Dashboard/Quotations_Status/QuotationSent';
import AllPurchases from './Buyer_Dashboard/components/AllPurchases';
import QuotationClosed from './Buyer_Dashboard/Quotations_Status/QuotationClosed';
import NewRequest from './Buyer_Dashboard/components/NewRequest';
import ProfilBuyer from './Buyer_Dashboard/components/ProfilBuyer'


class Routes extends Component {
    render() {
        return (
            <div>
                {/******************* Home + Login + Signup PAGES ********************/}
                <Route exact path="/" component={Home1} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/signupasbuyer" component={Signup} />
                <Route exact path="/signupasseller" component={Signup2} />
                <Route exact path="/loginasbuyer" component={Login} />
                <Route exact path="/loginasseller" component={Login2} />

                {/*********************les collections********************** */}

                <Route exact path="/mode" component={Mode} />
                <Route exact path="/eletronique" component={Eletronique} />
                <Route exact path="/sport" component={Sport} />
                <Route exact path="/fourniture" component={Fourniture} />
                <Route exact path="/beaute" component={Beaute} />
                <Route exact path="/informatique" component={Informatique} />

                {/**********details de chaque produit****************** */}

                <Route exact path="/detailmode" component={Detailmode} />
                <Route exact path="/detailbeauty" component={Detailbeauty} />
                <Route exact path="/detailelectro" component={Detailelectro} />
                <Route exact path="/detailfourni" component={Detailfourni} />
                <Route exact path="/detailInform" component={DetailInform} />
                <Route exact path="/detailSport" component={DetailSport} />

                {/******************* SELLER ALL PAGES ********************/}
                <Route exact path="/seller_dashboard/:sellerId" render={(props) => <Dashboard sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/profil/:sellerId" render={(props) =>
                    <Profil sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/o/req-quotations/:sellerId" render={(props) => <RequestQuotation sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/o/quotations/:sellerId" render={(props) => <Quotations sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/o/customers/:sellerId" render={(props) => <Customers sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/o/sold-items/:sellerId" render={(props) => <SoldItems sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/stats/:sellerId" render={(props) => <Stats sellerID={props.match.params.sellerId} />} />
                <Route exact path="/seller_dashboard/req-quotations/:id/:status/:sellerId" render={(props) => props.match.params.status === 'Answered' ?
                    <AnsweredQuotationTemplate sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} /> :
                    (props.match.params.status === 'Waiting' ? <QuotationReqTemplate sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} /> :
                        <SoldQuotation sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} />)}
                />
                {/* <Route exact path="/seller_dashboard/req-quotations/:id/:status/quotation-form" render={(props) => <QuotationForm reqID={props.match.params.id} status={props.match.params.status} />}/> */}
                <Route exact path="/seller_dashboard/req-quotations/:id/:status/quotation-form/:sellerId" render={(props) => <QuotationForm sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} />} />
                <Route exact path="/seller_dashboard/sold-items/:id/:status/:sellerId" render={(props) => <SoldQuotation sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} />} />
                <Route exact path="/seller_dashboard/quotations/:id/:status/:sellerId" render={(props) => <AnsweredQuotationTemplate sellerID={props.match.params.sellerId} reqID={props.match.params.id} status={props.match.params.status} />} />
                <Route exact path="/seller_dashboard/customers/:customerID/:sellerId" render={(props) => <CustomerContact sellerID={props.match.params.sellerId} customerID={props.match.params.customerID} />} />

                {/******************* BUYER ALL PAGES ********************/}
                <Route exact path="/buyer_dashboard/:id" render={(props) => <DashboardBuyer buyerID={props.match.params.id} />} />
                <Route exact path="/buyer_dashboard/profil/:id" render={(props) => <ProfilBuyer buyerID={props.match.params.id} />} />
                <Route exact path="/buyer_dashboard/req-sent/:buyerId" render={(props) => <AllQuotationSent buyerID={props.match.params.buyerId} />} />
                <Route exact path="/buyer_dashboard/req-sent/o/:id/:res/:buyerId" render={(props) => <QuotationSent buyerID={props.match.params.buyerId} reqID={props.match.params.id} numRes={props.match.params.res} />} />
                <Route exact path="/buyer_dashboard/req-received/o/:id/:buyerId" render={(props) => <QuotationReceived buyerID={props.match.params.buyerId} reqID={props.match.params.id} />} />
                <Route exact path="/buyer_dashboard/req-received/s/:x" render={(props) => <AllQuotationReceived buyerID={props.match.params.x} />} />
                <Route exact path="/buyer_dashboard/purchases/s/:buyerId" render={(props) => <AllPurchases buyerID={props.match.params.buyerId} />} />
                <Route exact path="/buyer_dashboard/purchases/o/:id/:buyerId" render={(props) => <QuotationClosed buyerID={props.match.params.buyerId} reqID={props.match.params.id} />} />

                <Route exact path="/buyer_dashboard/new-request/:id" render={(props) => <NewRequest buyerID={props.match.params.id} />} />
            </div>

        )
    }
}
export default Routes;