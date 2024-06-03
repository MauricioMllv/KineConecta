function LogoFooter ({ images }) {
    
    return (
      <div>
          {images.url && <img src={(images.url)} className="size-40" />}      
      </div>
    );
  };
  
  export default LogoFooter;