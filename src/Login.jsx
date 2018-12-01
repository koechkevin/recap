import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { fetchLogin } = this.props;
    const { username, password } = this.state;
    const body = {
      username,
      password,
    };
    fetchLogin(body);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Login</h2>
        <div>
          <input type="text" name="username" placeholder="username" onChange={this.onChange} />
          <br />
          <br />
          <input type="password" name="password" placeholder="password" onChange={this.onChange} />
          <br />
          <br />
          <input type="submit" className="view" value="Login" />
          <br />
          <br />
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  fetchLogin: PropTypes.func.isRequired,
};
export default Login;
