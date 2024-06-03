import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
// import Contact from "../../components/Profile/contentContact.jsx"

const ProfileContact = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <div className="flex-col mx-auto">
        
        {/* <Contact /> */}
        </div>
        
        
        
      </div>
    </>
    );
};

export default ProfileContact;