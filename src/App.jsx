import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import AppRoutes from "./routes";

function App() {
  return (
    <MovieProvider>
      <Router>
        <AppRoutes />
      </Router>
    </MovieProvider>
  );
}

export default App;
