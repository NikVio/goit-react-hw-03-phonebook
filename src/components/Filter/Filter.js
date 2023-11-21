import {
  FormGroup,
  FilterBox,
  FilterInput,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <FilterBox>
      <FormGroup>
        Find contacts by name{' '}
        <FilterInput
          type="text"
          value={filter}
          onChange={evt => onUpdateFilter(evt.target.value)}
        />
      </FormGroup>
    </FilterBox>
  );
};
