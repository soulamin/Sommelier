import React, { useEffect, StrictMode } from "react";
import ReactDOM from "react-dom";
import Routers from "./routers";

function App() {
  // const handle = useFullScreenHandle();

  useEffect(() => {
    // if (window.fullScreen()) {
    // } else {
    // }
  }, []);

  return (
    <StrictMode>
      {/* <button onClick={handle.enter}>Enter fullscreen</button> */}
      {/* <FullScreen handle={handle}> */}
      <Routers />
      {/* </FullScreen> */}
    </StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
