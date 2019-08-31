export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const validateSignUpForm = (form: SignUpFormType) => {
  console.log('VALIDATE', form);
};
