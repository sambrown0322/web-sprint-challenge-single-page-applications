import React from "react";

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
    <form onSubmit={onSubmit}>
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
      <div className="toppings">
        Toppings:
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onCheckboxChange}
            checked={formValues.toppings.pepperoni}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onCheckboxChange}
            checked={formValues.toppings.sausage}
          />
        </label>
        <label>
          Bacon
          <input
            type="checkbox"
            name="bacon"
            onChange={onCheckboxChange}
            checked={formValues.toppings.bacon}
          />
        </label>
        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            onChange={onCheckboxChange}
            checked={formValues.toppings.ham}
          />
        </label>
        <label>
          Green peppers
          <input
            type="checkbox"
            name="greenPeppers"
            onChange={onCheckboxChange}
            checked={formValues.toppings.greenPeppers}
          />
        </label>
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={onCheckboxChange}
            checked={formValues.toppings.pineapple}
          />
        </label>
        <label>
          Tomatoes
          <input
            type="checkbox"
            name="tomatoes"
            onChange={onCheckboxChange}
            checked={formValues.toppings.tomatoes}
          />
        </label>
        <label>
          Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            onChange={onCheckboxChange}
            checked={formValues.toppings.mushrooms}
          />
        </label>
      </div>
      <label htmlFor="special">
        Special Instructions:
        <textarea
          id="special"
          name="special"
          placeholder="Special Instructions here"
          onChange={onInputChange}
        />
      </label>
      <button
      //   disabled={disabled}
      >
        Add to Order
      </button>
    </form>
  );
}
