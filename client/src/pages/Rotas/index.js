import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Redirect } from "../../components/Redirect";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";

function Rotas() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const requestPerguntas = await axios.get(
      "http://localhost:5000/api/v1/questions-page"
    );
    setPerguntas(requestPerguntas.data);
    setIsLoading(false);
  }

  const layoutOptions = () => {
    return (
      <section className="answers grid oneColuna">
        {perguntas.map((element, index) => {
          return (
            <div className={`full mb3`} key={element.id}>
              <Link
                to={"#!"}
                className="button button-border button100 border-white text-support text-size-default"
                onClick={async (event) => {
                  event.preventDefault();
                  navigate("/perguntas", {
                    state: {
                      perguntas: element.pergunta,
                    },
                  });
                }}
                title={element.slug}
              >
                {element.nome}
              </Link>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <>
      {!isLoading ? (
        <>
          <main>
           {/*  <Header logo={Logo} init={false} isGoHome={true} link={"/"} /> */}
            <div className="container">
              <section className="content mb5 mt10-pergunta">
                <div className="title mb4">
                  <h1
                    className="title h2 text-support mb3"
                    // dangerouslySetInnerHTML={{
                    //   __html: perguntas.nome,
                    // }}
                  >
                     Qual seu 
                    <strong class="text-secondary">
                     desafio principal ?
                    </strong>
                  </h1>
                </div>
                {/* Chamar Layout Options */}
                {perguntas.length && layoutOptions()}
              </section>
            </div>
          </main>
          <Footer init={false} link={"/home"} />
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

export default Rotas;
