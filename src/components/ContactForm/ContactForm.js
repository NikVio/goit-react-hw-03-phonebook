import { Formik } from 'formik';

import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormBtn,
} from './ContactForm.styled';

import * as Yup from 'yup';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,
      'It must be min 5 numbers (1234567 or 123-45-67)'
    )
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onAdd(values);
      }}
    >
      <Form>
        <FormGroup>
          Name <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Number <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </FormGroup>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
