import { Router } from "express";
import {
    getNews,
    getNew,
    createNews,
    deleteNews,
    updateNews
} from '../controllers/news.controller.js'

const router = Router()

router.get('/news', getNews)

router.get('/news/:id', getNew)

router.post('/news', createNews)

router.put('/news/:id', updateNews)

router.delete('/news/:id', deleteNews)

export default router