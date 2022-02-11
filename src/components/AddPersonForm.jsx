import React, { useState } from 'react';

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  // We send person's value to ContactManager's function if we have a not empty value
  // Then, we empty the text input
  function addToList() {
    if (person === '') {
      alert('Enter a value, please');
    } else {
      props.handleAdd(person);
      setPerson('');
    }
  }

  return (
    <div className='form'>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button onClick={addToList}> Add </button>
    </div>
  );
}

export default AddPersonForm;