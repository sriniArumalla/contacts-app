import React from "react";
import { Contact } from "./Contact";

export const ContactList = ({ contacts, deleteContact }) => {
  return React.Children.toArray(
    contacts.map((contact) => (
      <Contact contact={contact} deleteContact={deleteContact} />
    ))
  );
};
