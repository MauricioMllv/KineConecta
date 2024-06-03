import React, { useState } from 'react';


const SidebarOption = ({ icon, text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="opcion-con-desplegable">
      <div
        className="flex flex-row items-center p-2 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="items-center mx-1">
          <i className={`fas ${icon} mr-1 block md:hidden`}></i>
          <span className='hidden md:block'>{text}</span>
        </div>
        <i className="fas fa-chevron-down text-xs"></i>
      </div>
      <ul className={`desplegable ml-4 ${isOpen ? '' : 'hidden'}`}>{children}</ul>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white md:w-64 w-30 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <SidebarOption icon="fa-solid fa-images" text="Multimedia">
            <li>
              <a href="profile-nav" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Barra de Navegación
              </a>
            </li>
            <li>
              <a href="profile-header" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Encabezado
              </a>
            </li>
            <li>
              <a href="profile-footer" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Pie de Página
              </a>
            </li>
            <li>
              <a href="profile-appointment" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Sección Reservas
              </a>
            </li>
            <li>
              <a href="profile-contact" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Sección Contacto
              </a>
            </li>
            <li>
              <a href="profile-about" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Sección Nosotros
              </a>
            </li>
          </SidebarOption>
          <SidebarOption icon="fa-solid fa-newspaper" text="Gestor Publicaciones">
            <li>
              <a href="profile-create-news" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Agregar
              </a>
            </li>
            <li>
              <a href="profile-manage-news" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Modificar
              </a>
            </li>
          </SidebarOption>
          <SidebarOption icon="fa-solid fa-calendar-check" text="Citas">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Gestión
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 items-center">
                <i className="fas fa-chevron-right mr-2 text-xs"></i>
                Configuración
              </a>
            </li>
          </SidebarOption>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
