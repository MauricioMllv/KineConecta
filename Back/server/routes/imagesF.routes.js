import { Router } from "express";
import {
    getImagesF,
    getImageF,
    createImagesF,
    deleteImagesF
} from '../controllers/images.controllerF.js'

const router = Router()

router.get('/imagesf', getImagesF)

router.get('/imagef/:id', getImageF)

router.post('/imagesf', createImagesF)

router.delete('/imagesf/:id', deleteImagesF)

export default router