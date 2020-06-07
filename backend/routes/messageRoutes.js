const router = require("express").Router();
let Message = require("../models/message");

router.route("/").get((req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newMsg = new Message({
    name,
    email,
    message
  });
  newMsg
    .save()
    .then(() => {
      res.json("Message added");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
