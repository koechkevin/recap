import axios from 'axios';

export const getIndex = () => axios('https://kibitok.herokuapp.com/api/v2/', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => {
    const output = { data: response.data.message };
    return output;
  })
  .catch(error => error);

export const getAllEntries = token => dispatch => axios('https://kibitok.herokuapp.com/api/v2/entries', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', 'x-access-token': token },
})
  .then((response) => {
    const array = [];
    Object.values(response.data.message).forEach(entry => array.push(entry));
    const order = array.reverse();
    dispatch({
      type: 'ENTRIES_SUCCESSFUL',
      data: order,
    });
  })
  .catch(() => dispatch({
    type: 'ENTRIES_FAILURE',
    error: 'an error occured',
  }));
export const postNewEntry = (token, data) => dispatch => axios('https://kibitok.herokuapp.com/api/v2/entries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-access-token': token },
  data,
})
  .then(() => dispatch(getAllEntries(token)))
  .catch(error => console.log(data));
export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: 'LOGOUT',
  });
};

export const register = body => dispatch => axios('https://kibitok.herokuapp.com/api/v2/users/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  data: body,
})
  .then((response) => {
    if (response.data.message) {
      if (response.data.message === 'You registered succesfully') {
        dispatch({
          type: 'REGISTER_SUCCESSFUL',
          message: 'You registered succesfully',
        });
      } else {
        dispatch({
          type: 'REGISTER_FAILED',
          error: response.data.message,
        });
      }
    } else {
      dispatch({
        type: 'REGISTER_FAILED',
        error: 'an error occured',
      });
    }
    // console.log(response.data.message);
  })
  .catch(() => {
    dispatch({
      type: 'REGISTER_FAILED',
      error: 'an error occured',
    });
  });

export const fetchLogin = body => dispatch => axios('https://kibitok.herokuapp.com/api/v2/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  data: body,
})
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: 'LOGIN_SUCCESSFUL',
        token: response.data.token,
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        message: response.data.message,
      });
    }
  })
  .catch(error => dispatch({
    type: 'LOGIN_FAILED',
    message: error,
  }));
