export class Doctor {

  async getDoctor(doctorType){
    console.log("getDoctor()");
    
    try{
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorType}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`)
      let jsonifiedResopnse;
      if (response.status === 200 && response.ok) {
        jsonifiedResopnse = await response.json();
      } else {
        jsonifiedResopnse = false;
      }
      return jsonifiedResopnse;
    } catch(error) {
      console.warn("Error caught >>>");
    }
  }
}