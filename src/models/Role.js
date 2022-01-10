import {Schema, model} from 'mongoose'

const roleSchema = new Schema(
    {
        name: String
    },
    {
        versionkey: false,
    }
);

{name: "admin,"}


export default model("Role", roleSchema);