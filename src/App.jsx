import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/nav/navbar";
import Footer from "./components/layout/footer/footer";
import routes from "./routes";
import "./main.css"


export default function App() {

  return (
    <div className="Marvel">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} exact={route.exact} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
