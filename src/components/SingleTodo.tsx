import React, { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

import { TodoModel } from "../todoModel";

type Props = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodo: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const SingleTodo = ({ todo, todos, setTodo }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleComplete = (id: number) => {
    setTodo((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    const index = todos.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = { ...updatedTodos[index], todo: editTodo };

      setTodo(updatedTodos);
    }

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="bg-yellow-500 rounded-md flex justify-between w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 m-4 p-4"
    >
      {edit ? (
        <input
          ref={inputRef}
          className="pl-3 w- rounded-md"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="flex space-x-5 ">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>

        <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <LuDelete />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => handleComplete(todo.id)}
        >
          <FaCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
