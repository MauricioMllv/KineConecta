import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import CreateNews from "../../components/Profile/CreateNews.jsx"

const ProfileCreateNews = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <CreateNews />
        
        
      </div>
    </>
    );
};

export default ProfileCreateNews;