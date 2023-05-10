import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import BG from "../../assets/bg.jfif";

const MainLayout = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed relative bg-gradient-to-br from-blue-900 to-blue-700 dark:bg-black bg-[#ffffff00]"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
