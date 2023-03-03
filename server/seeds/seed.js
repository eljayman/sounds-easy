const db = require('../config/connection');
const { User, Sound } = require('../models');
const userSeeds = require('./userSeeds.json');
const soundSeeds = require('./soundSeeds.json');

db.once('open', async () => {
  try {
    await Sound.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < soundSeeds.length; i++) {
      const { _id, soundboardUser } = await Sound.create(soundSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: soundboardUser },
        {
          $addToSet: {
            soundboard: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});