import {Schema, model} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
        ref: "Role",
        type: Schema, types.ObjectId,
        },
      ],
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

userSchema.statics.encryptPassword = async (passowrd) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (passowrd, receivedPassword) => {
    await crypt.compare(password, receivedPassword)
}

export default model('User', userSchema);