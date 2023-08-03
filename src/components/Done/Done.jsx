import { useEffect, useState } from "react";
import SingleDoneTask from "../SingleDoneTask/SingleDoneTask";
import useTitle from "../../hooks/useTitle";


const Done = () => {

    useTitle('Done')

    const [allDoneTasks, setAllDoneTasks] = useState([])

    useEffect(() => {
        fetch('https://task-management-app-server-snowy.vercel.app/allDoneTasks')
            .then(res => res.json())
            .then(data => setAllDoneTasks(data))
    }, [])

    return (
        <div className={allDoneTasks.length > 9 ? 'xl:bg-slate-200' : 'xl:bg-slate-200 h-screen'}>
            {allDoneTasks.length === 0 && <h1 className="text-4xl font-bold text-center text-green-500 pt-10">You did not selected any done task</h1>}
            <div className="xl:w-9/12 mx-auto grid xl:grid-cols-3 py-10 gap-10 px-5 xl:px-0">
                {
                    allDoneTasks.map(singleDoneTask => <SingleDoneTask
                        key={singleDoneTask._id}
                        singleDoneTask={singleDoneTask}
                        allDoneTasks={allDoneTasks}
                        setAllDoneTasks={setAllDoneTasks}
                    ></SingleDoneTask>)
                }
            </div>
        </div>
    );
};

export default Done;