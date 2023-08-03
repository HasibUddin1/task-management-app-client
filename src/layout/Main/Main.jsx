import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="flex">
            <div className="w-1/6">
                <NavigationBar></NavigationBar>
            </div>
            <div className="w-5/6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;