const _conn = require('./_conn');

const Student = _conn.define('student', {
  name: _conn.Sequelize.STRING
});

module.exports = Student;
