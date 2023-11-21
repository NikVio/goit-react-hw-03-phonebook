import { NameContact, DeleteBtn, WrapperContact } from './Contacts.styled';

export const Contacts = ({ el: { name, id, number }, Delete }) => {
  return (
    <WrapperContact>
      <NameContact>
        {name}: <span>{number}</span>
      </NameContact>
      <DeleteBtn onClick={() => Delete(id)} type="button">
        Delete
      </DeleteBtn>
    </WrapperContact>
  );
};
