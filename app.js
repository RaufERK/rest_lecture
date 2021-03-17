const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { dbAdress, dbOptions, Item, seeder } = require('./db/models');
mongoose.connect(dbAdress, dbOptions, async () => {
  console.log('Connect to Base!!');
  // seeder();
});

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .route('/')
  .get(async (req, res) => {
    console.log('=====GET / ====>');
    const items = await Item.find();
    res.render('index', { items });
  })
  .post(async (req, res) => {
    console.log(' ==POST BODY==>', req.body);
    await Item.create(req.body);
    res.redirect('/');
  })
  .delete(async (req, res) => {
    console.log(' ==DELETE===>  BODY:', req.body);
    await Item.findByIdAndDelete(req.body.id);
    res.sendStatus(200).end();
  });

app.put('/:id', async (req, res) => {
  console.log('===PUT====>', req.params);
  res.sendStatus(200).end();
  //
});

app.listen(3000);
