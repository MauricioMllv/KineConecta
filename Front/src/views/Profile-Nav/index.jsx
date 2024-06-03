import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import Nav from "../../components/Profile/contentNav.jsx";
import Card from "../../components/Profile/contentPreviewNav.jsx"

const ProfileNav = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <div className="flex-col mx-auto">
        <Card />
        <Nav />
        </div>
        
        
        
      </div>
    </>
    );
};

export default ProfileNav;