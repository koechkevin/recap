import React, { Component } from 'react';

class Register extends Component {
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
    const { register } = this.props;
    const body = this.state;
    register(body);
  }

  render() {
    return (
      <div id="register">
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>
          <input type="text" name="fname" placeholder="first name" onChange={this.onChange} />
          <br />
          <br />
          <input type="text" name="lname" placeholder="last name" onChange={this.onChange} />
          <br />
          <br />
          <input type="email" name="email" placeholder="email" onChange={this.onChange} />
          <br />
          <br />
          <input type="text" name="username" placeholder="username" onChange={this.onChange} />
          <br />
          <br />
          <input type="password" name="password" placeholder="password" onChange={this.onChange} />
          <br />
          <br />
          <input type="password" name="cpassword" placeholder="confirm password" onChange={this.onChange} />
          <br />
          <br />
          <input type="submit" className="view" id="submit" value="Register" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Register;
