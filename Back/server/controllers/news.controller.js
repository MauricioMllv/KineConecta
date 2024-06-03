import { pool } from '../db.js'
import { uploadImage } from '../libs/cloudinary.js'
import { uploadImage2 } from '../libs/cloudinary.js'
import { deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getNews = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM news ORDER BY createdAt DESC"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getNew = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM news WHERE id = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "News not found" });
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const createNews = async (req, res) => {
    try {
        const { title, description, content } = req.body;
        let imagefull;
        let imagecard;
        

        if (req.files.imagefull && req.files.imagecard) {
            const result = await uploadImage(req.files.imagefull.tempFilePath)
            await fs.remove(req.files.imagefull.tempFilePath)
            imagefull = {
                url: result.secure_url,
                public_id: result.public_id
            }
            
            const resultCard = await uploadImage2(req.files.imagecard.tempFilePath)
            await fs.remove(req.files.imagecard.tempFilePath)
            imagecard = {
                url: resultCard.secure_url,
                public_id: resultCard.public_id
            }
            
            
        }
        console.log(req.files)

        const [result] = await pool.query(
            "INSERT INTO news(title, description, content, imagefull, imagecard) VALUES (?, ?, ?, ?, ?)",
            [title, description, content, JSON.stringify(imagefull), JSON.stringify(imagecard)]
        );

        res.json({
            id: result.insertId,
            title,
            description,
            content,
            imagefull: {
                url: "",
                public_id: ""
            },
            imagecard: {
                url: "",
                public_id: ""
            }
            

        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message });
    }

};

export const updateNews = async (req, res) => {
    try {
        const result = await pool.query(
            "UPDATE news SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteNews = async (req, res) => {
    try {
        const [result] = await pool.query(
            "DELETE FROM news WHERE id = ?", [
            req.params.id,
        ]);
        
        if (result.imagefull) {
            await deleteImage(JSON.parse.result.imagefull.public_id);
        }
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "News not found" });



        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar desde back imagenes en cloudinary, modificar tabla news agregando a imagefull y imagecard como json
// imagefull JSON NOT NULL,
// imagecard JSON NOT NULL,