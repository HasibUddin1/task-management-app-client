import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="xl:flex">
            <div className="xl:w-[15%]">
                <NavigationBar></NavigationBar>
            </div>
            <div className="xl:w-[85%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;