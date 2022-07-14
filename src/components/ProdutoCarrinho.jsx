import React from "react";
import { GlobalContext } from "./GlobalContext";

const ProdutoCarrinho = ({ index, foto, id, nome, preco, quantidade }) => {
  const [contador, setContador] = React.useState(quantidade);
  const global = React.useContext(GlobalContext);
  console.log(contador);

  function alteraLocalStorage(quantidade) {
    let novaArray = global.arrayCarrinho;
    novaArray[index].contador = quantidade;
    localStorage.setItem("carrinho", JSON.stringify(novaArray));
  }

  function removeUnidade() {
    if (contador > 1) {
      setContador(contador - 1);
      global.setValorTotal((valorTotal) => valorTotal - preco);
      alteraLocalStorage(contador - 1);
    }
  }

  function addUnidade() {
    setContador(contador + 1);
    global.setValorTotal((valorTotal) => valorTotal + preco);
    alteraLocalStorage(contador + 1);
  }

  function removerProduto() {
    global.setValorTotal((valorTotal) => valorTotal - preco * contador);
    global.arrayCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(global.arrayCarrinho));
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-[1fr_2fr_1fr_1fr_1fr] lg:grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-2 justify-items-center sm:justify-items-start items-center py-2 bg-white drop-shadow-[0_3px_2px_rgba(0,0,0,.2)] border-b-2">
      <div className="justify-self-center">
        <img className="h-20" src={foto} alt="" />
      </div>
      <div className="col-start-2 col-end-4 justify-self-start sm:col-auto">
        <h2 className="text-xl font-bold">{nome}</h2>
        <span className="text-xs">ID do produto: {id}</span>
      </div>
      <div className="flex flex-col col-start-2 sm:col-auto">
        <span className="text-[.65rem]">Valor unitário</span>
        <span>
          R${" "}
          <span className="text-2xl">{preco.toFixed(2).replace(".", ",")}</span>
        </span>
      </div>
      <div className="flex flex-col col-start-1 sm:col-auto row-start-2 sm:row-auto">
        <div className="flex">
          <button
            className="w-6 bg-colorPrimary rounded-md hover:bg-colorHover transition-colors"
            onClick={removeUnidade}
          >
            -
          </button>
          <span className="w-5 text-center">{contador}</span>
          <button
            className="w-6 bg-colorPrimary rounded-md hover:bg-colorHover transition-colors"
            onClick={addUnidade}
          >
            +
          </button>
        </div>
        <button onClick={removerProduto}>Remover</button>
      </div>
      <div className="flex flex-col col-start-3 sm:col-auto row-start-2 sm:row-auto">
        <span className="text-[.65rem]">Valor total</span>
        <span>
          R${" "}
          <span className="text-2xl">
            {(preco * contador).toFixed(2).replace(".", ",")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProdutoCarrinho;
