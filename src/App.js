import React, { Component } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import Container from "react-bootstrap/Container";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}
