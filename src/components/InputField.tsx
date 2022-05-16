import React from "react";
import styled from "@emotion/styled";

const Form = styled("form")((props) => ({
  position: "relative",
  padding: "50px",
  display: "flex",
  alignItems: "center",
}));

const InputBox = styled("input")((props) => ({
  width: "100%",
  height: "50px",
  borderRadius: "50px",
  padding: "10px 20px",
  fontSize: "20px",
  fontWeight: "300",
  border: "none",
  transition: "0.2s",
  boxShadow: "inset 0 0 5px black",
}));

const Button = styled("button")`
  position: absolute;
  right: 56px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-weight: 700;
  background-color: lime;
  box-shadow: inset 0 0 10px black;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
  &:active {
    transform: scale(0.8);
    box-shadow: inset 0 0 5px black;
  }
`;

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <Form>
      <InputBox
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add new task"
      ></InputBox>
      <Button type="submit">ADD</Button>
    </Form>
  );
};

export default InputField;
