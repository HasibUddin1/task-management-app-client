import { useEffect, useState } from "react";
import SingleDoingTask from "../SingleDoingTask.jsx/SingleDoingTask";


const Doing = () => {

    // TODO: add a message if no task is listed

    const [allDoingTasks, setAllDoingTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allDoingTasks')
            .then(res => res.json())
            .then(data => setAllDoingTasks(data))
    }, [])

    return (
        <div className={allDoingTasks.length > 9 ? 'lg:bg-slate-200' : 'lg:bg-slate-200 h-screen'}>
            {allDoingTasks.length === 0 && <h1 className="text-4xl font-bold text-center text-blue-500 pt-10">You did not selected any doing task</h1>}
            <div className='lg:w-9/12 mx-auto grid lg:grid-cols-3 py-10 gap-10 px-5 lg:px-0'>
                {allDoingTasks.map(singleDoingTask => <SingleDoingTask
                    key={singleDoingTask._id}
                    singleDoingTask={singleDoingTask}
                    allDoingTasks={allDoingTasks}
                    setAllDoingTasks={setAllDoingTasks}
                ></SingleDoingTask>)}
            </div>
        </div>
    );
};

export default Doing;