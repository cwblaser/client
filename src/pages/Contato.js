import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";

import './styles.css'
import ContatoContent from "../components/Content--Contato";

export default function Contato () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container" >
            <Header />
            <div style={{width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>

            <ContatoContent />
            <Footer />
        </div>
    );
}