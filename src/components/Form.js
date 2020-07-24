import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  text-align: center;
`;
export default function Form(props) {
  const {
    formValues,
    inputChange,
    checkboxChange,
    submit,
    disabled,
    formErrors,
  } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  return (
    <FormStyle onSubmit={onSubmit}>
      <label htmlFor="nameInput">
        Name:
        <input
          id="nameInput"
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={onInputChange}
        />
      </label>
      <br />
      <label htmlFor="emailInput">
        Email:
        <input
          id="emailInput"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={onInputChange}
        />
      </label>
      <br />
      <label htmlFor="phoneInput">
        Phone number:
        <input
          id="phoneInput"
          name="phone"
          type="tel"
          placeholder="(xxx) xxx-xxxx"
          onChange={onInputChange}
        />
      </label>
      <br />
      <label htmlFor="size">
        Select pizza size:
        <select onChange={onInputChange} name="size" value={formValues.size}>
          <option disabled value="">
            Select a size
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>
        <div className="formErrors">
          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.phone}</div>
          <div>{formErrors.size}</div>
        </div>
      </label>
      <br />
      <div className="toppings">
        Toppings:
        <br />
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onCheckboxChange}
            checked={formValues.toppings.pepperoni}
          />
        </label>
        <br />
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onCheckboxChange}
            checked={formValues.toppings.sausage}
          />
        </label>
        <br />
        <label>
          Bacon
          <input
            type="checkbox"
            name="bacon"
            onChange={onCheckboxChange}
            checked={formValues.toppings.bacon}
          />
        </label>
        <br />
        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            onChange={onCheckboxChange}
            checked={formValues.toppings.ham}
          />
        </label>
        <br />
        <label>
          Green peppers
          <input
            type="checkbox"
            name="greenPeppers"
            onChange={onCheckboxChange}
            checked={formValues.toppings.greenPeppers}
          />
        </label>
        <br />
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={onCheckboxChange}
            checked={formValues.toppings.pineapple}
          />
        </label>
        <br />
        <label>
          Tomatoes
          <input
            type="checkbox"
            name="tomatoes"
            onChange={onCheckboxChange}
            checked={formValues.toppings.tomatoes}
          />
        </label>
        <br />
        <label>
          Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            onChange={onCheckboxChange}
            checked={formValues.toppings.mushrooms}
          />
        </label>
        <br />
      </div>
      <br />
      <label htmlFor="special">
        Special Instructions:
        <br />
        <textarea
          id="special"
          name="special"
          placeholder="Special Instructions here"
          onChange={onInputChange}
        />
      </label>
      <br />
      <button
      //   disabled={disabled}
      >
        Add to Order
      </button>
    </FormStyle>
  );
}
