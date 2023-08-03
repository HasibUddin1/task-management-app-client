import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-[15%]">
                <NavigationBar></NavigationBar>
            </div>
            <div className="lg:w-[85%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;