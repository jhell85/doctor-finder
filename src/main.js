/* eslint-disable no-console */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Doctor } from "./better-doctor";

function showDoctors(docArray) {
  for (let i = 0; i < docArray.length; i++) {
    $("#docList").append(
      `<tr class="table-info docList" value="${docArray[i].uid}"><td>${i +
        1}</td><td scope="row">${docArray[i].profile.first_name}</td><td>${
        docArray[i].profile.last_name
      }</td><td><button value="${
        docArray[i].uid
      }" class="btn btn-primary">Details</button></td></tr>`
    );
  }
}

function doctorSpecialties(specialtiesArray) {
  let htmlSpecialties = "";
  specialtiesArray.forEach(specialty => {
    htmlSpecialties += `<li>${specialty.name}</li>`;
  });
  return htmlSpecialties;
}

function fillPracticesTable(practices) {
  $("#practicesTable").html(
    `<thead><tr class="table-primary"><th scope="col">address</th><th scope="col">phone</th><th scope="col">website</th></tr></thead>`
  );
  practices.forEach(practice => {
    $("#practicesTable").append(
      `<tr class="table-info"><td><b>${practice.name}</b><br>${
        practice.visit_address.street
      }<br>${practice.visit_address.city} ${practice.visit_address.state} ${
        practice.visit_address.zip
      }</td><td>${formatPhoneNumber(practice.phones)}</td><td><a href="${
        practice.website
      }">website</a></td></tr>`
    );
  });
}

function formatPhoneNumber(phoneNumbers) {
  let htmlToReturn = "";
  phoneNumbers.forEach(pNumber => {
    let pNumberDirty = pNumber.number;
    let cleaned = ("" + pNumberDirty).replace(/\D/g, "");
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      let intlCode = match[1] ? "+1 " : "";
      let pNumberClean = [
        intlCode,
        "(",
        match[2],
        ") ",
        match[3],
        "-",
        match[4]
      ].join("");
      htmlToReturn += `${pNumber.type} : <br><i>${pNumberClean}</i><br>`;
    }
    return null;
  });
  return htmlToReturn;
}

function showDocInfo(ID, data) {
  data.forEach(doctor => {
    if (doctor.uid === ID) {
      let profileContainer = `<h4>${doctor.profile.first_name} ${
        doctor.profile.last_name
      }</h4><div><h5>Specialties:<h5></div><ul class="specialties">${doctorSpecialties(
        doctor.specialties
      )}</ul>`;
      $(".table").fadeOut();
      $(".docInfo").show(1000);
      $(".docProfile").html(profileContainer);
      fillPracticesTable(doctor.practices);
    }
  });
}

$(document).ready(function() {
  let response;
  let doctor = new Doctor();

  (async () => {
    response = await doctor.getSpecialties();
    populateSpecialties(response.data);
  })();

  function populateSpecialties(response) {
    if (!response) {
      $(".body").html(
        '<img src="http://www.findmysoft.com/img/news/inside/Error-401_1460548854.jpg"/>'
      );
    }
    let specialtiesArray = response;
    specialtiesArray.forEach(specialty => {
      $("#specialty").append(`
        <option value="${specialty.uid}">${specialty.name}</option>`);
    });
  }

  $("#search").click(function() {
    const docName = $("#name").val();
    const specialty = $("#specialty").val();
    $(".docInfo").fadeOut();
    (async () => {
      response = await doctor.getDoctor(docName, specialty);

      getElements(response.data);
    })();

    function getElements(response) {
      if (response.length === 0) {
        $(".table").hide();
        $("#no_results").show();
        $("#no_results").text("Sorry no Doctors found.");
      } else {
        $("#no_results").hide();
        $(".docList").remove();
        $(".table").show(1000);
        showDoctors(response);
      }
    }
    $(".table").on("click", "button", function() {
      let doctorID = $(this).attr("value");
      showDocInfo(doctorID, response.data);
    });
  });

  console.log(doctor.getLocation());
});
