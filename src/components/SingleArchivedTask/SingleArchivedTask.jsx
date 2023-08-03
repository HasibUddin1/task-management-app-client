

const SingleArchivedTask = ({ singleArchivedTask }) => {

    const { _id, taskTitle, taskStatus, taskDescription } = singleArchivedTask

    const handleDeleteTask = (id) => {
        console.log(id)
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-orange-500 font-semibold">{taskTitle}</h2>
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

export default SingleArchivedTask;