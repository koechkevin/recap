import { combineReducers } from 'redux';

const initialState = {
  token: localStorage.token ? localStorage.token : '',
  message: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return {
        ...state,
        token: action.token,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        message: action.message,
      };
    case 'LOGOUT':
      return { ...state, token: '' };
    default:
      return state;
  }
};

export const registerReducer = (state = {
  message: '',
  error: {},
}, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESSFUL':
      return {
        ...state,
        message: action.message,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const allEntriesReducer = (state = {
  data: [],
  error: {},
}, action) => {
  switch (action.type) {
    case 'ENTRIES_SUCCESSFUL':
      return {
        ...state,
        data: action.data,
      };
    case 'ENTRIES_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  allEntriesReducer,
});
