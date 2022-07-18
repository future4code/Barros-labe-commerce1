import React from "react";
import {Carrinho} from "../style"

const Cart = (props) => {

    return (
    <Carrinho>
        <table>
            <tr>
                <td>
                    {props.quantidade}x
                </td>
                <td>
                    {props.nomeProduto}
                </td>
                <td>
                    R${props.price},00
                </td>
                <td>
                    <button onClick={props.onClick}>Remover</button>
                </td>
            </tr>
        </table>

             <table>
             <tr>
                <td>Valor total:{props.valorTotal}</td>
            </tr>
            </table>
    </Carrinho>

    )
}

export default Cart;