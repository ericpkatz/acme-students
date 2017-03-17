const express = require('express');
const path = require('path');
const db = require('./db');
const Student = db.models.Student;

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/students', (req, res, next)=> {
  Student.findAll({ include: [
    {
      model: Student,
      as: 'mentor'
    },
    {
      model: Student,
      as: 'mentees'
    }
  ]})
  .then( students => res.send(students));
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));


db.seed();
