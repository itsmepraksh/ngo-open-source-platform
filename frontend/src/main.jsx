import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper.jsx";
import {ToastContainer} from "react-toastify";
import AuthWrapper from "./context/AuthWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    
    <BrowserRouter> 
      <Wrapper>
        <App />
        <ToastContainer/>
      </Wrapper>
    </BrowserRouter>
     
  </AuthWrapper>
);
