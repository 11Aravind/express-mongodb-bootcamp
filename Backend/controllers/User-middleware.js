import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const getUserDetails = async (req, res, next) => {
    let userDetails;
    try {
        userDetails = await User.find();
    }
    catch (error) {
        console.log(error);
    }
    if (!userDetails)
        return res.status(404).json({ message: "No User found" })
    return res.status(200).json({ userDetails });
}


export const signupMiddleware = async (req, res, next) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword
    });
    let existingEmail;
    try{
        existingEmail=User.findOne({email})
        if(existingEmail)
            return res.status(200).json({message:"The E-mail was exist"})
    }catch(error)
    {
        console.log(error);
    }

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ user })
}
export const loginMiddleware=async(req,res,next)=>{


}