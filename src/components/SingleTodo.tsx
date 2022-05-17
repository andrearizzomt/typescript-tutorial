import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styled from "@emotion/styled";

const Form = styled("form")((props) => ({
  display: "flex",
  width: "80%",
  borderRadius: "5px",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "green",
}));

const TaskName = styled("span")((props) => ({
  flex: "1",
  padding: "5px",
  fontSize: "20px",
}));

const EditInput = styled("input")((props) => ({
  flex: "1",
  padding: "5px",
  fontSize: "20px",
  borderRadius: "10px",
  border: "none",
}));

const Icon = styled("span")((props) => ({
  padding: "5px",
  fontSize: "20px",
  cursor: "pointer",
  color: "black",
}));

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: Number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Form onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <EditInput
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></EditInput>
      ) : todo.isDone ? (
        <TaskName>
          <s>{todo.todo}</s>
        </TaskName>
      ) : (
        <TaskName>{todo.todo}</TaskName>
      )}
      <Icon>
        <AiFillEdit
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        />
      </Icon>
      <Icon>
        <AiFillDelete onClick={() => handleDelete(todo.id)} />
      </Icon>
      <Icon>
        <MdDone onClick={() => handleDone(todo.id)} />
      </Icon>
    </Form>
  );
};

export default SingleTodo;
