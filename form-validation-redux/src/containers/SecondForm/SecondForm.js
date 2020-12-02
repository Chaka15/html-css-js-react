import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import classes from "./SecondForm.css";
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

class SecondForm extends Component {
  state = {
    error: false,
  };

  // onChangeHandlerMail = (e) => {
  //   const inputMailVal = e.target.value;
  //   this.setState({ inputMailValue: inputMailVal });
  // };
  // onChangeHandlerNum = (e) => {
  //   const inputNumVal = e.target.value;
  //   this.setState({ inputPostalValue: inputNumVal });
  // };

  onBackHandler = () => {
    this.props.history.goBack();
  };
  onNextHandler = () => {
    if (
      this.props.inputMailValue.match("@") &&
      this.props.inputPostalValue.length === 5 &&
      !isNaN(this.props.inputPostalValue)
    ) {
      this.props.history.push(this.props.match.url + "/thirdstep");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className={classes.SecondForm}>
        <input
          className={classes.Input}
          value={this.props.inputMailValue}
          type="email"
          placeholder="Enter Your Mail"
          onChange={(e) => this.props.onChangeHandlerMail(e.target.value)}
        />
        <input
          className={classes.Input}
          value={this.props.inputPostalValue}
          type="text"
          placeholder="Postal Code"
          onChange={(e) => this.props.onChangeHandlerNum(e.target.value)}
        />
        <div>
          {this.state.error ? (
            <ErrorMessage>
              Please enter a valid email and postal code.
            </ErrorMessage>
          ) : null}
          <Button label="Back" buttonType="back" clicked={this.onBackHandler} />
          <Button label="Next" buttonType="next" clicked={this.onNextHandler} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inputMailValue: state.secondForm.inputMail,
    inputPostalValue: state.secondForm.inputPostal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandlerMail: (val) => dispatch(actions.changeEmail(val)),
    onChangeHandlerNum: (val) => dispatch(actions.changePostal(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondForm);
