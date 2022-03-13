import React from "react"
import "./Carousel.css";
import {NavLink} from "react-bootstrap";

export default function CarouselItem(props){
    return  <div className={"item"}>
        <NavLink to={props.link}>
        <div className={"products_image text-center"}>
            <img src={props.img} alt={props.alt}/>
        </div>
        <div className="text_products text-center">
           <h2>{props.h2}</h2>
        </div>
        </NavLink>
    </div>
}