import Navbar from "../../components/Profile/navbar.jsx";
import Sidebar from "../../components/Profile/sidebar.jsx";
import Nav from "../../components/Profile/contentNav.jsx"
import Header from "../../components/Profile/contentHeader.jsx"
import Footer from "../../components/Profile/contentFooter.jsx"
import Appointment from "../../components/Profile/contentReserva.jsx"


const Account = () => {
    return (
    <>
    <Navbar />
    <div className="flex">
        <Sidebar />
        {/* añadir contenido a pagina principal de perfil*/}
        
      </div>
    </>
    );
};

export default Account;