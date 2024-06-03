import { Form, Formik } from 'formik'
import { useImagesF } from '../../context/ImagesFProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function ContentFooter() {

    const { createImagesF, getImagesF, updateImagesF } = useImagesF();
    const [images, setImages] = useState({
        image: null,
        
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadImagesF = async () => {
            if (params.id) {
                const images = await getImagesF(params.id);
                setImages({
                    image: images.image,
                    
                });
            }
        };
        loadImagesF();
    }, []);



    return (
        <div className="flex-grow max-w-xl space-y-4 p-4 mx-auto">
            <h1 className='text-2xl'>Subir nueva imagen</h1>
            <Formik
                initialValues={images}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    if (params.id) {
                        await updateImagesF(params.id, values)
                        navigate("/profile")
                    } else {
                        await createImagesF(values);
                    }
                    actions.resetForm();
                    actions.setSubmitting(false);
                    navigate("/profile")
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting, setFieldValue }) => (
                    <Form className="w-max-w space-y-2 mb-10" onSubmit={handleSubmit}>
                        <label className="flex flex-col">Logo pie de página</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="file"
                            name='image'
                            onChange={(e) => setFieldValue("image", e.target.files[0])}
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

export default ContentFooter;


