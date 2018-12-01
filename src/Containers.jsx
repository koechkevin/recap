import { connect } from 'react-redux';
import App from './App';
import Register from './Register';
import NewEntry from './NewEntry';
import {
  fetchLogin, logout, register, postNewEntry, getAllEntries,
} from './actions';
import Login from './Login';
import Entries from './Entries';

export const mapStateToProps = state => ({
  token: state.loginReducer.token,
  data: state.allEntriesReducer.data,
});

export const EntriesContainer = connect(mapStateToProps, { getAllEntries })(Entries);
export const NewEntryContainer = connect(mapStateToProps, { postNewEntry })(NewEntry);
export const RegisterContainer = connect(null, { register })(Register);
export const LoginContainer = connect(null, { fetchLogin })(Login);
export const AppContainer = connect(mapStateToProps, { logout })(App);
