import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import About from "../../components/Profile/contentAbout.jsx"

const ProfileAbout = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <About />
        
        
      </div>
    </>
    );
};

export default ProfileAbout;