import React, { Component } from "react";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import classes from "./FirstForm.css";
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

class FirstForm extends Component {
  state = {
    error: false,
  };

  // onChangeHandler = (e) => {
  //   const inputVal = e.target.value;
  //   this.setState({
  //     inputValue: inputVal,
  //   });
  // };

  clickedHandler = () => {
    if (this.props.inputValue.length > 4 && this.props.inputValue.match(/\d/)) {
      this.props.history.push("/secondstep");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className={classes.FirstForm}>
        <input
          type="text"
          placeholder="Enter Your Username"
          className={classes.Input}
          value={this.props.inputValue}
          onChange={(e) => this.props.onChangeHandler(e.target.value)}
        />
        <div>
          {this.state.error ? (
            <ErrorMessage>
              Your Username should contain at least 5 characters and one number.
            </ErrorMessage>
          ) : null}
          <Button
            label="Next"
            buttonType="next"
            clicked={this.clickedHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputUsername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandler: (val) => dispatch(actions.changeUsername(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstForm);
