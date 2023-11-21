import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 350px;
  margin-top: 15px;
`;

export const Field = styled(FormikField)`
  padding: 10px;
  line-height: 20px;
  font-size: 14px;
  color: rgb(40, 50, 80);
  border-radius: 5px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 240, 250);
  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 28px;
  font-size: 16px;
  color: rgb(40, 52, 138);
  font-weight: 500;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const FormBtn = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px 30px;
  font-size: 14px;
  line-height: 30px;
  background: rgb(40, 52, 138);
  border: 1px solid rgb(40, 52, 138);
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 500;
  border-radius: 5px;
  text-align: center;
`;

export const FilterBox = styled.div`
  max-width: 400px;
  margin: 20px 0 20px 0;
`;

export const FilterInput = styled.input`
  padding: 10px;
  line-height: 20px;
  font-size: 14px;
  color: rgb(40, 50, 80);
  border-radius: 5px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 240, 250);
  box-shadow: 0 5px 4px rgba(110, 120, 130, 0.2);
`;
