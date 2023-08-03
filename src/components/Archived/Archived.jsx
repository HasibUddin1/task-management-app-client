import { useEffect, useState } from "react";
import SingleArchivedTask from "../SingleArchivedTask/SingleArchivedTask";


const Archived = () => {

    // TODO: add a message if no task is listed

    const [allArchivedTasks, setAllArchivedTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allArchivedTasks')
            .then(res => res.json())
            .then(data => setAllArchivedTasks(data))
    }, [])

    return (
        <div className="w-9/12 mx-auto grid grid-cols-3 mt-10 gap-10">
            {
                allArchivedTasks.map(singleArchivedTask => <SingleArchivedTask
                    key={singleArchivedTask._id}
                    singleArchivedTask={singleArchivedTask}
                    allArchivedTasks={allArchivedTasks}
                    setAllArchivedTasks={setAllArchivedTasks}
                ></SingleArchivedTask>)
            }
        </div>
    );
};

export default Archived;