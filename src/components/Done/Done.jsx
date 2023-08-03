import { useEffect, useState } from "react";
import SingleDoneTask from "../SingleDoneTask/SingleDoneTask";


const Done = () => {

    // TODO: add a message if no task is listed

    const [allDoneTasks, setAllDoneTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allDoneTasks')
        .then(res => res.json())
        .then(data => setAllDoneTasks(data))
    }, [])

    return (
        <div className="w-9/12 mx-auto grid grid-cols-3 mt-10 gap-10">
            {
                allDoneTasks.map(singleDoneTask => <SingleDoneTask
                    key={singleDoneTask._id}
                    singleDoneTask={singleDoneTask}
                    allDoneTasks={allDoneTasks}
                    setAllDoneTasks={setAllDoneTasks}
                ></SingleDoneTask>)
            }
        </div>
    );
};

export default Done;