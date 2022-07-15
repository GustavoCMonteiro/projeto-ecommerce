import React from "react";
import Produto from "../components/Produto";

const Home = () => {
  const [data, setData] = React.useState(null);
  const [pagina, setPagina] = React.useState(1);

  React.useEffect(() => {
    const getProdutos = async () => {
      const produtos = await fetch(
        `https://api.punkapi.com/v2/beers?page=${pagina}&per_page=28`
      );
      const json = await produtos.json();
      setData(json);
    };
    getProdutos().catch(console.error);
  }, [pagina]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagina]);

  if (data === null) {
    return "";
  }

  return (
    <>
      <section className="max-w-[1200px] mx-auto mt-32 mb-16">
        <div className="flex gap-2 justify-end my-5 mx-10">
          <button
            className={`w-6 ${pagina === 1 && "opacity-0"}`}
            onClick={() => pagina > 1 && setPagina(pagina - 1)}
            disabled={pagina === 1 && true}
          >
            <svg
              className="hover:fill-colorHover transition-colors"
              viewBox="0 0 448 512"
            >
              <path d="M447.1 256c0 17.7-13.4 32-31.1 32H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25-6.3 6.25-14.5 9.35-22.7 9.35s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416c17.7 0 31.1 14.3 31.1 32z"></path>
            </svg>
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 1 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(1)}
          >
            1
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 2 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(2)}
          >
            2
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 3 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(3)}
          >
            3
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 4 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(4)}
          >
            4
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 5 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(5)}
          >
            5
          </button>
          <button
            className={`w-6 ${pagina === 5 && "opacity-0"}`}
            onClick={() => pagina < 5 && setPagina(pagina + 1)}
            disabled={pagina === 5 && true}
          >
            <svg
              className="hover:fill-colorHover transition-colors"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6l-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z"></path>
            </svg>
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
          {data &&
            data.map((produto) => (
              <Produto
                key={produto.id}
                id={produto.id}
                foto={produto.image_url}
                nome={produto.name}
                descricao={produto.tagline}
                preco={produto.abv ? produto.abv * 2.5 : 8.4}
                abv={produto.abv ? produto.abv : "/"}
                ibu={produto.ibu ? produto.ibu : "/"}
                ebc={produto.ebc ? produto.ebc : "/"}
                ph={produto.ph ? produto.ph : "/"}
              />
            ))}
        </div>
        <div className="flex gap-2 justify-end my-5 mx-10">
          <button
            className={`w-6 ${pagina === 1 && "opacity-0"}`}
            onClick={() => pagina > 1 && setPagina(pagina - 1)}
            disabled={pagina === 1 && true}
          >
            <svg
              className="hover:fill-neutral-500 transition-colors"
              viewBox="0 0 448 512"
            >
              <path d="M447.1 256c0 17.7-13.4 32-31.1 32H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25-6.3 6.25-14.5 9.35-22.7 9.35s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416c17.7 0 31.1 14.3 31.1 32z"></path>
            </svg>
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 1 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(1)}
          >
            1
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 2 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(2)}
          >
            2
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 3 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(3)}
          >
            3
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 4 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(4)}
          >
            4
          </button>
          <button
            className={`text-2xl w-6 rounded-md hover:bg-colorHover transition-colors ${
              pagina === 5 && "bg-colorPrimary"
            }`}
            onClick={() => setPagina(5)}
          >
            5
          </button>
          <button
            className={`w-6 ${pagina === 5 && "opacity-0"}`}
            onClick={() => pagina < 5 && setPagina(pagina + 1)}
            disabled={pagina === 5 && true}
          >
            <svg
              className="hover:fill-neutral-500 transition-colors"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6l-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z"></path>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
