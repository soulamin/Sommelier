import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Wine from "../../components/Wine";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import { Redirect } from "../../components/Redirect";

function ProdutoDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [produto, setProduto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const requestProduct = await axios.get(
      `http://localhost:5000/api/v1/produto/${id}`
    );
    setProduto(requestProduct.data);
    setIsLoading(false);
  }

  return (
    <>
      {!isLoading ? (
        <>
          <main>
         {/*    <Header logo={Logo} init={false} isGoHome={true} link={"/"} /> */}
            <div class="container">
              <section class="content mb5">
                {produto && <Wine product={produto} />}
              </section>
            </div>
          </main>
          <Footer init={false} link={"/produtos"} fixed={true} />
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

export default ProdutoDetail;
