import React from "react"
import Helmet from "../assets/images/main_site_files/light_circle_item_helmet.png";
import Gloves from "../assets/images/main_site_files/light_circle_item_gloves.png";
import Boots from "../assets/images/main_site_files/light_circle_item_boots.png";
import BodySuit from "../assets/images/main_site_files/light_circle_item_bodysuit.png";
import NarrowNext from "../assets/images/mobile_version_files/narrow.png"
import NarrowPrev from "../assets/images/mobile_version_files/narrow2.png"
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import {NavLink} from "react-bootstrap";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning_mob">
            <h6>Section is under construction</h6>
        </div>
    );
}

export default class Slider extends React.Component {
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
        return <div className="site-section slider" id="slider">
            <div>
                <WarningBanner warn={this.state.showWarning} />
            </div>
            <Carousel
                nextIcon={<span aria-hidden="true"><img className="next" src={NarrowNext}/></span>}
                prevIcon={<span aria-hidden="true"><img className="prev" src={NarrowPrev}/></span>}
                indicators={false}
                slide={false}
            >
                <Carousel.Item >
                    <div className={"item"}>
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}>
                            <div className={"products_image text-center"}>
                                <img src={Helmet} alt="Helmet"/>
                            </div>
                            <div className="text_products text-center">
                                <h2>Helmet</h2>
                            </div>
                        </NavLink>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"item"}>
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}>
                            <div className={"products_image text-center"}>
                                <img src={Gloves} alt="Gloves"/>
                            </div>
                            <div className="text_products text-center">
                                <h2>Gloves</h2>
                            </div>
                        </NavLink>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"item"}>
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}>
                            <div className={"products_image text-center"}>
                                <img src={Boots} alt="Boots"/>
                            </div>
                            <div className="text_products text-center">
                                <h2>Boots</h2>
                            </div>
                        </NavLink>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"item"}>
                        <NavLink to="#"
                                 onClick={this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show'}>
                            <div className={"products_image text-center"}>
                                <img src={BodySuit} alt="BodySuit"/>
                            </div>
                            <div className="text_products text-center">
                                <h2>BodySuit</h2>
                            </div>
                        </NavLink>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    }}