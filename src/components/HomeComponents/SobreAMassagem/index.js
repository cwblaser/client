import React, {useState} from "react";
import "./style.css";

import txts from '../../../constants/translation/pt_br/home_components/sobre_a_massagem.json'

export default function SobreAMassagem () {

    const [ widthSize, setWidthSize ] = useState( window.outerWidth > 960 ? 1 : 0 );
    window.addEventListener('resize', () => {
        setWidthSize( document.body.clientWidth > 960 ? 1 : 0);
    });

    return (
        <div id="SobreAMassagem">
                <div className='gradient gradient--left'>
                    {widthSize}
                    <div className='gradient_absolut_left'></div>
                </div>
                <div className='gradient gradient--center'>
                    <div className="sobre_titulo"><h1>{txts.title}</h1></div>
                    <div className="sobre_texto">
                        {txts.description.map((paragraph, idx) => (
                            <p 
                                key={idx} 
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='gradient gradient--right'>
                {widthSize}
                    <div className='gradient_absolut_right'></div>
                </div>
        </div>
    );
}