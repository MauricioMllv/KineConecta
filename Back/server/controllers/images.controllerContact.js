import { pool } from '../db.js'
import { uploadImageContacto } from '../libs/cloudinarymultimedia.js'
import { deleteImage } from '../libs/cloudinarymultimedia.js'
import fs from 'fs-extra'

export const getImagesC = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM images WHERE section = 'contacto' ORDER BY id DESC LIMIT 1;"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getImageC = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM images WHERE id = ?", [
            req.params.id,
        ]);

        if (result.length === 0)
            return res.status(404).json({ message: "Image not found" });
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const createImagesC = async (req, res) => {
    try {
        let image;

        if (req.files && req.files.image) {
            const result = await uploadImageContacto(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id
            };
        } else {
            return res.status(400).json({ message: 'No image file upload' });
        }

        const section = 'contacto';

        const [result] = await pool.query(
            "INSERT INTO images(url, public_id, section) VALUES (?, ?, ?)",
            [image.url, image.public_id, section]
        );

        res.json({
            id: result.insertId,
            url: image.url,
            public_id: image.public_id,
            section
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};


export const deleteImagesC = async (req, res) => {
    try {
        const [images] = await pool.query(
            "SELECT * FROM images WHERE id = ?", [req.params.id]
        );

        if (images.length === 0) {
            return res.status(404).json({ message: "Image not found" });
        }

        const image = images[0];

        
        if (image.public_id) {
            await deleteImage(image.public_id);
        }

        
        const [deleteResult] = await pool.query(
            "DELETE FROM images WHERE id = ?", [req.params.id]
        );

        if (deleteResult.affectedRows === 0) {
            return res.status(404).json({ message: "Image not found" });
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
