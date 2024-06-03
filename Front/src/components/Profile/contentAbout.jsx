import { useForm } from "react-hook-form";

const ContentAbout = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const handleClearClick = () => {
        reset();
    };
    const handleSubmitForm = (data) => {
        console.log(data);
    };
    console.log(errors)

    return (
        <form className="max-w-md md:mx-auto mx-5 my-4 overflow-y-auto space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
            <label className="flex flex-col">
                Imagen Nosotros
                <input type="file" id="imagenes" accept="image/*" className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('imagen', {required: true})} />
            </label>
	        <div className="flex justify-end space-x-4">
            <button type="submit" className="px-6 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">Enviar</button>
            </div>  
        </form>
    );
};

export default ContentAbout;



