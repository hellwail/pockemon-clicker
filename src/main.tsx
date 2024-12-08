import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthForm from "./components/auth/AuthForm";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <AuthForm />
  </StrictMode>
);
