import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

//Global Resets and Font
const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jura", "sans-serif";
  }
`;

const Body = styled("div")((props) => ({
  backgroundColor: "black",
  color: "white",
  height: "100vh",
  width: "100%",
}));

const HeaderHeading = styled("h1")((props) => ({
  fontSize: "45px",
  fontWeight: "700",
  backgroundColor: "grey",
  color: "white",
  padding: "10px",
  textAlign: "center",
}));

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <Body>
        <HeaderHeading>TASKIFY</HeaderHeading>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        ></InputField>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </Body>
    </>
  );
};

export default App;
