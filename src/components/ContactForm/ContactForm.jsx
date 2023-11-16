import React from 'react';
import { useState } from 'react';
import css from './ContactForm.module.css';
export const ContactForm = ({submit}) => {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = event => {
    const { name, value } = event.target;
    if(name==="name") {
      setName(value)
    }
    if(name==="number") {
      setNumber(value)
    }


    // this.setState({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    submit({name, number});
    
    
    event.target.reset();
  };

  
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          required
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          id="number"
          onChange={handleInputChange}
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

