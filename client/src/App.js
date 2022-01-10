import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import memories from "./images/memories.png";
import useStyles from "./styles";

//components
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
