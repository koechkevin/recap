import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      entry: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { postNewEntry, token } = this.props;
    const body = this.state;
    postNewEntry(token, body);
    this.setState({ title: '', entry: '' });
  }

  render() {
    const { title, entry } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>New Entry</h2>
          <textarea maxLength="20" rows="1" cols="33" name="title" placeholder="Title" onChange={this.onChange} value={title} />
          <br />
          <br />
          <textarea rows="10" cols="33" name="entry" placeholder="Type an entry" onChange={this.onChange} value={entry} />
          <br />
          <br />
          <input type="submit" className="view" value="Post" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

NewEntry.propTypes = {
  postNewEntry: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default NewEntry;
