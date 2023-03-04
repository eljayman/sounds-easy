const { User, Sound } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('soundboard');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('soundboard');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('soundboard');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    sounds: async () => {
      return Sound.find();
    },
    sound: async (parent, { soundId }) => {
      return Sound.findOne({ _id: soundId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email or password!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSoundToBoard: async (parent, { soundId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              soundboard: { soundId },
            },
          }
        );
      }
      throw new AuthenticationError(
        'You need to be logged in to add to a soundboard!'
      );
    },
    removeSoundFromBoard: async (parent, { soundId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              soundboard: { soundId },
            },
          }
        );
      }
      throw new AuthenticationError('You need to be logged in to do that!');
    },
  },
};

module.exports = resolvers;
