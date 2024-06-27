import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
        required: true,
    }
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'mail',
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
