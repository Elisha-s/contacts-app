import Header  from './components/Header.js';
import React, {useState, useEffect} from "react";
import AddContact  from './components/AddContact.js';
import ContactList  from './components/ContactList.js';
import './App.css';
import {v4 as uuid} from "uuid";

function App() {

const LOCAL_STORAGE_KEY = "contacts";
const [contacts, setContacts] = React.useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

function addContactHandler(contact){
  console.log(contact);
  setContacts([...contacts,{id:uuid(), ...contact}]);
};

function removeContactHandler(id)
{
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });
  setContacts(newContactList);
};

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts));
}, [contacts]);

  return (
    <div className="ui container">
    <Header />
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
