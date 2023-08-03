import { NavLink } from "react-router-dom";


const NavigationBar = () => {
    return (
        <div className="flex flex-col gap-5 font-bold text-xl bg-slate-200 xl:bg-white">
            <div className="p-2">
                <div className="mb-10 bg-fuchsia-300 rounded-2xl p-5 flex items-center justify-between xl:justify-start gap-5">
                    <p className="">Task Management</p>
                    <div className="w-[40px] h-[40px] bg-fuchsia-500 rounded-full">
                    </div>
                </div>
            </div>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/'>Home</NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/doing'>Doing</NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/onHold'>On Hold</NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/done'>Done</NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/archived'>Archived</NavLink>
            <NavLink className={({ isActive }) =>
                isActive
                    ? "text-fuchsia-500 border-l-4 border-fuchsia-500 w-fit px-4 py-1"
                    : "hover:text-fuchsia-500 hover:border-l-4 border-fuchsia-500 ease-in-out duration-200 w-fit px-4 py-1"
            } to='/addTask'>Add Task</NavLink>
        </div>
    );
};

export default NavigationBar;