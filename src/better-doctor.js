/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export class Doctor {

  async getDoctor(doctorName, doctorSpecialty){
    // eslint-disable-next-line no-undef
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&specialty_uid=${doctorSpecialty}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`;
    const url2 = `https://api.betterdoctor.com/2016-03-01/doctors?name=josh&specialty_uid=cardiologist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`;
    try{
      
      // eslint-disable-next-line no-undef
      let response = await fetch(url);


      let jsonifiedResopnse;
      if (response.status === 200 && response.ok) {
        jsonifiedResopnse = await response.json();
        console.log(jsonifiedResopnse);
      } else {
        jsonifiedResopnse = false;
      }
      return jsonifiedResopnse;
    } catch(error) {
      // eslint-disable-next-line no-console
      console.warn("Error caught >>>");
    }
  }

  checkInput(input){
    if (input == "" || input ==" "){
      return "";
    }
    else 
      return `specialty_uid=${input}`;
  }
}