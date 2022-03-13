import React from "react"
import Helmet from "../assets/images/main_site_files/light_circle_item_helmet.png";
import Gloves from "../assets/images/main_site_files/light_circle_item_gloves.png";
import Boots from "../assets/images/main_site_files/light_circle_item_boots.png";
import BodySuit from "../assets/images/main_site_files/light_circle_item_bodysuit.png";
import "./Products.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import {NavLink} from "react-bootstrap";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            <h3>Section is under construction</h3>
        </div>
    );
}

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (<div className="container-fluid products_page">
                <div>
                    <BorderUp/>
                </div>
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                </div>
                <div className="row products ">
                    <div className="products_shadow">
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}
                            <div className={"products_image col-sm-3"}>
                                <img src={Helmet} alt={""}/>
                            </div>
                            <div className="col-sm-12 text-center text_products ">
                                <h2>Helmet</h2>
                            </div>
                        </NavLink>
                    </div>
                    <div className=" products_shadow">
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}
                            <div className={"products_image col-sm-3"}>
                                <img src={Gloves} alt={""}/>
                            </div>
                            <div className="col-sm-12 text-center text_products ">
                                <h2>Gloves</h2>
                            </div>
                        </NavLink>
                    </div>
                    <div className=" products_shadow">
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}
                            <div className={"products_image col-sm-3"}>
                                <img src={Boots} alt={""}/>
                            </div>
                            <div className="col-sm-12 text-center text_products">
                                <h2>Boots</h2>
                            </div>
                        </NavLink>
                    </div>
                    <div className="products_shadow">
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}
                            <div className={"products_image col-sm-3 "}>
                                <img src={BodySuit} alt={""}/>
                            </div>
                            <div className="col-sm-12 text-center text_products">
                                <h2>Bodysuit</h2>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <Border/>
                </div>
            </div>
        );
    }
}