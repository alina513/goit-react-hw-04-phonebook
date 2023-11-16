import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const contactKey = 'contact';
const initialContacts = [];

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(contactKey);
  return savedContacts!== null?JSON.parse(savedContacts):initialContacts;

}
export const App = () => {
  

  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState("");


  

  useEffect(()=>{window.localStorage.setItem(
    contactKey,
    JSON.stringify(contacts)
  );},[contacts])

  

 const addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => 
        [...prevContacts, newContact],
      );
    }
  };

  const updateFilter = newFilter => {
    setFilter(newFilter );
  };
  const deletecontact = contactId => {
    setContacts(prevContacts => 
         prevContacts.filter(item => item.id !== contactId),
      
    );
  };

  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingLeft: '20px',
          paddingBottom: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm submit={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} updateFilter={updateFilter} />
        {contacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onDelete={deletecontact}
          />
        )}
      </div>
    );
  }

