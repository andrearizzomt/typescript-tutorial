import React from "react";
import styled from "@emotion/styled";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

const TaskContainer = styled("div")((props) => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
}));

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <TaskContainer>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </TaskContainer>
  );
};

export default TodoList;
