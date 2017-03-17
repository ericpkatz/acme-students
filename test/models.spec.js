const db = require('../db');
const Student = db.models.Student;
const expect = require('chai').expect;

describe('Students', ()=> {
  beforeEach(()=> {
    return db.seed();
  });

  it('there are three students', ()=> {
    return Student.findAll()
    .then( students => expect(students.length).to.equal(3));
  });
});
