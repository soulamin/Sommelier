import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perguntas from "./pages/Perguntas";
import Rotas from "./pages/Rotas";
import PrimeiraPagina from "./pages/PrimeiraPagina";
import Home from "./pages/Home";
import ResultadoProduto from "./pages/ResultadoProduto";
import ProdutoDetail from "./pages/ProdutoDetail";
import Sucesso from "./pages/Sucesso";
import Pesquisar from "./pages/Pesquisar";
import Sugestoes from "./pages/Sugestoes";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rotas" element={<Rotas />} />
        <Route path="/perguntas" element={<Perguntas />} />
        <Route path="/produtos" element={<ResultadoProduto />} />
        <Route path="/sugestoes" element={<Sugestoes />} />
        <Route path="/produto/:id" element={<ProdutoDetail />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/pesquisa" element={<Pesquisar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
