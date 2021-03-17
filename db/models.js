const mongoose = require('mongoose');
const dbAdress = 'mongodb://localhost:27017/test';
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const Item = mongoose.model('Item', {
  name: String,
  price: { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
});

async function seeder() {
  await Item.deleteMany();
  await Item.create({ name: 'Table' });
  await Item.create({ name: 'Chair' });
  await Item.create({ name: 'Plate' });
}

module.exports = {
  dbAdress,
  dbOptions,
  Item,
  seeder,
};
