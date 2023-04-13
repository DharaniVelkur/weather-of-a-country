let API = "https://restcountries.com/v3.1/all";

let f = fetch(API);
f.then((response) => {
  return response.json();
}).then((data) => {
  // console.log(data);
  document.body.innerHTML += ` 
<div class="container d-flex flex-wrap"id="flagslist"></div>`
  for (let i = 0; i < data.length; i++) {
    var spreadop = {
      name: data[i].name.common,
      flag: data[i].flags.png,
      country_code: data[i].cioc,
      capital: data[i].capital,
      region: data[i].region,
      population: data[i].population,
      latitude: data[i].latlng[0],
      longitude: data[i].latlng[1],
    };
    create(spreadop);
  }
});
function create({name,flag,country_code,capital,region,population,latitude,longitude,}) {
  document.getElementById("flagslist").innerHTML += ` 
<div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center">
    <div class="card text-center mb-3 shadow" style="width: 18rem;">
      <img class="card-img-top" src=${flag} alt="flag">
      <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <p>${"Capital : " + capital}</p>
        <p>${"Region : " + region}</p>
        <p>${"Population : " + population}</p>
        <p>${"Country code : " + country_code}</p>
        <button  class="btn btn-primary"onclick=(b(${latitude},${longitude}))>Click for Weather</button>
      </div>
    </div>
</div>`;
}
function b(lat,long){
let fet=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=71213c33101013fb7c255ec8c8de7431`);
fet.then((response)=>{
  return response.json();
}).then((value)=>{
//  console.log(value);
   alert(`For ${value.name.toUpperCase()}
          Temparature : ${value.main.temp}
          Pressure : ${value.main.pressure}
          Humidity : ${value.main.humidity}`);
})
}