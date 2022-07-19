import styled from 'styled-components'

export const DivPai = styled.div `
    margin: 0;
    display: flex;
    background: linear-gradient(to right, #2f9596, #b2aaaa);
  
   


    section{
        margin: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        
    }
    
    
`

// estilo card
export const CardContainer = styled.div `
    height: 370px;
    width: 250px;
    border: 1px solid black;
    
   
    div {
        height: 70%;
        width: 100%;
    }

    table{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        width: 100%;
        padding: 8px;
    }

`

export const ProductImage = styled.img `
    max-width: 100%;
    min-height: 100%;
`

export const AddButton  = styled.button `
    padding:10px;
    margin-left:60px;


    button:hover{
        padding: 15px;
        color: white;
        background-color: black;
    }
    
`

export const Form = styled.form`
    margin: 0;
    padding: 10px;


`

export const Carrinho=styled.div`
   

    table{
        margin-top: 50px;
    }
`

