import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home";
import Doing from "../components/Doing/Doing";
import OnHold from "../components/OnHold/OnHold";
import Done from "../components/Done/Done";
import Archived from "../components/Archived/Archived";
import AddTask from "../components/AddTask/AddTask";
import UpdateATask from "../components/UpdateATask/UpdateATask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/doing',
                element: <Doing></Doing>
            },
            {
                path: '/onHold',
                element: <OnHold></OnHold>
            },
            {
                path: '/done',
                element: <Done></Done>
            },
            {
                path: '/archived',
                element: <Archived></Archived>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            },
            {
                path: 'updateATask',
                element: <UpdateATask></UpdateATask>
            }
        ]
    }
])

export default router;