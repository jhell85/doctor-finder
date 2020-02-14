/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Doctor } from './better-doctor';


function showDoctors(docArray) {
  for (let i=0; i<docArray.length; i++) {
    
    $("#docList").append(`<tr class="table-info docList" value="${docArray[i].uid}"><td>${i + 1}</td><td scope="row">${docArray[i].profile.first_name}</td><td>${docArray[i].profile.last_name}</td><td><button value="${docArray[i].uid}" class="btn btn-primary">Details</button></td></tr>`);
  }
}

function showDocInfo(ID, data){
  data.forEach(doctor => {
    if (doctor.uid === ID){
      
      $(".table").fadeOut();
      console.log(doctor.profile.last_name);
      
    }
    
  });
  console.log(ID);
}

$(document).ready(function() {
  let response;
  $('#search').click(function() {
    const docName = $("#name").val();
    (async () => {
      let doctor = new Doctor();
      response = await doctor.getDoctor(docName);
      getElements(response.data);
    })();

    function getElements(response){
      if (response.length === 0) {
        $("#output").text("Sorry no Doctors found.");
      } else 
        $(".table").show(1000);
      showDoctors(response);
    }
    $(".table").on("click", "button", function() {
      let doctorID = $(this).attr("value");
      showDocInfo(doctorID, response.data);
    });

  });
});