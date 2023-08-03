import { useState } from "react";
import Swal from "sweetalert2";


const AddTask = () => {

    const [error, setError] = useState('')

    const handleAddTask = event => {
        event.preventDefault()

        const form = event.target
        const taskTitle = form.taskTitle.value
        const taskStatus = form.taskStatus.value
        const taskDescription = form.taskDescription.value

        if (!taskTitle) {
            setError('Task Title cannot be empty')
            return
        }

        if (!taskStatus) {
            setError('Task Status cannot be empty')
            return
        }

        if (!taskDescription) {
            setError('Task Description cannot be empty')
            return
        }

        const task = {
            taskTitle,
            taskStatus,
            taskDescription
        }

        fetch('http://localhost:5000/allTasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your task has been added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className="p-5 lg:p-20 bg-slate-300 h-screen">
            <form onSubmit={handleAddTask}>
                <div className="lg:flex gap-10">
                    <div className="lg:w-1/2">
                        <label className="text-xl font-semibold" htmlFor="taskTitle">Task Title</label>
                        <input className="w-full px-4 py-2 rounded-lg block mt-2" type="text" name="taskTitle" id="taskTitle" placeholder="Task Title" />
                    </div>
                    <div className="lg:w-1/2">
                        <label className="text-xl font-semibold" htmlFor="taskStatus">Task Status</label>
                        <select className="w-full px-4 py-2 rounded-lg block mt-2" name="taskStatus" id="taskStatus">
                            <option value="Doing">Doing</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Done">Done</option>
                            <option value="Archived">Archived</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <label className="text-xl font-semibold" htmlFor="taskDescription">Task Description</label>
                    <textarea style={{ resize: 'none' }} className="block px-4 py-2 rounded-md w-full mt-2" name="taskDescription" id="taskDescription" cols="30" rows="5" placeholder="Task Description"></textarea>
                </div>
                <div className="mt-5">
                    <input className="btn btn-success font-bold w-full" type="submit" value="Add Task" />
                </div>
                {error && <p className="text-red-500 font-semibold">{error}</p>}
            </form>
        </div>
    );
};

export default AddTask;