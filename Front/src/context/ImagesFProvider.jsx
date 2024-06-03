import { useContext, useState } from "react";
import { getImagesFRequest, deleteImagesFRequest, createImagesFRequest, getImageFRequest } from "../Api/imagesF.api";
import { ImagesFContext } from "./ImagesFContext";


export const useImagesF = () => {
    const context = useContext(ImagesFContext)
    if (!context) {
        throw new Error("useImages must be used within a ImagesFContextProvider");
    }
    return context;
};

export const ImagesFContextProvider = ({ children }) => {

    const [images, setImages] = useState([]);

    async function loadImagesF() {
        const response = await getImagesFRequest();
        setImages(response.data);
    }

    const deleteImagesF = async (id) => {
        try {
            const response = await deleteImagesFRequest(id);
            setImages(images.filter(images => images.id !== id))

        } catch (error) {
            console.error(error);
        }
    };

    const createImagesF = async (images) => {
        try {
            const response = await createImagesFRequest(images);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const getImageF = async (id) => {
        try {
            const response = await getImageFRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ImagesFContext.Provider value={{ images, loadImagesF, deleteImagesF, createImagesF, getImageF }}>
            {children}
        </ImagesFContext.Provider>
    );
};