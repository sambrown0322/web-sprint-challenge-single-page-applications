import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import formSchema from "../validation/formSchema";
import * as yup from "yup";
import Pizza from "./Pizza";
import styled from "styled-components";
// https://reqres.in/api/users
const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  size: "",
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    ham: false,
    greenPeppers: false,
    pineapple: false,
    tomatoes: false,
    mushrooms: false,
  },
  special: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  phone: "",
};
const initialPizzas = [];
const initialDisabled = true;

const HomeStyle = styled.header`
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin: 2% 0;
  }
`;
const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizzas([res.data], ...pizzas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    // Validation
    setFormValues({ ...formValues, [name]: value });
  };
  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      },
    });
  };
  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      phone: formValues.phone,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(
        (topping) => formValues.toppings[topping]
      ),
      special: formValues.special.trim(),
    };
    postNewPizza(newPizza);
  };
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
      console.log(valid);
    });
  }, [formValues]);
  return (
    <>
      <div className="App">
        <HomeStyle>
          <h1>Sam's Pizza</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
          </nav>
        </HomeStyle>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Form
            formValues={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            formErrors={formErrors}
          />
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.name} details={pizza} />;
          })}
        </Route>
      </div>
    </>
  );
};
export default App;
