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
        <div className={allArchivedTasks.length > 9 ? 'bg-slate-200' : 'bg-slate-200 h-screen'}>
            {allArchivedTasks.length === 0 && <h1 className="text-4xl font-bold text-center text-orange-500 pt-10">You did not selected any archived task</h1>}
            <div className="w-9/12 mx-auto grid grid-cols-3 py-10 gap-10">
                {
                    allArchivedTasks.map(singleArchivedTask => <SingleArchivedTask
                        key={singleArchivedTask._id}
                        singleArchivedTask={singleArchivedTask}
                        allArchivedTasks={allArchivedTasks}
                        setAllArchivedTasks={setAllArchivedTasks}
                    ></SingleArchivedTask>)
                }
            </div>
        </div>
    );
};

export default Archived;