import $ from 'jquery';

const Mentees = ({ mentees })=> {
  return $(`<span style='color: blue'> Mentoring by ${mentees.length} students</span>`);
};

export default Mentees;
