import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(10, "First name cannot be longer than 10 characters")
    .required("Please enter your First name"),
  last_name: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(10, "Last name cannot be longer than 10 characters")
    .required("Please enter your Last name"),
  mobile_no: Yup.number()
    .min(10, "please enter 10 digit number")
    .required("please enter your number"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
export const userProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(10, "First name cannot be longer than 10 characters")
    .required("Please enter your First name"),
  last_name: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(10, "Last name cannot be longer than 10 characters")
    .required("Please enter your Last name"),
  mobile_no: Yup.number()
    .min(10, "please enter 10 digit number")
    .required("please enter your number"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
});

export const forgotPasswordSchema = Yup.object().shape({
  current_password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  new_password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter new password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please re-enter your new password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});
