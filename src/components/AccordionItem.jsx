import React from "react"
import "./AccordionItem.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import Arrow from "../assets/images/mobile_version_files/narrow3.png";

export default function AccordionItem(props) {
    return <div className="card">
        <div className="card-header" id={props.id}>
            <BorderUp/>
                <h1 className="mb-0 text-center">
                    <button className="btn btn-link" data-toggle="collapse" data-target={props.target}
                            aria-expanded="true" aria-controls={props.controls} >
                        <h1>{props.h1}</h1>
                    </button>
                </h1>
            <Border/>
        </div>

        <div id={props.id2} className="collapse" aria-labelledby={props.labelledby} data-parent="#accordion">
            <div className="card-body text-justify" style={{backgroundColor: `#000`}}>
                <h2>{props.h21}</h2>
                <h4>{props.h41}</h4><br/>
                <h2>{props.h22}</h2>
                <h4>{props.h42}</h4><br/>
                <div className={"collapse_arrow text-center"}>
                    <button className="btn btn-link" data-toggle="collapse" data-target={props.target}
                            aria-expanded="true" aria-controls="collapseFour" >
                        <img src={Arrow}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}