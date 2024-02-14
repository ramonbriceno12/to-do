import { useState, useEffect } from "react";

export async function GetTasks(){
    // const [tasks, setTasks] = useState(null);

    try {
        const res = await fetch('http://localhost:8080/')
        // console.log(await res.json())
        return await res.json()
    } catch (error) {
        console.error('Error', error)
    }
    
}


export async function CreateTask(formData){
    try {
        const res = await fetch('http://localhost:8080/new-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    } catch (error) {
        console.error('Error', error)
    }
}