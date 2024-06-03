import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import Head from "../../components/Profile/contentHeader.jsx"

const ProfileHeader = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <Head />
        
        
      </div>
    </>
    );
};

export default ProfileHeader;