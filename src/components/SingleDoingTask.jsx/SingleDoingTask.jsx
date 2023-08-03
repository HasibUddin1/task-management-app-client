

const SingleDoingTask = ({ singleDoingTask }) => {

    const { taskTitle, taskStatus, taskDescription } = singleDoingTask

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-blue-600 font-semibold">{taskTitle}</h2>
                <p>{taskDescription}</p>
                <p className="font-semibold text-lg">Status: {taskStatus}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">Update</button>
                    <button className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleDoingTask;