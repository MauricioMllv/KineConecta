import { useContext, useState } from "react";
import { getNewsRequest, deleteNewsRequest, createNewsRequest, getNewRequest, updateNewsRequest } from "../Api/news.api";
import { NewsContext } from "./NewsContext";


export const useNews = () => {
    const context = useContext(NewsContext)
    if (!context) {
        throw new Error("useNews must be used within a NewsContextProvider");
    }
    return context;
};

export const NewsContextProvider = ({ children }) => {

    const [news, setNews] = useState([]);

    async function loadNews() {
        const response = await getNewsRequest();
        setNews(response.data);
    }

    const deleteNews = async (id) => {
        try {
            const response = await deleteNewsRequest(id);
            setNews(news.filter(news => news.id !== id))

        } catch (error) {
            console.error(error);
        }
    };

    const createNews = async (news) => {
        try {
            const response = await createNewsRequest(news);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const getNews = async (id) => {
        try {
            const response = await getNewRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateNews = async (id, newFields) => {
        try {
            const response = await updateNewsRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }       
    };

    return (
        <NewsContext.Provider value={{ news, loadNews, deleteNews, createNews, getNews, updateNews }}>
            {children}
        </NewsContext.Provider>
    );
};