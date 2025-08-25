export interface LoginData {
  email: string;
  password: string;
}
export interface ErrorState {
  email?: string;
  password?: string;
}
export const validate = (values: LoginData) => {
  const newErrors: ErrorState = {};
  if (!values.email.trim()) newErrors.email = "Email is required";
  if (!values.password.trim()) newErrors.password = "Password is required";
  return newErrors;
};
