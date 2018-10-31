const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    Employee.find({})
        .then(employees => {
            res.send(employees);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    const employee = req.body.employee;
    Employee.create(employee)
        .then(newEmployee => res.send(newEmployee))
        .catch(err => res.status(500).send(err));
})

router.put('/', (req, res) => {
    const employee = req.body;
    if (!employee.id) res.status(400).end();
    Employee.findOneAndUpdate({ _id: employee.id }, employee)
        .then(_ => res.end())
        .catch(err => res.status(500).send(err));
})

router.delete('/', (req, res) => {
    console.log(req.query);
    const id = req.query.id;
    Employee.deleteOne({ _id: id })
        .then(_ => res.end())
        .catch(err => res.status(500).send(err))
})

module.exports = router;
