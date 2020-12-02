import * as actionTypes from "../actions/actionTypes";

const initialState = {
  inputUsername: "",
  secondForm: {
    inputMail: "",
    inputPostal: "",
  },
  thirdForm: {
    inputPass: "",
    inputPassConfirmed: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME:
      return {
        ...state,
        inputUsername: action.value,
      };
    case actionTypes.CHANGE_EMAIL:
      return {
        ...state,
        secondForm: {
          ...state.secondForm,
          inputMail: action.value,
        },
      };
    case actionTypes.CHANGE_POSTAL:
      return {
        ...state,
        secondForm: {
          ...state.secondForm,
          inputPostal: action.value,
        },
      };
    case actionTypes.CHANGE_PASS:
      return {
        ...state,
        thirdForm: {
          ...state.thirdForm,
          inputPass: action.value,
        },
      };
    case actionTypes.CHANGE_PASS_CONFIRMED:
      return {
        ...state,
        thirdForm: {
          ...state.thirdForm,
          inputPassConfirmed: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
