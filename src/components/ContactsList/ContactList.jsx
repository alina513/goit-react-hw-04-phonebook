import { Contact } from 'components/Contact/Contact';
export const ContactsList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(value => (
      <Contact value={value} key={value.id} onDelete={onDelete} />
    ))}
  </ul>
);
