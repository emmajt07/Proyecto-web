import express from 'express';
import UserModel from '../models/usermodel.js';
import { loginUser, registerUser } from '../controllers/usercontroller.js';

const router = express.Router();

// Rutas para login y registro
router.post('/login', loginUser);
router.post('/register', registerUser);

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    const { name, mail, number } = req.body;
    const newUser = new UserModel({ name, mail, number });

    try {
        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener un usuario por ID
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
});

// Middleware para obtener un usuario por ID
async function getUser(req, res, next) {
    let user;
    try {
        user = await UserModel.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.user = user;
    next();
}

// Actualizar un usuario
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    if (req.body.mail != null) {
        res.user.mail = req.body.mail;
    }
    if (req.body.number != null) {
        res.user.number = req.body.number;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un usuario
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
