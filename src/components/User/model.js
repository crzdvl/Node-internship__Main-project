const { Schema } = require('mongoose');
const { mongoDBConnections } = require('../../config/connection');

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'usermodel',
        versionKey: false,
    },
);

module.exports = mongoDBConnections.model('UserModel', UserSchema);
