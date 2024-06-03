import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import EditNews from "../../components/Profile/contentNews.jsx"

const ProfileEditNews = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <EditNews />
        
        
      </div>
    </>
    );
};

export default ProfileEditNews;