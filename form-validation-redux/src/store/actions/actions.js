import * as actionTypes from "./actionTypes";

export const changeUsername = (val) => {
  return {
    type: actionTypes.CHANGE_USERNAME,
    value: val,
  };
};
export const changeEmail = (val) => {
  return {
    type: actionTypes.CHANGE_EMAIL,
    value: val,
  };
};
export const changePostal = (val) => {
  return {
    type: actionTypes.CHANGE_POSTAL,
    value: val,
  };
};
export const changePass = (val) => {
  return {
    type: actionTypes.CHANGE_PASS,
    value: val,
  };
};
export const changePassConfirmed = (val) => {
  return {
    type: actionTypes.CHANGE_PASS_CONFIRMED,
    value: val,
  };
};
