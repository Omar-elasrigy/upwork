import React from "react";
import "./landing.css"
import NavBar from "../components/navbar";
import Header from "../components/header/header";
import Tab from "../components/tabs/tab";
import Houses from "../components/houses/houses";

export default function Landing()
{
    return (
        <div className="container">
            <NavBar/>
            <Header/>
            <Tab/>
            <Houses/>
            
        </div>
    );
};
