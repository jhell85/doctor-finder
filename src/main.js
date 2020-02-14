import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Doctor } from './better-doctor';


function showDoctors(docArray) {
  for (let i=0; i<docArray.length; i++) {
    // console.log(`First name : ${doctor.profile.first_name} Last name:${doctor.profile.last_name}`);
    $("#docList").append(`<li class="docList" value="${docArray[i]}">${docArray[i].profile.first_name} ${docArray[i].profile.last_name}</li>`);
  }
}


$(document).ready(function() {
  $('#search').click(function() {
    const docName = $("#name").val();
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(docName);
      getElements(response.data);
    })();

    function getElements(response){
      if (response.length === 0) {
        $("#output").text("Sorry no Doctors found.");
      } else 
        showDoctors(response);
    }
  });
});