const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// require Soundboard model for reference

const soundboardSchema = new Schema(
  {
      sounds: [{type: Schema.Types.ObjectId, ref: 'Sound'}],
  }
  
)

// counts the number of sounds in the soundboard
soundboardSchema.virtual('soundCount').get(function () {
  return this.sounds.length;
});

// user schema defines shape of object to be stored
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate email address
    match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        'Please use a valid email address',
      ],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // array of soundboards for the user
  soundboard: soundboardSchema  
});

// middleware to hash password any time the user is created or updated
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

  // method on the schema to check the password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// compile the schema into the model
const User = model('User', userSchema);

module.exports = User;