import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const contactId = uuidv4();
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className="formLabel">
          <p className={styles.inputName}>Name </p>
          <input
            className={styles.formInput}
            id={contactId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className="formLabel">
          <p className={styles.inputName}> Number</p>
          <input
            className={styles.formInput}
            id={contactId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
