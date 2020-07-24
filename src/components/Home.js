import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  img {
    width: 100%;
    position: cover;
    button {
      text-align: center;
    }
  }
`;

export default function Home() {
  const history = useHistory();
  const routeToOrder = () => {
    history.push("/pizza");
  };
  return (
    <StyledDiv>
      <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
      <br />
      <button onClick={routeToOrder}>Order now!</button>
    </StyledDiv>
  );
}
