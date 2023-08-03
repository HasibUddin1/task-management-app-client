import { useEffect, useState } from "react";
import SingleOnHoldTask from "../SingleOnHoldTask/SingleOnHoldTask";


const OnHold = () => {

    // TODO: add a message if no task is listed

    const [allOnHoldTasks, setAllOnHoldTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allOnHoldTasks')
            .then(res => res.json())
            .then(data => setAllOnHoldTasks(data))
    }, [])

    return (
        <div className={allOnHoldTasks.length> 9 ? 'xl:bg-slate-200' : 'xl:bg-slate-200 h-screen'}>
            {allOnHoldTasks.length === 0 && <h1 className="text-4xl font-bold text-center text-fuchsia-500 pt-10">You did not selected any on hold task</h1>}
            <div className="xl:w-9/12 mx-auto grid xl:grid-cols-3 py-10 gap-10 px-5 xl:px-0">
                {
                    allOnHoldTasks.map(singleOnHoldTask => <SingleOnHoldTask
                        key={singleOnHoldTask._id}
                        singleOnHoldTask={singleOnHoldTask}
                        allOnHoldTasks={allOnHoldTasks}
                        setAllOnHoldTasks={setAllOnHoldTasks}
                    ></SingleOnHoldTask>)
                }
            </div>
        </div>
    );
};

export default OnHold;