const express = require('express');
const router = express.Router();
const StudentModel = require('../models/student');

router.get('/', (req, res) => {
    const students = StudentModel.getAll();
    res.render('students/index', { students });
});

router.post('/', (req, res) => {
    StudentModel.create(req.body);
    res.redirect('/students');
});

router.put('/:id', (req, res) => {
    StudentModel.update(req.params.id, req.body);
    res.redirect('/students');
});

router.delete('/:id', (req, res) => {
    StudentModel.delete(req.params.id);
    res.redirect('/students');
});

module.exports = router;