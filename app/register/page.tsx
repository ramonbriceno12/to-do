'use client'

import RegisterForm from "../components/register/register-form"

import { useRouter } from "next/navigation"
import { useState } from "react"
import OutsideNavBar from "../components/outside-navbar"

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

        try {
            const res = await fetch('http://localhost:8080/users/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const resData = await res.json()

            if(!res.ok){

                setAlert(true)
                setAlertMessage(resData.msg)
                setAlertType('danger')

            }else{

                setAlert(true)
                setAlertMessage(`Welcome ${resData.user.email}`)
                setAlertType('success')

                const token = resData.user.token;
                console.log(token)
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
        <div>
            <OutsideNavBar/>
            <RegisterForm alert={alert} alertMessage={alertMessage} alertType={alertType} dismissAlert={dismissAlert} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}