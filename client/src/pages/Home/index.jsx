import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "../../components/Redirect";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import IconMenu from "../../assets/images/icon-menu.svg";
import IconBusca from "../../assets/images/icon-busca.svg";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [banner, setBanner] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [pergunta1, setPergunta1] = useState(null);
  const [pergunta2, setPergunta2] = useState(null);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    load();
  }, []);

  function Log(dados) {
    const apiacesso = axios.get(
      `http://localhost:3000/dash/api/acesso_api/?a=${dados}`
    );
  }



  async function load() {
    try {
      const requestSecondPage = await axios.get(
        "http://localhost:5000/api/v1/second-page"
      );

      setBanner(requestSecondPage.data[0].banner);
      setTitulo(requestSecondPage.data[0].titulo);
      setPergunta1(requestSecondPage.data[0].pergunta1);
      setPergunta2(requestSecondPage.data[0].pergunta2);
      setIsLoading(false);

      //Mexi
      axios
        .all([
          axios.get("http://localhost:5000/api/v1/primary-page"),
          axios.get("http://localhost:5000/api/v1/unidades"),
        ])
        .then(
          axios.spread((data1, data2) => {
            console.log("Unidades", data2.data);
            setLogo(data1.data[0].logo);
          })
        );

    } catch (error) {
      //window.location.reload();
      console.log(error);
    }
  }

  const layoutHome = () => {
    return (
      <>
        <main className="welcome">
          <div className="container">
            <Header logo={logo} />
          </div>
          <Banner image={banner} mb2={true} styles={{ marginTop: "10vh" }} />
          <div className="container">
            <section
              className="content content-start-opcoes"
              style={{ marginTop: "10vh" }}
            >
              <article className="mb2 ajuste">
                {/* <h1
                  className="title h2 text-support mb3 "
                  dangerouslySetInnerHTML={{ __html: pergunta1 }}
                  style={{ fontSize: "60px" }}
                /> */}
                <Link
                  to={"/rotas"}
                  title="Me ajude!"
                  className="button button-background bg-purple text-support text-size-default"
                  onClick={() => Log('quiz')}
                >
                  Consulte a melhor solução
                </Link>
              </article>

              {/* <div className="div"></div> */}

              <article className="mb2 ajuste" style={{ paddingLeft: "50px" }}>
                {/* <h2
                  className="title h2 text-support mb3"
                  dangerouslySetInnerHTML={{ __html: pergunta2 }}
                  style={{ fontSize: "60px" }}
                /> */}
                <Link
                  to={"/pesquisa"}
                  title="Pesquisar"
                  className="button button-background bg-purple text-support text text-size-default"
                  onClick={() => Log('Lista')}
                >
                  Conheça nossos produtos
                </Link>
              </article>
            </section>
          </div>
        </main>
        <Footer init={false} link={"/"} />
      </>
    );
  };

  return (
    <>
      {!isLoading ? (
        layoutHome()
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

export default Home;
