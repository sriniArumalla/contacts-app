import { useState } from "react";
import "./App.css";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const createContact = (newContact) => setContacts([...contacts, newContact]);

  const deleteContact = (uuid) =>
    setContacts(contacts.filter((item) => item.id !== uuid));

  return (
    <div className="App">
      <h1>Contacts</h1>
      <AddContact createContact={createContact} />{" "}
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
