import React from "react";

function Pizza({ details }) {
  if (!details) {
    return <h3>Fetching...</h3>;
  }
  return (
    <div className="pizzaPost">
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Phone: {details.phone}</p>
      <p>
        Size: {details.size}
        <span>
          {" "}
          Toppings:
          {!!details.toppings && !!details.toppings.length && (
            <ul>
              {details.toppings.map((topping, idx) => (
                <li key={idx}>{topping}</li>
              ))}
            </ul>
          )}
        </span>
      </p>
      <p>Special instructions: {details.special}</p>
    </div>
  );
}
export default Pizza;
