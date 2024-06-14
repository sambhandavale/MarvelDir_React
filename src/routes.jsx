import React from "react";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";


const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/home", element: <Home />, exact: true },
  { path: "/movies", element: <Movies /> },
  { path: "/series", element: <Series /> },
];

export default routes;
