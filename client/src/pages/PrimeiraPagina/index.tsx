import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Loader from "../../assets/images/loader.svg";

interface Unida {
  id: number;
  name: string;
  slug: string;
}

function PrimeiraPagina() {
  const [isLoading, setIsLoading] = useState(true);
  const [banner, setBanner] = useState(null);
  const [unidades, setUnidades] = useState<Unida[]>([]);
  const [unidadeSelected, setUnidadeSelected] = useState(
    window.sessionStorage.getItem("unidade")
  );
  const dataSync = window.localStorage.getItem("day");
  const [logo, setLogo] = useState(null);
  const [texto1, setTexto1] = useState(null);
  const [texto2, setTexto2] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const layoutSelectUnidade = () => {
    return (
      <main className="welcome">
        <div className="container">
          <Header logo={logo} />
          <section className="content mb5">
            <div className="title mb4">
              <h1 className="title h1 text-support mb3">
                Selecione a
                <strong className="text-secondary">unidade desejada</strong>
              </h1>
            </div>

            <section className="answers">
              {unidades.length &&
                unidades.map((unidade) => {
                  return (
                    <div className="full mb3" key={unidade.id}>
                      <Link
                        to={"#!"}
                        onClick={(event: any) => {
                          event.preventDefault();
                          window.sessionStorage.setItem(
                            "unidade",
                            unidade.slug
                          );
                          setUnidadeSelected(unidade.slug);
                        }}
                        title={unidade.name}
                        className="button button-border text button100 border-white text-support text-size-default"
                      >
                        {unidade.name}
                      </Link>
                    </div>
                  );
                })}
            </section>
          </section>
        </div>
        <Footer />
      </main>
    );
  };

  const layoutHome = () => {
    return (
      <>
        <main className="welcome">
          <div className="container">
            <Header logo={logo} />
          </div>
          <Banner image={banner} mb5={true} />
          <div className="container ">
            <section className="content ms2 me2 text" style={{ marginTop: "6vh" }}>
              <h3 className="title h2 text-support mb3 text">
                {texto1} <strong className="text-support text h4">{texto2}</strong>
              </h3>

              <Link
                to={"/home"}
                title="Iniciar"
                className="button bg-purple text-support text text-size-default"
              >
                INICIAR
              </Link>
            </section>
          </div>
        </main>
{/*         <Footer />
 */}      </>
    );
  };

  const FormataStringData = (data: string | null) => {
    var dia = data?.split("/")[0];
    var mes = data?.split("/")[1];
    var ano = data?.split("/")[2];

    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  };

  async function load() {
    try {
      var dateNow = new Date();
      // console.log(dataSync);
      // console.log(dateNow.toLocaleDateString().toString());
      // console.log("-----------");
      // console.log(FormataStringData(dataSync));
      // console.log(FormataStringData(dateNow.toLocaleDateString().toString()));
      // console.log("-----------");
      if (
        dataSync === null ||
        new Date(FormataStringData(dataSync)) <
          new Date(FormataStringData(dateNow.toLocaleDateString().toString()))
      ) {
        console.log(dataSync);
        console.log(dateNow.toLocaleDateString().toString());
        var dateDay1 = new Date(new Date().valueOf() + 1000 * 3600 * 24);
        await axios.get("http://localhost:5000/api/v1/sync");
        window.localStorage.setItem(
          "day",
          dateDay1.toLocaleDateString().toString()
        );
      }

      axios
        .all([
          axios.get("http://localhost:5000/api/v1/primary-page"),
          axios.get("http://localhost:5000/api/v1/unidades"),
        ])
        .then(
          axios.spread((data1, data2) => {
            console.log("Unidades", data2.data);

            setUnidades(data2.data);
            setBanner(data1.data[0].banner);
            setLogo(data1.data[0].logo);
            setTexto1(data1.data[0].texto1);
            setTexto2(data1.data[0].texto2);
            setIsLoading(false);
          })
        );
    } catch (error) {
      console.log("erro", error);
      window.location.reload();
    }
  }

  return (
    <>
      {!isLoading ? (
        unidadeSelected ? (
          layoutHome()
        ) : (
          layoutSelectUnidade()
        )
      ) : (
        <div
          style={{
            display: "flex",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={Loader} style={{ width: 130 }} />
          <h1 className="title h2 text-support mb3">
            <strong className="text-secondary" style={{ fontSize: 62 }}>
              Sincronizando
            </strong>
          </h1>
        </div>
      )}
    </>
  );
}

export default PrimeiraPagina;
