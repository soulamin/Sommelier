import React, { useEffect, useState, useRef } from "react";
import "./search.css";
import axios from "axios";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Link, useNavigate, createSearchParams } from "react-router-dom";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardPesquisa from "../../components/CardPesquisa";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import IconBusca from "../../assets/images/icon-busca.svg";
import { Redirect } from "../../components/Redirect";

const Pesquisar = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [input, setInput] = useState("");
  const [categoriasComProduto, setCategoriasComProduto] = useState([]);

  const [layout, setLayout] = useState("default");

  const keyboard = useRef(input);
  const inputSubmit = useRef();

  const onChange = (input) => {
    console.log("Input changed", input);

    setInput(input.replaceAll("`", ""));
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "`") {
      setIsShowKeyBoard(false);
    }
    if (button === "{enter}") {
      inputSubmit.current.click();
    }
  };

  const onChangeInput = (event) => {
    const input = event.target.value.replaceAll("`", "");

    setInput(input);
    keyboard.current.setInput(input);
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  useEffect(() => {
    load();
  }, []);

  const handleInputBlur = () => {
    if (isShowKeyBoard) {
      document.addEventListener("mousedown", (e) => {
        if (
          e.target.className.includes("hg-button") ||
          e.target.className.includes("hg-layout-shift") ||
          e.target.className.includes("hg-rows") ||
          e.target.className.includes("hg-row") ||
          e.target.className.includes("react-simple-keyboard")
        ) {
          return;
        } else {
          setIsShowKeyBoard(false);
        }
      });
    }
  };

  async function load() {
    const requestCategorias = await axios.get(
      `http://localhost:5000/api/v1/products-categories?unidade=${window.sessionStorage.getItem(
        "unidade"
      )}`
    );
    setCategoriasComProduto(requestCategorias.data);
    setIsLoading(false);
    window.sessionStorage.setItem("tipoEscolha", "pesquisa");
    window.sessionStorage.setItem("perguntasSalvar", null);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      navigate({
        pathname: "/produtos",
        search: `?${createSearchParams({
          s: input,
        })}`,
      });
    }
  };

  const handlePesquisar = () => {
    if (input !== "") {
      navigate({
        pathname: "/produtos",
        search: `?${createSearchParams({
          s: input,
        })}`,
      });
    }
  };

  const layoutCategoria = () => {
    console.log(categoriasComProduto);
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
          {/* <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            // autoPlaySpeed={1000}
            keyBoardControl={false}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          > */}
          <CardPesquisa produtos={categoria.produtos} />
          {/* </Carousel> */}
        </>
      );
    });
  };

  return (
    <>
      {!isLoading ? (
        <>
          <main>
            <Header logo={Logo} init={false} isGoHome={true} link={"/"} />
            <div className="container">
              <section className="content mb5">
                <section className="search mb4">
                  <form className="form" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Olá, qual a boa?"
                      id="input-search"
                      value={input}
                      onChange={onChangeInput}
                      onFocus={() => {
                        setIsShowKeyBoard(true);
                      }}
                      onBlur={handleInputBlur}
                      autocomplete="off"
                      name="search"
                      className="text text-primary text-size-default"
                    />
                    <div
                      style={{
                        display: isShowKeyBoard ? "block" : "none",
                        width: "100%",
                      }}
                    >
                      <Keyboard
                        keyboardRef={(r) => (keyboard.current = r)}
                        layoutName={layout}
                        display={{
                          "{bksp}": "apagar",
                          "{enter}": "pesquisar",
                          "{tab}": "tab",
                          "{lock}": "caps lock",
                          "{shift}": "shift",
                          "{space}": "espaço",
                          "`": "fechar",
                        }}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        excludeFromLayout={{
                          default: ["@", ".com"],
                          shift: ["@", ".com"],
                        }}
                      />
                    </div>
                    <input
                      ref={inputSubmit}
                      type="submit"
                      value=""
                      style={{ backgroundImage: `url(${IconBusca})` }}
                    />
                  </form>
                </section>
                {categoriasComProduto.length !== 0 && layoutCategoria()}
              </section>
            </div>
          </main>
          <Footer init={false} link={"/"} fixed={true} isGoHome={false} />
        </>
      ) : (
        <div style={styles.divLoading}>
          <img src={Loader} />
        </div>
      )}
      <Redirect />
    </>
  );
};

const styles = {
  divLoading: {
    display: "flex",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Pesquisar;
