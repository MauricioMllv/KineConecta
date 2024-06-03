import { Router } from "express";
import {
    getImages,
    getImage,
    createImages,
    updateImages,
    deleteImages
} from '../controllers/images.controller.js'

const router = Router()

router.get('/images', getImages)

router.get('/image/:id', getImage)

router.post('/images', createImages)

router.put('/images/:id', updateImages)

router.delete('/images/:id', deleteImages)

export default router