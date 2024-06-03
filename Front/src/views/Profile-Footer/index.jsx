import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import Footer from "../../components/Profile/contentFooter.jsx"
import Card from "../../components/Profile/contentPreviewFooter.jsx"

const ProfileFooter = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <div className="flex-col mx-auto">
        <Card />
        <Footer />
        </div>
        
        
        
      </div>
    </>
    );
};

export default ProfileFooter;