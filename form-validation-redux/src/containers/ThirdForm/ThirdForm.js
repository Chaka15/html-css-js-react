import React, { Component } from "react";

import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";
import classes from "./ThirdForm.css";
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

class ThirdForm extends Component {
  state = {
    error: false,
  };

  // onChangePassHandler = (e) => {
  //   const inputPassValue = e.target.value;
  //   this.setState({
  //     inputPass: inputPassValue,
  //   });
  // };

  // onChangePassConfirmedHandler = (e) => {
  //   const inputPassConfirmedValue = e.target.value;
  //   this.setState({
  //     inputPass: inputPassConfirmedValue,
  //   });
  // };

  onBackHandler = () => {
    this.props.history.goBack();
  };
  onNextHandler = () => {
    if (
      this.props.inputPassValue === this.props.inputPassConfirmedValue &&
      this.props.inputPassValue.match(/\d/) &&
      this.props.inputPassValue.length > 5
    ) {
      this.props.history.push(this.props.match.url + "/endpage");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className={classes.ThirdForm}>
        <input
          className={classes.Input}
          value={this.props.inputPassValue}
          type="password"
          placeholder="Type Your Password"
          onChange={(e) => this.props.onChangePassHandler(e.target.value)}
        />
        <input
          className={classes.Input}
          value={this.props.inputPassConfirmedValue}
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) =>
            this.props.onChangePassConfirmedHandler(e.target.value)
          }
        />
        <div>
          {this.state.error ? (
            <ErrorMessage>
              Your password should contain at least 6 characters and one number.
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
    inputPassValue: state.thirdForm.inputPass,
    inputPassConfirmedValue: state.thirdForm.inputPassConfirmed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePassHandler: (val) => {
      dispatch(actions.changePass(val));
    },
    onChangePassConfirmedHandler: (val) => {
      dispatch(actions.changePassConfirmed(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThirdForm);
