import User from "../models/User.js";
import bcrypt from 'bcryptjs';
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    const hashedPassword=bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password:hashedPassword
    });
    try {

        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({user})
}