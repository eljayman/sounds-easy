const { Schema, model } = require('mongoose');

// soundboard references the user and sounds
const soundboardSchema = new Schema(
    {
        sounds: [{type: Schema.Types.ObjectId, ref: 'Sound'}],
        users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }
    
)

// counts the number of sounds in the soundboard
soundboardSchema.virtual('soundCount').get(function () {
    return this.sounds.length;
  });

  // compile the soundboard schema into the model
const Soundboard = model('Soundboard', soundboardSchema);

model.exports = Soundboard;
