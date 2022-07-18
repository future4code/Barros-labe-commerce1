import Card from "./Components/Card";
import { DivPai } from "./style";
import { mockDeDados } from "./mockDeDados";
import { useState } from "react";
import Filtro from "./Components/filtro";
import Cart from "./Components/CartList";



function App() {
  //Código Carol
  const [busca, setBusca] = useState(mockDeDados);
  
  console.log(busca);
  
  const [inputUsuario, setInputUsuario] = useState("");

  const [minValue, setMinValue] = useState("")

  const [maxValue, setMaxValue] = useState("")
  
  const produtoFiltrado = busca.filter((item, index) => {
    if (maxValue === "" && minValue === "") {
      return item.name.includes(inputUsuario);
    } else {
      return item.name.includes(inputUsuario) && item.price >= minValue && item.price <= maxValue;
    }
  });
  
    const handleInputName = (e) => {
      return setInputUsuario(e.target.value)
    }

    const handleInputMin = (e) => {
      return setMinValue(e.target.value)
    }

    const handleInputMax = (e) => {
      return setMaxValue(e.target.value)
    }

  // meu código
  const [dadosProduto, setDadosProduto] = useState(mockDeDados)
  console.log(dadosProduto);

  // const enviarProduto = () => {
  //     e.preventDefault();
  //     const novoproduto = [
  //       ...busca,
  //       { nome: inputName, message: inputMessage },
  //     ];
  //     setMensagens(novaMensagem);
  // }
  
  function addCardCallback(element, index) {
    return <Card ImgProduct={element.photo} name={element.name} price={element.price} /*onClick={enviarProduto}*/ />
  }
  
  const addCard = produtoFiltrado.map(addCardCallback)
  
  
  return (
    <DivPai>
      <Filtro label="Pesquisar por nome" type="text" inputValue={inputUsuario} captureInput={handleInputName}></Filtro>
      <Filtro label="Pesquisar por valor minimo" type="number" inputValue={minValue} captureInput={handleInputMin}></Filtro>
      <Filtro label="Pesquisar por valor máximo" type="number" inputValue={maxValue} captureInput={handleInputMax}></Filtro>
      {addCard}
      <Cart></Cart>
    </DivPai>
  );
}

export default App;
