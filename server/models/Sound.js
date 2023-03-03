const { Schema, model } = require('mongoose');

// model is name for and location of sound
const soundSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
})

// compile schema into model
const Sound = model('Sound', soundSchema);

module.exports = Sound;