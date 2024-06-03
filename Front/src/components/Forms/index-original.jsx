import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const handleClearClick = () => {
        reset();
    };
    const handleSubmitForm = (data) => {
        console.log(data);
    };
    console.log(errors)

    return (
        <form className="max-w-md space-y-4 p-4 mb-10" onSubmit={handleSubmit(handleSubmitForm)}>
            <label className="flex flex-col">
                Nombre
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('nombre', {required: true})}  />
            </label>
            <label className="flex flex-col">
                Apellido
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('apellido', {required: true})} />
            </label>
            <label className="flex flex-col">
                Dirección
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('direccion', {required: true})} />
            </label>
            <label className="flex flex-col">
                Comuna
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('comuna', {required: true})} />
            </label>
            <label className="flex flex-col">
                Correo
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('correo', {required: true})} />
            </label>
            <label className="flex flex-col">
                Teléfono
                <input className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('telefono', {required: true})} />
            </label>
            <label className="flex flex-col">
                Motivo
                <textarea className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" {...register('motivo')} />
            </label>
	        <div className="flex justify-end space-x-4">
            <button type="button" onClick={handleClearClick} className="px-4 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">Limpiar</button>
            <button type="submit" className="px-4 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">Enviar</button>
            </div>  
        </form>
    );
};

export default Form;