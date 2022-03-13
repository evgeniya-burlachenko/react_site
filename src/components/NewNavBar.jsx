import React from "react"
import NavState from "../context/navState";
import MainMenu from "./MainMenu";

export default function NewNavBar(){
    return <NavState>
        <MainMenu />
    </NavState>
}