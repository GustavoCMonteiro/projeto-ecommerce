import React from "react";
import { GlobalContext } from "../components/GlobalContext";
import ProdutoCarrinho from "../components/ProdutoCarrinho";

const Carrinho = () => {
  const global = React.useContext(GlobalContext);
  const [arrayCarrinho, setArrayCarrinho] = React.useState([]);
  const [pagamento, setPagamento] = React.useState("pix");
  const [frete, setFrete] = React.useState(0);

  React.useEffect(() => {
    setArrayCarrinho(global.arrayCarrinho);
  }, [global.arrayCarrinho]);

  function criaCarrinho() {
    const produtos = arrayCarrinho.map((produto, index) => (
      <ProdutoCarrinho
        index={index}
        foto={produto.foto}
        key={produto.id}
        id={produto.id}
        nome={produto.nome}
        preco={produto.preco}
        quantidade={produto.contador}
      />
    ));
    return produtos;
  }

  function calculaFrete() {
    const frete = Math.floor(Math.random() * (39.9 - 9.9)) + 9.9;
    setFrete(frete);
  }

  return (
    <section className="max-w-[1200px] md:grid md:grid-cols-[3fr_1fr]  gap-4 mx-auto mt-32 mb-14 px-4 lg:px-0">
      <div>{global.arrayCarrinho && criaCarrinho()}</div>
      <div className="md:max-w-[300px] lg:max-w-[500px] max-h-[570px] flex flex-col gap-2 py-4 px-3 mt-6 md:mt-0 bg-white drop-shadow-[0_3px_2px_rgba(0,0,0,.2)]">
        <h2 className="text-center text-2xl mb-3 font-bold">
          Resumo do Pedido
        </h2>
        <p className="font-bold">Calcule o frete</p>
        <div className="flex gap-2 pb-3 border-b-2">
          <input
            className="bg-neutral-200 w-full font-xl py-1 px-2"
            type="text"
            placeholder="00000-000"
          />
          <button
            onClick={calculaFrete}
            className="bg-colorPrimary rounded-lg uppercase font-bold px-3 py-2 hover:bg-colorHover"
          >
            Calcular
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Subtotal</span>
          <span className="text-black text-2xl">
            R$ {global.valorTotal.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Frete</span>
          <span className="text-black text-2xl">
            R$ {frete.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Total</span>
          <span className="text-black text-2xl">
            R$ {(global.valorTotal + frete).toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="text-right text-sm">
          (Em até 6x sem juros de R${" "}
          {((global.valorTotal + frete) / 6).toFixed(2).replace(".", ",")})
        </div>
        <div className="bg-colorSecundary bg-opacity-40 rounded-md py-2 px-4 mb-2">
          <span className="block text-xl font-bold">Desconto com PIX</span>
          <span className="block text-3xl fond-bold text-right">
            R${" "}
            {(((global.valorTotal + frete) / 10) * 9)
              .toFixed(2)
              .replace(".", ",")}
          </span>
          <span className="block text-right">
            (Economize R${" "}
            {((global.valorTotal + frete) / 10).toFixed(2).replace(".", ",")})
          </span>
        </div>
        <div>
          <h2 className="text-center text-xl font-bold mb-2">
            Metodo de pagamento
          </h2>
          <div className="flex justify-evenly pb-2">
            <button
              onClick={() => setPagamento("pix")}
              className={`w-20 text-center font-bold rounded-md py-1 hover:bg-colorHover transition-colors ${
                pagamento === "pix" ? "bg-colorPrimary" : "bg-neutral-300"
              }`}
            >
              PIX
            </button>
            <button
              onClick={() => setPagamento("credito")}
              className={`w-20 text-center font-bold rounded-md py-1 hover:bg-colorHover transition-colors ${
                pagamento === "credito" ? "bg-colorPrimary" : "bg-neutral-300"
              }`}
            >
              Crédito
            </button>
            <button
              onClick={() => setPagamento("boleto")}
              className={`w-20 text-center font-bold rounded-md py-1 hover:bg-colorHover transition-colors ${
                pagamento === "boleto" ? "bg-colorPrimary" : "bg-neutral-300"
              }`}
            >
              Boleto
            </button>
          </div>
        </div>
        <button className="bg-colorPrimary rounded-lg uppercase font-bold px-3 py-2 hover:bg-colorHover">
          Finalizar compra
        </button>
      </div>
    </section>
  );
};

export default Carrinho;
