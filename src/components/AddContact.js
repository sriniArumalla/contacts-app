import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddContact = ({ createContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newContact = {
          id: uuid(),
          name: contact.name,
          email: contact.email,
        };
        createContact(newContact);
        setContact({ name: "", email: "" });
      }}
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
