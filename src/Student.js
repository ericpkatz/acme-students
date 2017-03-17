import $ from 'jquery';
import Mentor from './Mentor';
import Mentees from './Mentees';


const Student = ({ student, selected, onSelect})=> {
  let li;
  if(selected && student.id === selected.id)
    li = $(`<li style='color:red'>${student.name}</li>`);
  else
     li = $(`<li>${student.name}</li>`);
  const { mentor, mentees } = student;
  li.append(Mentor({ mentor }));
  li.append(Mentees({ mentees }));
  li.on('click', ()=> onSelect(student));
  return li;
}

export default Student;
