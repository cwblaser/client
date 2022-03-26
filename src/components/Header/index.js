import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { IoIosStar, IoMdClose } from 'react-icons/io';
import { BsList } from 'react-icons/bs';

//import { home as txts } from '../../constants/txts'
import txts from '../../constants/translation/pt_br/header.json'

import "./style.css";

export default function Header (props) {

    const [ MNavB, setMNavB ] = useState(1);

    const history = useHistory()

      function handleHNavB () {
          let nav = document.getElementById('mobile_nav');
          setMNavB( MNavB ? 0 : 1 );

          //nav.style.display = MNavB ? 'flex' : 'none';
          nav.style.display = MNavB ? 'flex' : 'none';
      }

    return (
        <header id="Header" className='sticky'>
            <div id='header_at_center'>
                <div className='header_mid'>
                <div className='put_divs_on_right'>
                    <div className='mid mid--logotipo'>
                        <div className='logotipo_column_left'>
                            <span id='logo'><IoIosStar /></span>
                        </div>
                        <div className='logotipo_column_right'>
                            <h1>{txts.titulo}</h1>
                            <h3 id='h3'>{txts.subtitulo.toUpperCase()}</h3>
                        </div>
                    </div>
                </div>
                    <div className='put_divs_on_left'>
                        <div id='nav' className='nav_fix'>
                            <ul>
                                <li><a href="/">{txts.nav[0].toUpperCase()}</a></li>
                                <li><a href="/Sobre">{txts.nav[1].toUpperCase()}</a></li>
                                <li><a href="/Massagem">{txts.nav[2].toUpperCase()}</a></li>
                                <li><a href="/Estetica">{txts.nav[4].toUpperCase()}</a></li>
                                <li><a href="/Contato">{txts.nav[5].toUpperCase()}</a></li>
                            </ul>
                        </div>
                        {/*
                        <div id='searchButton' className='s_top'>
                            <span><HiSearch /></span>
                        </div>
                        */}
                        {/* Mobile: */}
                        <div id='mobile_nav_button'><button onClick={handleHNavB}><span>{ MNavB ? <BsList /> : <IoMdClose />}</span></button></div>            
                        
                    </div>
                </div>
            </div>

            {/* Mobile: */}
            <div id='mobile_nav'>
                <ul>
                    <li onClick={() => history.push('/')}>HOME</li>
                    <li onClick={() => history.push('/Sobre')}>SOBRE</li>
                    <li onClick={() => history.push('/Massagem')}>MASSAGEM</li>
                    <li onClick={() => history.push('/Estetica')}>ESTÉTICA</li>
                    <li onClick={() => history.push('/Contato')}>CONTATO</li>
                </ul>
            </div>
        </header>
    );
}