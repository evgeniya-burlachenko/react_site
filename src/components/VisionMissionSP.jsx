import React from "react"
import BackgroundVision from "../assets/images/main_site_files/bg5.jpg"
import "./VisionMission.css"
import Border from "./LightBorder";
import BorderUp from "./LightBorderUp";



export default function VisionMissionSP(){
    return  <section className="container-fluid vision_page"  id={"mission"}>
        <div className="vision_overlay"/>
        <div>
            <BorderUp/>
        </div>
        <div className="vision_mission ">
                <div className={"row"}>
                    <div className={"col-md-6 vision_text text-justify "}>
                            <h4 className="wow fadeInLeft" data-wow-delay="250ms">El mundo cambia drásticamente todos los días, a cada hora. Prevemos las necesidades futuras de la humanidad y tratamos de incluir nuestros productos en los próximos eventos para convertirnos en su proveedor de soluciones selecto. Nuestra ambición es ser los únicos que proporcionen las soluciones más prácticas y tecnológicamente avanzadas para los humanos cotidianos del siglo XXI real y los siglos venideros.
                            </h4>
                    </div>
                <div className={"col-md-6 vision text-white"}>
                    <h1 className="wow fadeInRight" >VISIÓN</h1>
                </div>
                <div className={"col-md-6 mission text-right text-white"}>
                    <h1 className="wow fadeInLeft" data-wow-delay="750ms">MISIÓN</h1>
                </div>
                <div className={"col-md-6 mission_text text-justify"}>
                    <h4 className="wow fadeInRight" data-wow-delay="1000ms">Nos preocupamos por nuestros semejantes y nos preocupamos por la misión diaria de cada individuo. Poner comida en la mesa, ayudar a los niños a aprender e inspirarse, ayudar mejor a los pacientes en los hospitales, salvar a las personas de un incendio o un accidente, viajar cuando otros no pueden, asistir a la escuela en forma física o prácticamente sin importar la pandemia. Todos ustedes son nuestra Misión, estar ahí para ustedes y brindarles las herramientas para ayudarlos a tener éxito.
                    </h4>
                </div>
                </div>
            <div>
                <Border/>
            </div>
        </div>
    </section>
}
