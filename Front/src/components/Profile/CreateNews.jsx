import { Form, Formik } from 'formik'
import { useNews } from '../../context/NewsProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function form() {

    const { createNews, getNews, updateNews } = useNews();
    const [news, setNews] = useState({
        title: "",
        description: "",
        content: "",
        imagefull: null,
        imagecard: null,
        
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadNews = async () => {
            if (params.id) {
                const news = await getNews(params.id);
                setNews({
                    title: news.title,
                    description: news.description,
                    content: news.content,
                    imagefull: news.imagefull,
                    imagecard: news.imagecard,
                    
                });
            }
        };
        loadNews();
    }, []);


    return (
        <div className="flex-grow max-w-xl space-y-4 p-4 mx-auto">
            <h1 className='text-2xl'>{params.id ? "Editar Publicación" : "Crear Publicación"}</h1>
            <Formik
                initialValues={news}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateNews(params.id, values)
                        navigate("/profile-manage-news")
                    } else {
                        await createNews(values);
                    }
                    actions.resetForm({
                        title: "",
                        description: "",
                        content: "",
                        imagefull: null,    
                        imagecard: null
                       
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting, setFieldValue }) => (
                    <Form className="w-max-w space-y-2 mb-10" onSubmit={handleSubmit}>
                        <label className="flex flex-col">Titulo</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='title'
                            onChange={handleChange}
                            value={values.title}
                        />
                        <label className="flex flex-col">Descripción</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='description'
                            onChange={handleChange}
                            value={values.description}
                        />
                        <label className="flex flex-col">Contenido</label>
                        <textarea className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            rows="5"
                            name='content'
                            onChange={handleChange}
                            value={values.content}
                        />
                        <label className="flex flex-col">Imagen principal</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="file"
                            name='imagefull'
                            onChange={(e) => setFieldValue("imagefull", e.target.files[0])}
                            
                        />
                        <label className="flex flex-col">Imagen Card</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="file"
                            name='imagecard'
                            onChange={(e) => setFieldValue("imagecard", e.target.files[0])}
                            
                        />


                        <span className="flex justify-end space-x-4">
                            <button type='submit' disabled={isSubmitting} className="flex justify-center my-4 px-12 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">{isSubmitting ? "Publicando..." : "Publicar"}</button>

                        </span>




                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default form;