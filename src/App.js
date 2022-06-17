import Shop from "./Shop";
import React, {useState} from "react";
import styled from "styled-components";

const UIButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: disabled;
  }

  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`;

const UITitle = styled.h2`
  font-family: Helvetica;
`;


function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <UIButton onClick={() => setLogin(false)}>
          Выйти
        </UIButton>
      </>
    );
  } else {
    return (
      <>
        <UITitle>Нужно залогиниться!</UITitle>
        <UIButton onClick={() => setLogin(true)}>
          Войти
        </UIButton>
      </>
    );
  }
}

export default App;
