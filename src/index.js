import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvaide } from "./context/modal-context";
import './index.css'

const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<ModalProvaide><App/></ModalProvaide>)