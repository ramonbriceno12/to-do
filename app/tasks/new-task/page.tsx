'use client'

import CreateTask from "@/app/components/tasks/create-task-form"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Page(){

    const router = useRouter();
    const [formData, setFormData] = useState({ title: '', description: '', due_date: '' });
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertType, setAlertType] = useState('')

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const dismissAlert = () => setAlert(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            
            const res = await fetch('http://localhost:8080/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const resData = await res.json()

            if(resData.statusCode === '200'){
                setAlert(true)
                setAlertMessage('Data inserted successfully')
                setAlertType('success')

                setTimeout(() => {
                    router.push('/tasks/')
                }, 2000)
            }

        // Handle successful submission here
        } catch (error) {
            setAlert(true)
            setAlertMessage('There was a problem inserting the data')
            setAlertType('danger')
        }
    };
    return(
        <CreateTask alert={alert} alertMessage={alertMessage} alertType={alertType} dismissAlert={dismissAlert} handleSubmit={handleSubmit} handleChange={handleChange}/>
    )
}