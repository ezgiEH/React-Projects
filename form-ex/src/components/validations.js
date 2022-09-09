import * as yup from 'yup';

const validations = yup.object({
    email: yup
    .string()
    .email('Geçerli bir email giriniz.')
    .required('Boş bırakmayınız.'),

    password: yup
    .string()
    .min(5,'En az 5 karakter olmalı.')
    .required('Boş bırakmayınız.'),

    passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler eşleşmiyor')
    .required('Boş bırakmayınız.'),
  });

  export default validations;