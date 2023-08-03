import Swal from "sweetalert2";


const SingleOnHoldTask = ({ singleOnHoldTask, allOnHoldTasks, setAllOnHoldTasks }) => {

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
                fetch(`http://localhost:5000/deleteTask/${id}`, {
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
                            const remaining = allOnHoldTasks.filter(task => task._id !== id)
                            setAllOnHoldTasks(remaining)
                        }
                    })
            }
        })

    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-fuchsia-500 font-semibold">{taskTitle}</h2>
                <p>{taskDescription}</p>
                <p className="font-semibold text-lg">Status: {taskStatus}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">Update</button>
                    <button onClick={() => handleDeleteTask(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleOnHoldTask;