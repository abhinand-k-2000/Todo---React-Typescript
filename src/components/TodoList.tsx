import React from 'react'
import { TodoModel } from '../todoModel'
import SingleTodo from './SingleTodo';

interface Props {
    todos: TodoModel[];
    setTodo: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList = ({todos, setTodo}: Props) => {
  return (
    <div className='flex flex-wrap justify-center '>
        {todos.map((item) => (
            <SingleTodo todo={item} key={item.id} todos={todos} setTodo={setTodo}/>
        ))}
    </div>
  )
}

export default TodoList