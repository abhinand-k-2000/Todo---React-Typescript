import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import { TodoModel } from "./todoModel";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodoos] = useState<TodoModel[]>([]);

  function handleAdd(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (todo.trim()) {
      setTodoos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("")
    }
  }

  // console.log(todos);

  return (
    <>
      <div className="bg-slate-600 h-screen text-center">
        <header className="text-white font-bold p-5  text-3xl">
          Ultimate TODOs{" "}
        </header>

        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodo={setTodoos}/>


      </div>
    </>
  );
}

export default App;
