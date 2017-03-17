import $ from 'jquery';

const Mentor = ({ mentor })=> {
  if(!mentor)
    return $('');
  return $(`<span style='color: green'> Mentored by ${mentor.name }</span>`);

};

export default Mentor;
