import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <>
    
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
     
  </>
);
