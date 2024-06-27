import UserModel from '../models/usermodel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = 'b0e1dda149cabcdd11540dac1a304afb418d705c9b7995839bfef1f1b1ca25d1';  // Asegúrate de usar una clave secreta segura y configurarla en tu archivo .env

// Login function
export const loginUser = async (req, res) => {
    const { mail, password } = req.body;
    try {
        const user = await UserModel.findOne({ mail });
        if (!user) {
            return res.status(400).json({ message: 'Correo o contraseña inválidos' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Correo o contraseña inválidos' });
        }

        const token = jwt.sign({ id: user._id }, secret, {
            expiresIn: '1h',
        });

        res.json({ token, user: { id: user._id, mail: user.mail } });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// Register function
export const registerUser = async (req, res) => {
    const { name, mail, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ mail });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new UserModel({ name, mail, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, secret, {
            expiresIn: '1h',
        });

        res.status(201).json({ token, user: { id: newUser._id, mail: newUser.mail } });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
};
