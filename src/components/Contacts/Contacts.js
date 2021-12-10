import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Contacts extends Component {
  render() {
    const { onFilter, onDelete } = this.props;
    return (
      <ul className={styles.contactList}>
        {onFilter.map(({ id, name, number }) => {
          return (
            <li className={styles.contactListItem} key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button className="button" onClick={() => onDelete(id)} id={id}>
                Delete contact
              </button>
            </li>
          );
        })}
        {/* <button type="reset" className="button" onClick={onDeleteAll}>
          Delete all contacts
        </button> */}
      </ul>
    );
  }
}

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;
