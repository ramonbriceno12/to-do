'use client'

import MyAlert from "../alert/alert";

export default function CreateTask({
    
    alert, 
    alertMessage, 
    alertType, 
    dismissAlert,
    handleSubmit,
    handleChange

}){
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                {alert && <MyAlert message={alertMessage} type={alertType} handleDismiss={dismissAlert}/>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            autoComplete="title"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            autoComplete="description"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="due_date" className="block text-sm font-medium leading-6 text-gray-900">
                            Due Date
                        </label>
                        <div className="mt-2">
                            <input
                            id="due_date"
                            name="due_date"
                            type="date"
                            onChange={handleChange}
                            autoComplete="due_date"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}