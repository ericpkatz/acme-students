import $ from 'jquery';
import Student from './Student';
import StudentList from './StudentList';

const state = {
  students: [],
  selected: null
};



const renderStudentList = ()=> {
  const containerId = '#studentsList';
  const { students, selected } = state;
  StudentList({ containerId, students, selected, onSelect });
};

const onSelect = (student)=> {
  state.selected = student;
  renderStudentList();
}


$.get('/api/students')
  .then( students => {
    state.students = students;
    renderStudentList()
  });
