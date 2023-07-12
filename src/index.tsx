import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App";
import { Button } from "./Components/Button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <Button color={"blue"} onClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    } } children={"Adicionar"}></Button> */}
  </React.StrictMode>
);
