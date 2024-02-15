'use client'

import TasksList from "../components/tasks/tasks-list"
import { Suspense } from "react"
export default function Page(){
       
    return(
        <div>
            <Suspense fallback={<div>Loading table...</div>}>
                <TasksList/>
            </Suspense>
        </div>
    )
}