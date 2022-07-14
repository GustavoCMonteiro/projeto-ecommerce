import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [arrayCarrinho, setArrayCarrinho] = React.useState([]);
  const [valorTotal, setValorTotal] = React.useState(0);
  const quantidade = arrayCarrinho.length;

  React.useEffect(() => {
    if (arrayCarrinho.length !== 0) {
      localStorage.setItem("carrinho", JSON.stringify(arrayCarrinho));
    }
  }, [arrayCarrinho]);

  React.useEffect(() => {
    if (localStorage.getItem("carrinho") !== null) {
      const data = JSON.parse(localStorage.getItem("carrinho"));
      setArrayCarrinho(data);
    }
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("valor") !== null) {
      const valor = JSON.parse(localStorage.getItem("valor"));
      setValorTotal(valor);
    }
  }, []);

  React.useEffect(() => {
    if (valorTotal > 1) {
      localStorage.setItem("valor", JSON.stringify(valorTotal));
    } else {
      localStorage.removeItem("valor");
    }
  }, [valorTotal]);

  return (
    <GlobalContext.Provider
      value={{
        arrayCarrinho,
        setArrayCarrinho,
        quantidade,
        valorTotal,
        setValorTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
