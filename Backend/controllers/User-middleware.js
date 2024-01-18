import User from "../models/User.js";
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password
    });
    try {

        await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({user})
}