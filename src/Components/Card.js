import React from "react";
import { AddButton, CardContainer, ProductImage } from "../style";

const Card = (props) => {

    return (
        <CardContainer>
            <div>
                <ProductImage src={props.ImgProduct} alt="Imagem do produto"/>
                <table>
                    <tr>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>{props.price}</td>
                    </tr>
                </table>
                <AddButton onClick={props.onClick}>Adicionar produto</AddButton>
            </div>
        </CardContainer>

    )
}

export default Card