const express = require('express');
const router = express.Router();
const data = require('../data');

/* INDEX TO DONT */
router.get('/', function(req,res) {
  res.render('todonts/index', {
    todonts: data.seededTodonts
  });
});

/* NEW TO DONT */
router.get('/new', (req, res) => {
  res.render('todonts/new');
})

/* SHOW TO DONT */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todont = data.seededTodonts[id];
  res.render('todonts/show',{
    todont: todont,
    id:id
  });
});
//EDIT TO DONT

router.get('/:id/edit', (req,res)=> {
  const id = req.params.id;
  const todont = data.seededTodonts[id];
  res.render('todonts/edit', {
    todont: todont,
    id: id
  })
});
//UPDATE TO DONT
router.put('/:id', (req,res)=> {
  //w have the ID
const id = req.params.id;
//Use the ID to grab specific index in array
const todont = data.seededTodonts[id];
//Update the description and urgent values
todo.description = req.body.description;
todo.urget = req.body.urgent;
//redirect backs to individual todo
res.method = 'GET';
res.redirect(`/todonts/${id}`);
});
//SAVE TO DONT
router.post('/', (req,res)=> {
  console.log(req.body);

  const newTodont = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededTodonts.push(newTodont);

  res.redirect("/todonts");
});
//DELETE TODO
router.delete('/:id', function(req, res) {
    data.seededTodonts.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todonts');  // redirect back to the index route
});


module.exports = router;