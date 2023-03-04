const db = require('../config/connection');
const { User, Sound } = require('../models');
const userSeeds = require('./userSeeds.json');
const soundSeeds = require('./soundSeeds.json');

db.once('open', async () => {
  try {
    await User.create(userSeeds);
    await Sound.create(soundSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
