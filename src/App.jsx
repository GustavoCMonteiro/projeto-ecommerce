import { GlobalStorage } from "./components/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="projeto-ecommerce/" element={<Home />} />
          <Route path="projeto-ecommerce/carrinho" element={<Carrinho />} />
          <Route path="projeto-ecommerce/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
