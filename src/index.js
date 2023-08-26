import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvaide } from "./context/modal-context";
import "./index.css";
import { ThmeProvide } from "./context/theme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThmeProvide>
    <ModalProvaide>
      <App />
    </ModalProvaide>
  </ThmeProvide>
);
