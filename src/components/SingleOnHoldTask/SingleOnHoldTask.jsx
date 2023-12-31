import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleOnHoldTask = ({ singleOnHoldTask, allOnHoldTasks, setAllOnHoldTasks, allTasks, setAllTasks }) => {

    const { _id, taskTitle, taskStatus, taskDescription } = singleOnHoldTask

    const handleDeleteTask = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-management-app-server-snowy.vercel.app/deleteTask/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            if (allOnHoldTasks) {
                                const remaining = allOnHoldTasks.filter(task => task._id !== id)
                                setAllOnHoldTasks(remaining)
                            }

                            if (allTasks) {
                                const remaining = allTasks.filter(task => task._id !== id)
                                setAllTasks(remaining)
                            }
                        }
                    })
            }
        })

    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-fuchsia-500 font-semibold">{taskTitle}</h2>
                <p>{taskDescription}</p>
                <p className="font-semibold text-lg">Status: {taskStatus}</p>
                <div className="card-actions justify-end">
                    <Link to={`/updateATask/${_id}`}><button className="btn btn-info">Update</button></Link>
                    <button onClick={() => handleDeleteTask(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleOnHoldTask;