import Card from "./Components/Card";
import { DivPai, Form  } from "./style";
import { mockDeDados } from "./mockDeDados";
import { useState } from "react";
import Filtro from "./Components/filtro";
import Cart from "./Components/CartList";

function App() {
  //Estado para armazenar o mock de dados
  const [busca, setBusca] = useState(mockDeDados);

  // Estado para armazenar o filtro de nome
  const [inputUsuario, setInputUsuario] = useState("");
  
  // Estado para armazenar o filtro de valor mínimo
  const [minValue, setMinValue] = useState("");
   
  // Estado para armazenar o filtro de valor máximo
  const [maxValue, setMaxValue] = useState("");

  // Estado para armazenar os produtos do carrinho
  const [cartProduct, setCartProduct] = useState({});

  //função para retornar os produtos filtrados
  const produtoFiltrado = busca.filter((item, index) => {
    if (maxValue === "" && minValue === "") {
      return item.name.includes(inputUsuario);
    } else {
      return (
        item.name.includes(inputUsuario) &&
        item.price >= minValue &&
        item.price <= maxValue
      );
    }

  });

  // Capturar o valor do input do nome do produto
  const handleInputName = (e) => {
    return setInputUsuario(e.target.value);
  };
   
  // Capturar o valor do input valor mínimo
  const handleInputMin = (e) => {
    return setMinValue(e.target.value);
  };

  // Capturar o valor do input valor máximo
  const handleInputMax = (e) => {
    return setMaxValue(e.target.value);
  };

  // função callback para retornar os cards filtrados e adicionar os produtos clicados ao carrinho. OBS: Não funciona como o esperado.
  function addCardCallback(element, index) {
    const enviarProduto = (e) => {
      e.preventDefault();
      const novoproduto = [...produtoFiltrado];
      // Designar o valor do indice clicado ao estado do carrinho.
      setCartProduct(novoproduto[index]);
      console.log(cartProduct);
    };
    return (
      <Card
        key={index}
        ImgProduct={element.photo}
        name={element.name}
        price={element.price}
        onClick={enviarProduto}
      />
    );
  }

  // Função callback para renderizar os produtos no carrinho
  function addCartCallback(element, index, array) {
    return (
      <Cart quantidade={+1} nomeProduto={element.name} price={element.price} />
    );
  }

  
  const addCard = produtoFiltrado.map(addCardCallback);

  const addCart = produtoFiltrado.map(addCartCallback);

  return (
    <DivPai>
      <h1> CONFLITO</h1>

      <Form>
        <Filtro label="Pesquisar por nome" type="text" inputValue={inputUsuario} captureInput={handleInputName}></Filtro>
        <Filtro label="Pesquisar por valor minimo" type="number" inputValue={minValue} captureInput={handleInputMin}></Filtro>
        <Filtro label="Pesquisar por valor máximo" type="number" inputValue={maxValue} captureInput={handleInputMax}></Filtro>
      </Form>
      <section>
        {addCard}
      </section>

      <div>
        <Cart></Cart>
      </div>

    </DivPai>
  );
}

export default App;
