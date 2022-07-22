import Card from "./Components/Card";
import { DivPai, Form } from "./style";
import { mockDeDados } from "./mockDeDados";
import { useState } from "react";
import Filtro from "./Components/filtro";
import Cart from "./Components/CartList";
import Ordenado from "./Components/Ordenado";

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
  const [cartProduct, setCartProduct] = useState([]);

  const [parametro, setParametro] = useState();

  //função para retornar os produtos filtrados
  const produtoFiltrado = busca.filter((item, index) => {
    if (maxValue === "" && minValue === "") {
      return item.name.includes(inputUsuario);
    } else if (maxValue === "") {
      return (
        item.name.includes(inputUsuario) &&
        item.price >= minValue 
      );
    }else if (minValue === "") { 
      return (
        item.name.includes(inputUsuario) &&
        item.price <= maxValue 
      )
    } else {
      return (
        item.name.includes(inputUsuario) &&
        item.price >= minValue &&
        item.price <= maxValue
      )
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
    return (
      <Card
        key={index}
        ImgProduct={element.photo}
        name={element.name}
        price={element.price}
        setCartProduct={setCartProduct}
        carrinhoAtual = {cartProduct}
      />
    );
  }

  // Função callback para renderizar os produtos no carrinho e excluir
  function addCartCallback(element, index, array) {
    return (
      <Cart quantidade={+1} nomeProduto={element.name} price={element.price} 
      removerCarrinho={()=>{apagarCarrinho(element)}} />
    );
  }

  switch (parametro) {
    case "priceAsc":
      produtoFiltrado.sort(function (a, b) {
        return a.price - b.price;
      });
      break;

    case "priceDesc":
      produtoFiltrado.sort(function (a, b) {
        return b.price - a.price;
      });
      break;
      //ainda não funciona em ordem alfabética
    case "alfabetica":
      produtoFiltrado.sort(function(a,b) {
        if (a.nome < b.nome)
           return -1;
        if (a.nome > b.nome)
          return 1;
        return 0;
      });
  }

    //Apagar produto carrinho
  const apagarCarrinho=(indexApagar)=>{
    console.log(indexApagar)
    const arrayAtual=cartProduct.filter((item, )=>{
      if ( item.name !== indexApagar.name){
          return indexApagar
      }
    })
      setCartProduct(arrayAtual)
  }

  const addCard = produtoFiltrado.map(addCardCallback);

  const addCart = cartProduct.map(addCartCallback);

  
  return (
    <DivPai>
      <Form>
        <h3>Filtro</h3>
        <Filtro
          label="Nome"
          type="text"
          inputValue={inputUsuario}
          captureInput={handleInputName}
        ></Filtro>
        <Filtro
          label="Valor minimo"
          type="number"
          inputValue={minValue}
          captureInput={handleInputMin}
        ></Filtro>
        <Filtro
          label="Valor máximo"
          type="number"
          inputValue={maxValue}
          captureInput={handleInputMax}
        ></Filtro>
      </Form>

      <section>{addCard}</section>

      <div>
        <Ordenado
          setParametro={setParametro}
        ></Ordenado>

        <h3>Carrinho</h3>
        {addCart}
      </div>
    </DivPai>
  );
}

export default App;
