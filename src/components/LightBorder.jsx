import LightBorder from "../assets/images/main_site_files/light_border_new.png";
import "./LightBorder.css"

export default function Border() {
    return <div className="col-sm-12">
        <img className={""} style={{width: "100%"}} src={LightBorder} alt={""}/>
    </div>
}