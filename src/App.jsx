import React, { useState } from 'react';
import './App.css';
import AddPersonForm from './components/AddPersonForm';
import ContactList from './components/ContactList';

function ContactManager() {
  const [contacts, setContacts] = useState([]);

  // We add the new person to contacts' array
  function addPerson(person) {
    setContacts([...contacts, person]);
  }

  // Having the components together in a father one, they can share their states between them and,
  // therefore, their data
  return (
    <>
      <h1>Contact Manager</h1>
      <AddPersonForm handleAdd={addPerson} />
      <ContactList data={contacts} />
    </>
  );
}

export default ContactManager;
