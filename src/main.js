import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Doctor } from './better-doctor';




$(document).ready(function() {

  $('#b').click(function() {
    const docName = "Smith";
    (async () => {
      console.log("button clicked");
      
      let doctor = new Doctor();
      const response = await doctor.getDoctor(docName);
      console.log(response);
      getElements(response);

    })();

    function getElements(response){
    }





  });
});