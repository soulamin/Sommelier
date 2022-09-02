import React, { useEffect, useState } from "react";
import "../Pesquisar/search.css";
import axios from "axios";
import CardPesquisa from "../../components/CardPesquisa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import { Redirect } from "../../components/Redirect";

function Sugestoes() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriasComProduto, setCategoriasComProduto] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const requestCategorias = await axios.get(
      `http://localhost:5000/api/v1/products-categories?unidade=${window.sessionStorage.getItem(
        "unidade"
      )}`
    );
    setCategoriasComProduto(requestCategorias.data);
    setIsLoading(false);
  }

  const layoutCategoria = () => {
    return categoriasComProduto.map((categoria, index) => {
      return (
        <>
          <div class="title">
            {index === 0 ? (
              <h1 class="title h1 text-support mb2">
                <strong>{categoria.tipo}&nbsp;</strong>
              </h1>
            ) : (
              <h2 class="title h1 text-support mb2">
                <strong>{categoria.tipo}&nbsp;</strong>
              </h2>
            )}
          </div>
          <CardPesquisa produtos={categoria.produtos} />
        </>
      );
    });
  };

  const layoutEmpt = () => {
    return (
      <>
        <div class="title">
          <h1 class="title h2 text-secondary mb2">
            <strong>Veja abaixo nossas sugestões</strong>
          </h1>
        </div>
        {categoriasComProduto.length !== 0 && layoutCategoria()}
      </>
    );
  };

  return (
    <>
      {!isLoading ? (
        <>
          <main>
            <Header logo={Logo} init={false} link={"/"} isGoHome={true} />
            <div class="container">
              <section class="content mb5">{layoutEmpt()}</section>
            </div>
          </main>
          <Footer
            init={false}
            // link={"pergunta"}
            isGoHome={false}
            fixed={true}
          />
        </>
      ) : (
        <div style={styles.divLoading}>
          <img src={Loader} />
        </div>
      )}
      <Redirect />
    </>
  );
}

const styles = {
  divLoading: {
    display: "flex",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Sugestoes;
