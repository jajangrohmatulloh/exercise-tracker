const router = require('express').Router();
const User = require('../models/user');
const Admin = require('../models/admin');

router.route('/').get((req, res) => {
    User.find()
     .then(doc => res.json(doc))
     .catch(err => res.status(400).json(err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username})

    newUser.save()
     .then(doc => res.json(doc))
     .catch(err => res.status(400).json(err))
})

router.route('/add-detail/:username').put((req, res) => {
    User.updateOne(
        {username: req.params.username},
        {detail: {
            description: req.body.description,
            duration: Number(req.body.duration),
            date: Date(req.body.date).toLocaleUpperCase()
        }}
        )
        .then(doc => res.json(doc))
        .catch(err => res.status(400).json(err))
})

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({_id: req.params.id})
     .then(doc => res.json(doc))
     .catch(err => res.status(400).json(err))
})

router.route('/login').post((req, res) => {
    Admin.find({name: req.body.name, password: req.body.password})
    .then(doc => res.json(doc))
    .catch(err => res.json(err).status(400))
})

module.exports = router;