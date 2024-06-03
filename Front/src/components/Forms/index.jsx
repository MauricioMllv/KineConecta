import { Form, Formik } from 'formik'

function form() {
    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    address: "",
                    location: "",
                    email: "",
                    phone: "",
                    reason: "",
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({handleChange, handleSubmit}) => (
                    <Form className="w-max-w space-y-2 mb-10" onSubmit={handleSubmit}>
                        <label className="flex flex-col">Nombre</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                            type="text"
                            name='name'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Apellido</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='lastname'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Dirección</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='address'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Comuna</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='location'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Correo</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name='email'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Teléfono</label>
                        <input className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="tel"
                            name='phone'
                            onChange={handleChange}
                        />
                        <label className="flex flex-col">Motivo</label>
                        <textarea className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            rows="5"
                            name='reason'
                            onChange={handleChange}
                        />


                        <button type='submit' className="flex justify-center my-4 px-12 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">Enviar</button>



                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default form;