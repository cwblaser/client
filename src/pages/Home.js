import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import SobreAMassagem from "../components/HomeComponents/SobreAMassagem"
import HForm from "../components/HomeComponents/HForm"
import Banner from "../components/HomeComponents/Banner"
import Half from "../components/HomeComponents/Half"

import './styles.css';


export default function Home () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <Header isHome={1}/>
            <div style={{width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>
            <Banner /> 
            <SobreAMassagem />
            <Half side='left'/>
            <Half side='right'/>
            <HForm />
            <Footer />
        </div>
    );
}