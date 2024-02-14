'use client'

import { useState, useEffect } from "react";

export default function TasksList() {
    
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(false)


    const loadData = () => {
        try {

            useEffect(() => {
                const fetchData = async () => {
                  const response = await fetch('http://localhost:8080');
                  const data = await response.json();
                  setData(data);
                };
                fetchData();
            }, []);
    
            
        } catch (error) {
            console.error('Error', error)
        }
    }

    loadData()

    const handleStatus = async (event) => {

        const id = event.target.id;
        const isChecked = event.target.checked;

        try {
            
            const res = await fetch('http://localhost:8080/change-task-status',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:id, isChecked: isChecked})
            })

            await res.json()

        } catch (error) {
            console.log('Error', error)
        }
    }

    const removeTask = async (id) => {
        try {
            
            const res = await fetch('http://localhost:8080/remove-task',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:id})
            })

            await res.json()
            setData((prevState) => prevState.filter((row) => row.id !== id))
        // Handle successful submission here
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <div className="container px-10 flex flex-col mt-20">
            <a
                type="button"
                href="/tasks/new-task"
                className="flex w-1/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create new task
            </a>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm text-black">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Title</th>
                                    <th scope="col" className="px-6 py-4">Description</th>
                                    <th scope="col" className="px-6 py-4">Due date</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && (
                                        data.map(task => (
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{task.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{task.title}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{task.description}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{task.due_date}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <input type="checkbox" id={task.id} onChange={handleStatus} defaultChecked={task.is_completed === true ? 'checked' : ''} className="h-4 w-4 rounded border-gray-300 checked:bg-blue-500 checked:ring-blue-500 focus:ring-blue-500"></input>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <button onClick={() => removeTask(task.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
  }