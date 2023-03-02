const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Soundboard = require('./Soundboard');
// require Soundboard model for reference

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
  soundboards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Soundboard',
    },
  ],
});

// middleware to hash password any time the user is created or updated
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// middleware deletes all soundboards a user created when it is deleted
userSchema.post('findOneAndDelete', function (user) {
    Soundboard.deleteMany({ username: user.username }).exec();
  });

  // method on the schema to check the password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// compile the schema into the model
const User = model('User', userSchema);

module.exports = User;