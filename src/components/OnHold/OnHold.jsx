import { useEffect, useState } from "react";
import SingleOnHoldTask from "../SingleOnHoldTask/SingleOnHoldTask";


const OnHold = () => {

    const [allOnHoldTasks, setAllOnHoldTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allOnHoldTasks')
        .then(res => res.json())
        .then(data => setAllOnHoldTasks(data))
    }, [])

    return (
        <div className="w-9/12 mx-auto grid grid-cols-3 mt-10 gap-10">
            {
                allOnHoldTasks.map(singleOnHoldTask => <SingleOnHoldTask
                    key={singleOnHoldTask._id}
                    singleOnHoldTask={singleOnHoldTask}
                ></SingleOnHoldTask>)
            }
        </div>
    );
};

export default OnHold;