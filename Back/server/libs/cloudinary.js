import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "ddk5jmarr",
    api_key: "818669939424215",
    api_secret: "kbnBpz_VlX8fo-AiAIPvjm_KeaQ"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'News/Card'
    })
}
export const uploadImage2 = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'News/Full'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}