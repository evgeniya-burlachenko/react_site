import React, {Component} from "react"
import BackgroundAbout from "../assets/images/main_site_files/bg2.jpg"
import "./About.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from "wowjs";

export default class AboutSP extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
    return <div className="container-fluid about_page" id="about">
        <div className="about_overlay"/>
        <div>
            <BorderUp/>
        </div>
        <div className="about  ">
            <div className="row">
                <div className="col-sm-6 mt-5 about_left text-right text-white">
                    <h1 className="wow fadeInLeft"> QUIÉNES <br/>SOMOS</h1>
                </div>
                <div className="col-sm-6 about_right mt-5 text-justify">
                    <h4 className="wow fadeInRight">HelmDA Systems es el niño intelectual que nació de una colisión intraplanetaria
                        perfectamente sincronizada de dos mentes,
                        almas y espíritus afines que entendieron su propósito hacia su línea de tiempo social actual en el flujo intergaláctico,
                        por tanto, adquiriendo una conciencia adicional de su entorno y consecuentemente produciendo el fruto esencial necesario para la
                        supervivencia de la especie.<br/><br/>
                        En otras palabras, los fundadores de la empresa creen que su alianza no surgió por casualidad y,
                        ahora que han encontrado al socio perfecto para ejecutar y hacer realidad todos sus proyectos e
                        ideas, se han dedicado plenamente, al grado de abandono, al diseño y creación, probando y perfeccionando
                        soluciones tecnológicas que ayudarán a sus compañeros terrestres a sobrevivir las
                        situaciones socio-geo-económicas-ambientales-políticas extremadamente desafiantes que imperan en el actual anno domini 2020,
                        por aproximación al calendario juliano.
                    </h4>
                </div>
            </div>
        </div>
        <div id={"products"}>
            <Border/>
        </div>

    </div>
}}