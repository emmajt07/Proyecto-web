import HouseModel from '../models/housemodel.js';

// Obtener todas las viviendas
export const getAllHouses = async (req, res) => {
    try {
        const houses = await HouseModel.find();
        res.json(houses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva vivienda
export const createHouse = async (req, res) => {
    const { title, description, price } = req.body;
    const newHouse = new HouseModel({ title, description, price });

    try {
        const createdHouse = await newHouse.save();
        res.status(201).json(createdHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una vivienda por ID
export const getHouseById = async (req, res) => {
    try {
        const house = await HouseModel.findById(req.params.id);
        if (!house) {
            return res.status(404).json({ message: 'Vivienda no encontrada' });
        }
        res.json(house);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una vivienda por ID
export const updateHouse = async (req, res) => {
    const { title, description, price } = req.body;
    try {
        const updatedHouse = await HouseModel.findByIdAndUpdate(
            req.params.id,
            { title, description, price },
            { new: true }
        );
        if (!updatedHouse) {
            return res.status(404).json({ message: 'Vivienda no encontrada' });
        }
        res.json(updatedHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una vivienda por ID
export const deleteHouse = async (req, res) => {
    try {
        const deletedHouse = await HouseModel.findByIdAndRemove(req.params.id);
        if (!deletedHouse) {
            return res.status(404).json({ message: 'Vivienda no encontrada' });
        }
        res.json({ message: 'Vivienda eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
