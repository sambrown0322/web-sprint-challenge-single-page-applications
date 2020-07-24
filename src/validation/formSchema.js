import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  phone: yup.number().min(8).required("A phone number is required"),
  size: yup.string(),
  toppings: yup
    .string()
    .oneOf([
      "pepperoni",
      "sausage",
      "bacon",
      "ham",
      "greenPeppers",
      "pineapple",
      "tomatoes",
      "mushrooms",
    ]),
  special: yup.string(),
});
export default formSchema;
