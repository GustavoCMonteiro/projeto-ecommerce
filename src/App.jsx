import { GlobalStorage } from "./components/GlobalContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalStorage>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </HashRouter>
    </GlobalStorage>
  );
}

export default App;
