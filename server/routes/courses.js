
const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'Course 1005' },
    { id: 2, name: 'Course 2000' },
    { id: 3, name: 'Course 6500' },
    { id: 4, name: 'Course 1400' }
];

// router.get('/', (req, res) => { res.send('No IMPLEMENTED YET')});
router.get('/', (req, res) => { res.send(courses)});
router.get('/:id', (req, res) => { 
    const course = courses.find(x => x.id === parseInt(req.params.id))
    if(course == null) return res.status(404).send(`The Course with the given ID: ${req.params.id} is not found.`);
    res.send(course);
});

router.post('/', (req, res) =>{
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);

    const course = { 
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req, res) =>{
    //Lookup
    const course = courses.find(x => x.id === parseInt(req.params.id))
    if(course == null) return res.status(404).send(`The Course with the given ID: ${req.params.id} is not found.`);

        //Validatiion
        //Using object destructuring
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);

    //Update
    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req, res) =>{
    const course = courses.find(x => x.id === parseInt(req.params.id))
    if(course == null) return res.status(404).send(`The Course with the given ID: ${req.params.id} is not found.`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function validateCourse(course) {    
    const schema = { name: Joi.string().min(3).required() }
    return Joi.validate(course, schema);
}

module.exports = router;