import express from 'express';
import cors from 'cors'
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import newsRoutes from './routes/news.routes.js'
import fileUpload from 'express-fileupload'
import imagesRoutes from './routes/images.routes.js'
import imagesFRoutes from './routes/imagesF.routes.js'
import imagesContactRoutes from './routes/imagesContact.routes.js'


const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true, 
    tempFileDir: './upload'
}))

app.use(indexRoutes);
app.use(newsRoutes);
app.use(imagesRoutes);
app.use(imagesFRoutes);
app.use(imagesContactRoutes);


app.listen(PORT);
console.log(`Server is listening on por ${PORT}`);