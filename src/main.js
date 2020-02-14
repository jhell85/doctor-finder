import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Doctor } from './better-doctor';




$(document).ready(function() {

  $('#b').click(function() {
    const docName = "Smith";
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(docName);
      getElements(response.data);

    })();

    function getElements(response){
      // console.log(response);
      response.forEach(doctor => {
        console.log(`First name : ${doctor.profile.first_name} Last name:${doctor.profile.last_name}`);
      });
   
      

    }





  });
});