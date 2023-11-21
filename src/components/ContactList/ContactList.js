import { Contacts } from './Contacts';
import { ContactBox } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ContactBox>
      {items.map(item => (
        <li key={item.id}>
          <Contacts el={item} Delete={onDelete} />
        </li>
      ))}
    </ContactBox>
  );
};
