export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpFormErrorType = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

type SignUpFormValidationStatusType = 'OK' | 'ERROR';

type SignUpFormValidationType = {
  status: SignUpFormValidationStatusType;
  err: SignUpFormErrorType;
};

const checkError = (
  err: SignUpFormErrorType
): SignUpFormValidationStatusType => {
  if (!err.email && !err.name && !err.password && !err.passwordConfirmation)
    return 'OK';
  return 'ERROR';
};

export const SignUpFormLabels = {
  email: 'email',
  name: 'name',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation'
};

export const validateSignUpForm = (
  form: SignUpFormType
): SignUpFormValidationType => {
  const err: SignUpFormErrorType = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  if (!form.email) err.email = 'Email não pode ser vazio';

  if (!form.name) err.name = 'Nome não pode ser vazio';

  if (!form.password) err.password = 'Senha não pode ser vazia';

  if (form.passwordConfirmation !== form.password)
    err.passwordConfirmation =
      'Confirmação de senha não bate com a senha escolhida';

  return {
    status: checkError(err),
    err
  };
};
