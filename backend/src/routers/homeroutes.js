import express from 'express';
import HouseModel from '../models/homesmodel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const houses = await HouseModel.find();
        res.json(houses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, description, price, location, amenities } = req.body;
    const newHouse = new HouseModel({ title, description, price, location, amenities });

    try {
        const createdHouse = await newHouse.save();
        res.status(201).json(createdHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', getHouse, (req, res) => {
    res.json(res.house);
});

async function getHouse(req, res, next) {
    let house;
    try {
        house = await HouseModel.findById(req.params.id);
        if (house == null) {
            return res.status(404).json({ message: 'Vivienda no encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.house = house;
    next();
}

router.patch('/:id', getHouse, async (req, res) => {
    if (req.body.title != null) {
        res.house.title = req.body.title;
    }
    if (req.body.description != null) {
        res.house.description = req.body.description;
    }
    if (req.body.price != null) {
        res.house.price = req.body.price;
    }
    if (req.body.location != null) {
        res.house.location = req.body.location;
    }
    if (req.body.amenities != null) {
        res.house.amenities = req.body.amenities;
    }

    try {
        const updatedHouse = await res.house.save();
        res.json(updatedHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', getHouse, async (req, res) => {
    try {
        await res.house.remove();
        res.json({ message: 'Vivienda eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
