

const AddTask = () => {

    const handleAddTask = event => {
        event.preventDefault()

        const form = event.target
        const taskTitle = form.taskTitle.value
        const taskStatus = form.taskStatus.value
        const taskDescription = form.taskDescription.value

        console.log(taskTitle, taskStatus, taskDescription)
    }

    return (
        <div className="mt-10 p-10">
            <form onSubmit={handleAddTask}>
                <div className="flex gap-10">
                    <div className="w-1/2">
                        <label className="text-xl font-semibold" htmlFor="taskTitle">Task Title</label>
                        <input className="w-full px-4 py-2 rounded-lg block mt-2" type="text" name="taskTitle" id="taskTitle" placeholder="Task Title" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-xl font-semibold" htmlFor="taskStatus">Task Status</label>
                        <select className="w-full px-4 py-2 rounded-lg block mt-2" name="taskStatus" id="taskStatus">
                            <option value="doing">Doing</option>
                            <option value="onHold">On Hold</option>
                            <option value="done">Done</option>
                            <option value="archived">Archived</option>
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
            </form>
        </div>
    );
};

export default AddTask;