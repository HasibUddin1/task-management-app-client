import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="flex">
            <div className="w-[15%]">
                <NavigationBar></NavigationBar>
            </div>
            <div className="w-[85%] bg-slate-200 h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;