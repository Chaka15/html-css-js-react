import React, { Component } from "react";

import classes from "./HomePage.css";
import SearchField from "../../components/UI/SearchField/SearchField";
import NavLinks from "../../components/NavLinks/NavLinks";
import Logo from "../../components/UI/Logo/Logo";
import Cards from "../Cards/Cards";
import Modal from "../../components/UI/Modal/Modal";

class HomePage extends Component {
  state = {
    clicked: false,
    inputValue: "",
    showModal: true,
  };

  clickHandler = () => {
    this.setState({
      clicked: true,
      showModal: true,
    });
  };
  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value, clicked: false });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
      clicked: false,
    });
  };

  render() {
    let cards = null;
    if (this.state.clicked && this.state.inputValue === "planets") {
      cards = <Cards />;
    } else if (this.state.clicked && this.state.inputValue !== "planets") {
      cards = (
        <Modal show={this.state.showModal} modalClosed={this.closeModal}>
          Sorry,there is no results for your search! Please try something else!
        </Modal>
      );
    }

    return (
      <div className={classes.HomePage}>
        <header>
          <Logo />
          <SearchField
            clicked={this.clickHandler}
            onChange={this.inputHandler}
          />
          <NavLinks />
        </header>
        {cards}
      </div>
    );
  }
}

export default HomePage;
