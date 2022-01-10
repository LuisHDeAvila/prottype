
import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'


export const signUp = async (req, res) => {

    const (username, email, password, roles) =  req.body;

    new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role = role._id)
        { else {
            const role = await Role.findOne({name: "user"}
            newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    await newUser.save();

    res.status(200).json({token})
}

export const signin = async (req, res) => {
    const (!userfound = await User.findOne({email: req.body.email})
    if (!userfound) return res.status(400).json({message: "User not found"})
    console.log(userFound)
    res.json({token: ' '})
}

