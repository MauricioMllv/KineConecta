
function LogoNav ({ images }) {
    
    return (
      <div>
          {images.url && <img src={(images.url)} className="h-[40px]" />}      
      </div>
    );
  };
  
  export default LogoNav;