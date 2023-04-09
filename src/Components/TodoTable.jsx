import React from 'react'
import TodoRow from './TodoRow'

const TodoTable = ({ todos, setTodos }) => {
    return (
        <div className='flex justify-center items-center'>
            <table className='shadow-2xl font-[Poppins] border-2 border-blue-700 w-6/12 overflow-hidden'>
                <thead className="text-white">
                    <tr>
                        <th className="bg-blue-700 py-3">Activity</th>
                        <th className="bg-blue-700 py-3">Status</th>
                        <th className="bg-blue-700 py-3">Time Taken</th>
                        <th className="bg-blue-700 py-3">Action</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    {
                        todos.map((todo) => {
                            if (!todo.isDeleted) {
                                return <TodoRow
                                    key={todo.id}
                                    todo={todo}
                                    setTodos={setTodos}
                                />
                            }
                            else return null
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable