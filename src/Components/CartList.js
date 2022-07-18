import React from "react";


const Cart = (props) => {

    return (<>
        <table>
            <tr>
                <th>
                    Carrinho 
                </th>
            </tr>
            <tr>
                <td>
                    {props.quantidade}
                </td>
                <td>
                    {props.nomeProduto}
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
       </>
    )
}

export default Cart