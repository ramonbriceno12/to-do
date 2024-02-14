'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import LoginForm from "../components/login/login-form";

export default function Page(){

    const router = useRouter()

    const [formData, setFormData] = useState({email: '', password: ''})
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertType, setAlertType] = useState('info')

    const dismissAlert = () => setAlert(false)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        // console.log(formData)

        try {
            const res = await fetch('http://localhost:8080/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(!res.ok){
                setAlert(true)
                setAlertMessage('Invalid username or password')
                setAlertType('danger')
            }else{

                const resData = await res.json()

                setAlert(true)
                setAlertMessage(`Welcome ${resData.email}`)
                setAlertType('success')

                const token = resData.token;

                localStorage.setItem('token', token)

                setTimeout(() => {
                    router.push('/tasks/')
                }, 2000)

            }

        } catch (error) {
            console.log('Error', error)
        }


    }

    return(
        <LoginForm alert={alert} alertMessage={alertMessage} alertType={alertType} dismissAlert={dismissAlert} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}