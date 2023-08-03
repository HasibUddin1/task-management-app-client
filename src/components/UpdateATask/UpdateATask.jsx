import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const UpdateATask = () => {

    useTitle('Update A Task')

    const { id } = useParams()

    const [error, setError] = useState('')

    const [selectedTask, setSelectedTask] = useState({})

    useEffect(() => {
        fetch(`https://task-management-app-server-snowy.vercel.app/getSingleTask/${id}`)
            .then(res => res.json())
            .then(data => setSelectedTask(data))
    }, [id])

    const handleUpdateTask = event => {
        event.preventDefault()

        const form = event.target
        const taskTitle = form.taskTitle.value
        const taskStatus = form.taskStatus.value
        const taskDescription = form.taskDescription.value

        if(!taskTitle){
            setError('Task Title cannot be empty')
            return
        }

        if(!taskStatus){
            setError('Task Status cannot be empty')
            return
        }

        if(!taskDescription){
            setError('Task Description cannot be empty')
            return
        }

        const updatedTask = {
            taskTitle,
            taskStatus,
            taskDescription
        }
        fetch(`https://task-management-app-server-snowy.vercel.app/updateATask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully updated the task',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className="p-5 xl:p-20 bg-slate-300 h-screen">
            <form onSubmit={handleUpdateTask}>
                <div className="xl:flex gap-10">
                    <div className="xl:w-1/2">
                        <label className="text-xl font-semibold" htmlFor="taskTitle">Task Title</label>
                        <input defaultValue={selectedTask?.taskTitle} className="w-full px-4 py-2 rounded-lg block mt-2" type="text" name="taskTitle" id="taskTitle" placeholder="Task Title" />
                    </div>
                    <div className="xl:w-1/2">
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
                    <textarea defaultValue={selectedTask?.taskDescription} style={{ resize: 'none' }} className="block px-4 py-2 rounded-md w-full mt-2" name="taskDescription" id="taskDescription" cols="30" rows="5" placeholder="Task Description"></textarea>
                </div>
                <div className="mt-5">
                    <input className="btn btn-success font-bold w-full" type="submit" value="Update Task" />
                </div>
                {error && <p className="text-red-500 font-semibold">{error}</p>}
            </form>
        </div>
    );
};

export default UpdateATask;