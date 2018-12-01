import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Entries extends Component {
  componentWillMount() {
    const { getAllEntries, token } = this.props;
    getAllEntries(token);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <table align="center">
          <thead>
            <tr>
              <th>Created At</th>
              <th>title</th>
              <th>action</th>
            </tr>
          </thead>
          {data.map(entry => (
            <tbody key={entry.ID}>
              <tr>
                <td>
                  {new Date(entry['date created']).toDateString()}
                </td>
                <td style={{ paddingLeft: '10%', paddingRight: '20%' }}>
                  {entry.title}
                </td>
                <td>
                  <span>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                  </span>
                </td>
                <span style={{ display: 'none' }}>
                  {entry.entry}
                </span>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

Entries.propTypes = {
  getAllEntries: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Entries;
