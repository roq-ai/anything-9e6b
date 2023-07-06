import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  specification: yup.string().required(),
  make_year: yup.number().integer().required(),
  model: yup.string().required(),
  engine: yup.string().required(),
  organization_id: yup.string().nullable(),
});
