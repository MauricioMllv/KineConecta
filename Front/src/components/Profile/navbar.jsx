import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#084D6E] p-4 flex items-center justify-between">
      <div>
        <h1 className="text-white text-xl"><span className='font-bold'>KineConecta</span>, Administración</h1>
      </div>
      <div className="flex items-center space-x-4">
        <h2 className="text-white text-xl">Bienvenido, <span className='font-bold'>Admin</span></h2>
        <a className='text-white' href="">
          <i className="fa-solid fa-right-from-bracket text-xl"></i>
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
