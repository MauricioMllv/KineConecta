import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import Appointment from "../../components/Profile/contentReserva.jsx"

const ProfileAppointment = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        <Appointment />
        
        
      </div>
    </>
    );
};

export default ProfileAppointment;