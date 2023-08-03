import { useEffect, useState } from "react";
import SingleDoingTask from "../SingleDoingTask.jsx/SingleDoingTask";
import SingleOnHoldTask from "../SingleOnHoldTask/SingleOnHoldTask";
import SingleDoneTask from "../SingleDoneTask/SingleDoneTask";
import SingleArchivedTask from "../SingleArchivedTask/SingleArchivedTask";



const Home = () => {

    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allTasks')
            .then(res => res.json())
            .then(data => setAllTasks(data))
    }, [])

    const allDoingTasks = allTasks.filter(task => task.taskStatus === 'Doing')
    const allOnHoldTasks = allTasks.filter(task => task.taskStatus === 'On Hold')
    const allDoneTasks = allTasks.filter(task => task.taskStatus === 'Done')
    const allArchivedTasks = allTasks.filter(task => task.taskStatus === 'Archived')

    return (
        <div className={allDoingTasks.length > 3 || allOnHoldTasks.length > 3 || allDoneTasks.length > 3 || allArchivedTasks.length > 3 ? 'lg:flex lg:flex-wrap xl:flex-nowrap gap-5 px-5 pb-10 xl:bg-slate-200' : 'lg:flex lg:flex-wrap xl:flex-nowrap gap-5 px-5 pb-10 h-screen xl:bg-slate-200'}>
            {/* All Doing Tasks Section */}
            <div className="xl:w-1/4">
                <h1 className="text-blue-500 font-bold text-2xl border-t-4 border-blue-500 text-center mt-10">Doing</h1>
                <div className="flex flex-col items-center gap-10 mt-5 bg-slate-400 p-5 rounded-2xl">
                    {
                        allDoingTasks.map(singleDoingTask => <SingleDoingTask
                            key={singleDoingTask._id}
                            singleDoingTask={singleDoingTask}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                        ></SingleDoingTask>)
                    }
                </div>
            </div>
            {/* All On Hold Tasks Section */}
            <div className="xl:w-1/4">
                <h1 className="text-fuchsia-500 font-bold text-2xl border-t-4 border-fuchsia-500 text-center mt-10">On Hold</h1>
                <div className="flex flex-col items-center gap-10 mt-5 bg-slate-400 p-5 rounded-2xl">
                    {
                        allOnHoldTasks.map(singleOnHoldTask => <SingleOnHoldTask
                            key={singleOnHoldTask._id}
                            singleOnHoldTask={singleOnHoldTask}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                        ></SingleOnHoldTask>)
                    }
                </div>
            </div>
            {/* All Done Tasks Section */}
            <div className="xl:w-1/4">
                <h1 className="text-green-500 font-bold text-2xl border-t-4 border-green-500 text-center mt-10">Done</h1>
                <div className="flex flex-col items-center gap-10 mt-5 bg-slate-400 p-5 rounded-2xl">
                    {
                        allDoneTasks.map(singleDoneTask => <SingleDoneTask
                            key={singleDoneTask._id}
                            singleDoneTask={singleDoneTask}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                        ></SingleDoneTask>)
                    }
                </div>
            </div>
            {/* All Archived Tasks Section */}
            <div className="xl:w-1/4">
                <h1 className="text-orange-500 font-bold text-2xl border-t-4 border-orange-500 text-center mt-10"> Archived</h1>
                <div className="flex flex-col items-center gap-10 mt-5 bg-slate-400 p-5 rounded-2xl">
                    {
                        allArchivedTasks.map(singleArchivedTask => <SingleArchivedTask
                            key={singleArchivedTask._id}
                            singleArchivedTask={singleArchivedTask}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                        ></SingleArchivedTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;