const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Course 1005' },
    { id: 2, name: 'Course 2000' },
    { id: 3, name: 'Course 6500' },
    { id: 4, name: 'Course 1400' }
];

app.get('/', (req, res) => { res.send('No IMPLEMENTED YET')});
app.get('/api/courses', (req, res) => { res.send(courses)});
app.get('/api/courses/:id', (req, res) => { 
    const course = courses.find(x => x.id === parseInt(req.params.id))
    if(course == null) return res.status(404).send(`The Course with the given ID: ${req.params.id} is not found.`);
    res.send(course);
});

app.post('/api/courses', (req, res) =>{
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);

    const course = { 
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) =>{
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

app.delete('/api/courses/:id', (req, res) =>{
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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listing on port ${port}...`));