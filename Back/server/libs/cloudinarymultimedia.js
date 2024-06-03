import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "ddk5jmarr",
    api_key: "818669939424215",
    api_secret: "kbnBpz_VlX8fo-AiAIPvjm_KeaQ"
})

export const uploadImageNav = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Nav-logo'
    })
}
export const uploadImageSlider = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Slider'
    })
}
export const uploadImageFooter = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Footer-logo'
    })
}
export const uploadImageReservas = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Slider-reservas'
    })
}
export const uploadImageContacto = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Contacto'
    })
}
export const uploadImageNosotros = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Nosotros'
    })
}
export const uploadImageServicios = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Multimedia/Servicios'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}