import { useContext, useState } from "react";
import { getImagesRequest, deleteImagesRequest, createImagesRequest, getImageRequest, updateImagesRequest } from "../Api/images.api";
import { ImagesContext } from "./ImagesContext";


export const useImages = () => {
    const context = useContext(ImagesContext)
    if (!context) {
        throw new Error("useImages must be used within a ImagesContextProvider");
    }
    return context;
};

export const ImagesContextProvider = ({ children }) => {

    const [images, setImages] = useState([]);

    async function loadImages() {
        const response = await getImagesRequest();
        setImages(response.data);
    }

    const deleteImages = async (id) => {
        try {
            const response = await deleteImagesRequest(id);
            setImages(images.filter(images => images.id !== id))

        } catch (error) {
            console.error(error);
        }
    };

    const createImages = async (images) => {
        try {
            const response = await createImagesRequest(images);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const getImage = async (id) => {
        try {
            const response = await getImageRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateImages = async (id, newFields) => {
        try {
            const response = await updateImagesRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }       
    };

    return (
        <ImagesContext.Provider value={{ images, loadImages, deleteImages, createImages, getImage, updateImages }}>
            {children}
        </ImagesContext.Provider>
    );
};