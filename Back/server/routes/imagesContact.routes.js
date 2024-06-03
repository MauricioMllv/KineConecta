import { Router } from "express";
import {
    getImagesC,
    getImageC,
    createImagesC,
    deleteImagesC
} from '../controllers/images.controllerContact.js'

const router = Router()

router.get('/imagesc', getImagesC)

router.get('/imagec/:id', getImageC)

router.post('/imagesc', createImagesC)

router.delete('/imagesc/:id', deleteImagesC)

export default router