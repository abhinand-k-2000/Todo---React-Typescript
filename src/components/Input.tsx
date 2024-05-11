import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    // handleAdd: () => void
    handleAdd(e: React.FormEvent<HTMLFormElement>): void
}

const Input = ({todo, setTodo, handleAdd}: Props) => {


    return (
        <div>
            <form onSubmit={handleAdd} className='flex flex-col sm:flex-row items-center justify-center'>
                <input 
                    type='text' 
                    value={todo} 
                    onChange={(e)=> setTodo(e.target.value)} 
                    placeholder='Enter a task...' 
                    className='w-full sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 rounded-md h-10 border mb-4 sm:mb-0'
                />
                <button 
                    type='submit' 
                    className='mt-3 sm:mt-0 p-3 bg-green-600 rounded-md ml-auto sm:ml-0'
                >
                    Add
                </button>
            </form>
        </div>
    )
    
}

export default Input