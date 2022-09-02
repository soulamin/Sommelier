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

  useEffect(() => {
    load();
  }, []);

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
    } catch (error) {
      //window.location.reload();
      console.log(error); 
    }
  }

  const layoutHome = () => {
    return (
      <>
        <main>
          <Header logo={Logo} init={false} isGoHome={true} link={"/"} />
          <Banner image={banner} mb5={true} styles={{ marginTop: "15vh" }} />
          <div className="container">
            <section
              className="content content-start-opcoes"
              style={{ marginTop: "10vh" }}
            >
              <article className="mb3 ajuste">
                <h1
                  className="title h2 text-support mb3"
                  dangerouslySetInnerHTML={{ __html: pergunta1 }}
                  style={{ fontSize: "60px" }}
                />
                <Link
                  to={"/rotas"}
                  title="Me ajude!"
                  className="button button-background bg-yellow text-primary text-size-default"
                >
                  <img src={IconMenu} alt="Me ajude!" className="icon-button" />
                  Me ajude!
                </Link>
              </article>

              {/* <div className="div"></div> */}

              <article className="mb3 ajuste" style={{ paddingLeft: "50px" }}>
                <h2
                  className="title h2 text-support mb3"
                  dangerouslySetInnerHTML={{ __html: pergunta2 }}
                  style={{ fontSize: "60px" }}
                />
                <Link
                  to={"/pesquisa"}
                  title="Pesquisar"
                  className="button button-background bg-yellow text-primary text-size-default"
                >
                  <img
                    src={IconBusca}
                    alt="Pesquisar"
                    className="icon-button"
                  />
                  Pesquisar
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
