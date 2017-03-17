const _conn = require('./_conn');
const Student = require('./Student');

Student.belongsTo(Student, { as: 'mentor' });
Student.hasMany(Student, { as: 'mentees', foreignKey: 'mentorId' });

const sync = ()=> _conn.sync({ force: true}); 

const seed = ()=> {
  return sync()
    .then(()=> Promise.all([
      Student.create({ name: 'Moe' }),
      Student.create({ name: 'Larry' }),
      Student.create({ name: 'Curly' }),
      Student.create({ name: 'Shep' })
    ]))
    .then( result => {
      const [ moe, larry, curly, shep] = result;
      return Promise.all([
        larry.setMentor(moe.id),
        moe.addMentee(curly.id),
        shep.setMentor(curly.id)
      ]);
    });
}


module.exports = {
  sync,
  seed,
  models: {
    Student
  }
};
