import { useEffect, useState } from "react";
import ImagesCard from "./contentPreviewCardNav.jsx";
import { useImages } from "../../context/ImagesProvider.jsx";

const PreviewPage = () => {
    
    const {images, loadImages} = useImages();
  
    useEffect(() => {
      loadImages();
    }, []);

    function RenderImages() {
        if (images.length === 0) return <h1 className="font-bold text-2xl mx-auto my-5">Aún no hay Imagen</h1>
        return (
        <div className="">
          {images.map(images => (
            <ImagesCard images={images} key={images.id} />
          ))}
        </div>
        )
    }
  
    return (
      <div className="flex flex-col items-center mb-10 sm:px-5 md:px-10">
        
        {RenderImages()}
        
      </div>
    );
  };
  
  export default PreviewPage;
