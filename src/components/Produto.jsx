import React from "react";
import { GlobalContext } from "../components/GlobalContext";

const Produto = ({ id, foto, nome, descricao, preco, abv, ibu, ebc, ph }) => {
  const [contador, setContador] = React.useState(1);
  const global = React.useContext(GlobalContext);
  const [produtoRepetido, setProdutoRepetido] = React.useState(false);

  function addCarrinho() {
    const checkArray = global.arrayCarrinho.some((item) => item.id === id);

    if (!checkArray) {
      global.setValorTotal((valorTotal) => valorTotal + preco * contador);
      global.setArrayCarrinho(() => [
        ...global.arrayCarrinho,
        {
          id,
          foto,
          nome,
          preco,
          contador,
        },
      ]);
    } else {
      setProdutoRepetido(true);
      setTimeout(() => {
        setProdutoRepetido(false);
      }, 1000);
    }
  }

  return (
    <div className="w-[350px] grid grid-cols-2 sm:w-[240px] sm:block bg-white drop-shadow-[0_3px_2px_rgba(0,0,0,.2)] hover:drop-shadow-[0_6px_5px_rgba(0,0,0,.3)]">
      <div className="h-[200px] py-3 row-start-1 row-end-4">
        <img className="h-[100%] mx-auto" src={foto} alt="" />
      </div>
      <div className="grid grid-cols-2 pt-2 sm:flex sm:gap-2 justify-center">
        <span className="text-xs flex gap-1 items-center">
          ABV:{" "}
          <span className="text-base text-colorPrimary font-bold">{abv}</span>
        </span>
        <span className="text-xs flex gap-1 items-center">
          IBU:{" "}
          <span className="text-base text-colorPrimary font-bold">{ibu}</span>
        </span>
        <span className="text-xs flex gap-1 items-center">
          EBC:{" "}
          <span className="text-base text-colorPrimary font-bold">{ebc}</span>
        </span>
        <span className="text-xs flex gap-1 items-center">
          PH:{" "}
          <span className="text-base text-colorPrimary font-bold">{ph}</span>
        </span>
      </div>
      <div className="col-start-2 pr-2 h-[140px] flex flex-col sm:px-3 justify-between sm:border-t-2 border-bgColorSecondary">
        <div>
          <h2 className="font-bold text-center p-2">{nome.slice(0, 25)}</h2>
          <p className="text-sm">{descricao}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs">
            R${" "}
            <span className="text-xl sm:text-2xl font-bold">
              {(preco * contador).toFixed(2).replace(".", ",")}
            </span>
          </p>
          <div className="flex">
            <button
              className="w-6 bg-colorPrimary font-bold rounded-md hover:bg-colorHover transition-colors"
              onClick={() => {
                contador > 1 && setContador(contador - 1);
              }}
            >
              -
            </button>
            <span className="w-5 text-center">{contador}</span>
            <button
              className="w-6 bg-colorPrimary font-bold rounded-md hover:bg-colorHover transition-colors"
              onClick={() => setContador(contador + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="relative col-span-full">
        <span
          className={`opacity-0 absolute top-10 bg-red-400 w-full text-center ${
            produtoRepetido && "opacity-100"
          }`}
        >
          Produto já está no carrinho
        </span>
        <button
          className="w-full text-sm font-bold uppercase mt-2 py-2 bg-colorPrimary hover:bg-colorHover"
          onClick={addCarrinho}
        >
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
};

export default Produto;
