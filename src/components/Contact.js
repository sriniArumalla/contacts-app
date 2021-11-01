export const Contact = ({ contact, deleteContact }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        margin: "1rem 7rem",
      }}
    >
      <div style={{ margin: "1rem" }}>
        <p>name: {contact.name}</p>
        <p>email: {contact.email}</p>
      </div>

      <button onClick={() => deleteContact(contact.id)}>delete</button>
    </div>
  );
};
