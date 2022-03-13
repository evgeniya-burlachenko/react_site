import React, { Component } from "react"
import BackgroundValues from "../assets/images/main_site_files/bg4.jpg";
import "./Values.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";
import WOW from 'wowjs';

export default class ValuesSP extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();  }  render() {
    return <div className="container-fluid values_page" id={"values"} style={{backgroundImage: `url(${BackgroundValues})`}}>
        <div>
            <BorderUp/>
        </div>
        <div className="values ">
                <div className={"row"}>
                    <div className={"col-sm-6 values_left text-right text-white"}>
                        <h1 className="wow fadeInLeft">NUESTRO <br/> VALORES</h1>
                    </div>
                    <div className={"col-sm-6 values_right"}>
                        <div className={"top_div"}><h3 className="wow fadeInRight" data-wow-delay="250ms">Veracidad</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Nuestros clientes son nuestros amigos, los miembros de nuestra familia, nuestras personas favoritas, nuestros vecinos, y les debemos la Verdad en el sentido más amplio.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="500ms">Pasión</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Todo lo que hacemos es con el fin de trascender. Todo lo que hacemos es pensar en Cómo mejorar vidas. Todo lo que hacemos es implacable e intransigente.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="750ms">Curiosity</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Nuestras mentes no se satisfacen fácilmente con respuestas, paradigmas, supuestos hechos, verdades conocidas o conceptos generalmente aceptados superficiales y producidos con ligereza.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1000ms">Determinación</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">Desvelarse es solo parte de nuestra vida diaria. Lograr los objetivos es un placer. Obstáculos y desafíos, ingredientes extras para nuestro éxito.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1250ms">Calidad</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">En un mundo inundado de falsificaciones y aspirantes, nuestros productos están muy por encima de todos ellos. Creamos con los más altos estándares para generar los más altos resultados.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1500ms">Perfeccionismo</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">El tiempo, claramente, es esencial. La perfección, es el verdadero objetivo.</h5>
                        </div>
                        <div><h3 className="wow fadeInRight" data-wow-delay="1750ms">Altruismo</h3>
                            <h5 className="wow fadeInRight" data-wow-delay="2300ms">La caridad está sobrevalorada y es una actitud condescendiente. Cuidar de los necesitados es imprescindible. Tú podrías ser el siguiente.</h5>
                        </div>
                    </div>
                </div>
            </div>
                <Border/>
        </div>
}}