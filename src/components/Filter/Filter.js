import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className="container">
        <p className="filterTitle">Find contacts by name</p>
        <input
          className="formInput"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
