import React from "react";
import "./banner.css";

function Banner({ image, mb5 = false, styles = { marginTop: "0vh" } }) {
  return (
    <section className={`banner ${mb5 && "mb5"}`} style={styles}>
      <img src={image} alt="Banner" />
    </section>
  );
}

export default Banner;
