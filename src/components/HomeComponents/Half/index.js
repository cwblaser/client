import React from "react";
import "./style.css";

import txts from '../../../constants/translation/pt_br/home_components/half.json'

export default function Half(props) {

    function conteudoDosCampos () {
        var strong;
        var p;
        //Imagem a esquerda text a direita:
        if ( props.side === "left") {
            strong = txts.left.title;
            p = txts.left.content;
        } else if ( props.side === "right") {
            strong = txts.right.title;
            p = txts.right.content;
        }

        return [strong, p];
    }

    function TextArea () {
        let [ strong, p ]  = conteudoDosCampos()

        return (
            <div className={`half_text_area half_text_area--${props.side}`}>
                <strong> {strong} </strong>
                <div><p> {p} </p></div>
                <span></span>
            </div>
        );
    }

    return (
        <div id="Half">
            <div className='half_wrapper'>
                <div className={props.side === "left" ? 
                    `half_image half_image--${props.side}` : 
                    "half_content"}
                >
                    { props.side === "right" && (<TextArea />)}
                    
                </div>
                <div className={props.side === "left" ?
                    "half_content" : 
                    `half_image half_image--${props.side}`}
                >
                    { props.side === "left" && (<TextArea />)}

                </div>
            </div>
        </div>
    );
}