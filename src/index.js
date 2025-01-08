import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Loginbox } from "./components/cards/loginbox/loginbox";
import { Recover } from "./components/cards/recover/recover";
import { Notfound } from "./components/cards/notfound/notfound";
import { Dashboard } from "./components/dashboard/dashboard";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

document.head.innerHTML += `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="fonts/poppins.css">
  <link rel="stylesheet" href="fonts/noto.css">
  <link rel="stylesheet" href="fonts/material-symbols.css">
  <link rel="shortcut icon" href="images/icon.png" type="image/x-icon">
  <title>QSIS 3</title>
`

var loginState = sessionStorage.getItem('login')

if (loginState === null || loginState === undefined) {
  loginState = false
}

root.render(
  <App>
    <BrowserRouter>
      <Routes>
        {loginState ? <Route element={<Navigate to={'/dashboard'} />} path="/" /> : <Route element={<Navigate to={'/login'} />} path="/" />}
        <Route path="/*" element={<Navigate to={"/404"} />} />
        <Route element={<Loginbox />} path="/login" />
        <Route element={<Recover />} path="/recovery" />
        <Route element={<Notfound />} path="/404" />
        <Route element={<Dashboard loginState={loginState} />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  </App>
);

// export { NavigateTo }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
