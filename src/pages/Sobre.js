import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import ScrollTop from "../components/ScrollTop";
import HalfSingle from "../components/HalfSingle";

import sala_img from '../assets/sala.jpg'

import './styles.css';

export default function Sobre () {

    // Corrigir Erro Quando troca de pagina não vai direto para o topo!
    window.scrollTo(0, 0);

    return (
        <div className="container">
            <Header />
            <div style={{width:'120px', height:'64px'}}></div>
            <WhatsApp />
            <ScrollTop/>
            <div className='wrap_all'>
                <div className='center_all'>
                    <div className='column_all column_all--padding'>
                    <p  className='simple_text simple_text--bigger margin_b'>dbacdcadhdk kahdka hdd hadhnvadn </p>
                    <strong className='simple_titulo simple_titulo--3em margin_b'>dbacdcadhdk kahdka hdd hadhnvadna</strong>
                    <p className='simple_text center margin_b'>dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih</p>
                    </div>
                </div>
                <div className='wrap_it wrap_it--background'>
                    <div className='center_all'> 
                        <div className='column_all'>
                            <strong className='simple_titulo center margin_b'>dbacdcadhdk kahdk</strong>
                            <p className='simple_text center margin_b'> dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih</p>
                        </div>

                        <div className='column_all column_all--txtB' style={{borderTop:'1px solid #00000020'}}>
                            <strong id='txtB'> dbacdcadhdk kahdka hdd </strong>
                            <div className='Slideshow' style={{marginBottom:'30px'}}>


                                {/* FIX */}
                                <img src={window.outerWidth > 960 ? sala_img : ''}></img>



                            </div>
                            <p className='simple_text center margin_b'> dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih dbacdcadhdk kahdka hdd hadhnvadna ahdn ahahjau h nh nhdunhacih 

</p>
                        </div>
                    </div>
                </div>
            </div>
            <HalfSingle />
            <Footer />
        </div>
    );
}