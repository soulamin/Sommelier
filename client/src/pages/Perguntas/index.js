import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Link,
  useNavigate,
  createSearchParams,
  useLocation,
} from "react-router-dom";
import { Redirect } from "../../components/Redirect";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";

function Perguntas() {
  let navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isNextPage, setIsNextPage] = useState(false);
  const [perguntas, setPerguntas] = useState([]);
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState([]);
  const [perguntaVisivel, setPerguntaVisivel] = useState(0);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    console.log("use efect", perguntasSelecionadas);
    if (isNextPage) {
      navigate("/produtos", {
        state: {
          perguntasSelecionadas: perguntasSelecionadas,
          pergunta: perguntas,
        },
      });
    }
  }, [perguntasSelecionadas, isNextPage]);

  async function load() {
    let { perguntas } = location.state;
    console.log("location.state", location.state);
    setPerguntas(perguntas);
    setIsLoading(false);
    console.log(location.state.perguntasSelecionadas);
    if (location.state.perguntasSelecionadas !== undefined) {
      console.log("perguntas back", location.state);
      setPerguntasSelecionadas(location.state.perguntasSelecionadas);
      setPerguntaVisivel(location.state.perguntasSelecionadas.length);
    }
  }

  const layoutOptions = () => {
    // console.log("ultima resposta", perguntasSelecionadas.at(-1));
    return (
      <section className="answers grid oneColuna">
        {perguntas[perguntaVisivel].opcao.map((element, index) => {
          return (
            <div className={`full mb3`} key={element.id}>
              <Link
                to={"#!"}
                className="button button-border button100 border-white text-support text-size-default"
                onClick={async (event) => {
                  event.preventDefault();
                  const totalOptions = perguntas.length - 1;
                  setPerguntasSelecionadas([
                    ...perguntasSelecionadas,
                    event.target.title,
                  ]);

                  if (totalOptions === perguntaVisivel) {
                    setIsNextPage(true);
                  } else {
                    let nextPergunta = perguntaVisivel + 1;
                    setPerguntaVisivel(nextPergunta);
                  }
                }}
                title={element.slug}
              >
                {element.titulo}
              </Link>
            </div>
          );
        })}
      </section>
    );
  };

  const layoutOptionsTwoColumn = () => {
    return (
      <section className="answers grid twoColuna">
        {perguntas[perguntaVisivel].opcao.map((element) => {
          return (
            <>
              <div className={`full mb3`} key={element.id}>
                <Link
                  to={"#!"}
                  className="button button-border button100 border-white text-support text-size-default"
                  onClick={async (event) => {
                    event.preventDefault();
                    const totalOptions = perguntas.length - 1;
                    setPerguntasSelecionadas([
                      ...perguntasSelecionadas,
                      event.target.title,
                    ]);

                    if (totalOptions === perguntaVisivel) {
                      setIsNextPage(true);
                    } else {
                      let nextPergunta = perguntaVisivel + 1;
                      setPerguntaVisivel(nextPergunta);
                    }
                  }}
                  title={element.slug}
                >
                  {element.titulo}
                </Link>
              </div>
            </>
          );
        })}
      </section>
    );
  };

  const layoutOptionsImagem = () => {
    return (
      <section className="answers country country-custom">
        {perguntas[perguntaVisivel].opcao.map((element) => {
          return (
            <div className="quarter mb3" key={element.id}>
              <Link
                to={"#!"}
                className="button button-border button100 border-white text-support text-size-default"
                onClick={async (event) => {
                  event.preventDefault();
                  const totalOptions = perguntas.length - 1;
                  await setPerguntasSelecionadas([
                    ...perguntasSelecionadas,
                    event.target.title,
                  ]);

                  if (totalOptions === perguntaVisivel) {
                    await setIsNextPage(true);
                  } else {
                    let nextPergunta = perguntaVisivel + 1;
                    await setPerguntaVisivel(nextPergunta);
                  }
                }}
                title={element.slug}
              >
                <img
                  src={element.image}
                  alt={element.titulo}
                  title={element.slug}
                />
                {element.titulo}
              </Link>
            </div>
          );
        })}
        <div className="row contents">
          <div className="full mb3">
            <Link
              to={"#!"}
              title={perguntas[perguntaVisivel].imageFooter}
              className="button button-border button100 border-white text-support text-size-default"
              onClick={async (event) => {
                event.preventDefault();
                const totalOptions = perguntas.length - 1;
                setPerguntasSelecionadas([
                  ...perguntasSelecionadas,
                  event.target.title,
                ]);

                if (totalOptions === perguntaVisivel) {
                  setIsNextPage(true);
                } else {
                  let nextPergunta = perguntaVisivel + 1;
                  setPerguntaVisivel(nextPergunta);
                }
              }}
            >
            <strong>   {perguntas[perguntaVisivel].perguntaFooter} </strong>
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {console.log("Pergunta:", perguntas, perguntaVisivel)}
      {!isLoading ? (
        <>
          <main>
           {/*  <Header logo={Logo} init={false} isGoHome={true} link={"/"} /> */}
            <div className="container">
              <section className="content mb5 mt10-pergunta">
                <div className="title mb4">
                  <h1
                    className="title h2 text-support mb3"
                    dangerouslySetInnerHTML={{
                      __html: perguntas[perguntaVisivel].titulo,
                    }}
                  />
                </div>
                {/* Chamar Layout Options */}

                {perguntas[perguntaVisivel].opcao.length >= 1 &&
                  perguntas[perguntaVisivel].opcao.length <= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo === "Padrão" &&
                  layoutOptions()}

                {perguntas[perguntaVisivel].opcao.length >= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo === "Padrão" &&
                  layoutOptionsTwoColumn()}

                {perguntas[perguntaVisivel].opcao.length >= 1 &&
                  perguntas[perguntaVisivel].opcao.length <= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo ===
                    "Acompanhamentos" &&
                  layoutOptions()}

                {perguntas[perguntaVisivel].opcao.length >= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo ===
                    "Acompanhamentos" &&
                  layoutOptionsTwoColumn()}

                {perguntas[perguntaVisivel].opcao.length >= 1 &&
                  perguntas[perguntaVisivel].opcao.length <= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo === "Preço" &&
                  layoutOptions()}

                {perguntas[perguntaVisivel].opcao.length >= 6 &&
                  perguntas[perguntaVisivel].opcao[0].tipo === "Preço" &&
                  layoutOptionsTwoColumn()}

                {perguntas[perguntaVisivel].opcao[0].tipo === "País" &&
                  layoutOptionsImagem()}
              </section>
            </div>
          </main>
          <Footer
            init={false}
            link={"pergunta"}
            customNavigate={() => {
              let customArray = perguntasSelecionadas;
              if (customArray.length) {
                setPerguntasSelecionadas(customArray);
                customArray.pop();
                setPerguntaVisivel(customArray.length);
              } else {
                navigate("/rotas");
              }
            }}
          />
        </>
      ) : (
        // layoutQuestions()
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

export default Perguntas;
