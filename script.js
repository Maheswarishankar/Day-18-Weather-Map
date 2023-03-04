
// To create div element
const div_container = document.createElement('div');
div_container.setAttribute('id','div_container');
document.body.append(div_container);

// To create a Tittle
const heading = document.createElement('h1');
heading.setAttribute('id','title');
heading.classList.add('class','text-center','text-white','fw-bolder','p-3');
heading.innerHTML = "Rest countries weather using fetch API";
div_container.append(heading);

// To create the first container
const first_container = document.createElement('div');
first_container.classList.add('class','first_container','mt-0');
first_container.setAttribute('id','hidden')
div_container.append(first_container);

// To create the first Row
const first_row = document.createElement('div');
first_row.classList.add('row')
first_container.append(first_row);

// To get all the country details from Rest countries API using async/await and fetch()
async function getCountries(){

    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();
//    console.log(data);
    data.forEach(country =>{
        // console.log(country);     

//To create the column
const first_column = document.createElement('div');
first_column.setAttribute('class','col-sm-12 col-lg-4' ,'p-5' );
first_row.append(first_column);

// to create the card
const first_card = document.createElement('div');
first_card.classList.add('card','p-0','m-5','card-hearder','card-body','bg-dark','bg-gradient','cardh');
first_column.append(first_card);

// To create and append the country name in header
const parentDiv = document.createElement('div');
parentDiv.classList.add('bg-warning','text-dark','m-2','text-center','cardName');
first_card.append(parentDiv);

const CountryName = document.createElement('p');
CountryName.classList.add('mt-3','fw-bolder');
CountryName.innerText = country.name.common
parentDiv.append(CountryName);

// To create and append the flag img in body
const imgDiv = document.createElement('div');
imgDiv.classList.add('flag','ms-4','mt-2');
first_card.append(imgDiv);

const img = document.createElement('img');
img.setAttribute('src',country.flags.png);
img.setAttribute('class','img');
img.setAttribute('alt','flag');
imgDiv.append(img);

//capital
const  capital_div = document.createElement('div');
capital_div.classList.add('capital','text-center','p-3','text-white');
capital_div.innerText = `Capital : ${country.capital}`;
first_card.append(capital_div);

//Region
const region = document.createElement('div');
region.classList.add('region','text-center','text-white','p-2');
region.innerText = `Region : ${country.region} `;
first_card.append(region);

//country Code
const country_code = document.createElement('div');
country_code.classList.add('code','text-center','p-3','text-white');
country_code.innerText = `Country Code : ${country.cca3};`;
first_card.append(country_code);

// To create the button
const button = document.createElement('button');
button.classList.add('button','btn-primary','fw-bolder',);
button.innerText = "Click for Weather";
first_card.append(button);

button.addEventListener('click',getWeather)
async function getWeather(){
    try{
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=e0e8cf2b4b9a9023c84456ee6032ba3e`);
        
        let weatherData = await weather.json();
        // console.log(weatherData);              

    document.getElementById('hidden').innerHTML = ""; // to hidden the first container

// To create the second container 
const second_container = document.createElement('div');
second_container.setAttribute('class','second_container');
document.body.append(second_container);

//To create the second Row
const Second_row = document.createElement('div');
Second_row.classList.add('row','g-3','sec_container');
second_container.append(Second_row);

// To create second column
let second_coloumn = document.createElement("div");
second_coloumn.setAttribute("class","col-sm-12 col-lg-4 g-5");
Second_row.append(second_coloumn);

//To create CARD
   let second_card =document.createElement("div");
second_card.classList.add('card','p-3','m-3','mt-1','card-hearder','card-body','bg-warning','text-white','cardh');
   second_card.classList.add('class','bg-warning');
   second_card.innerHTML = ` <div class="card-header p-2 mb-3 bg-secondary text-center">
     <h4 class="card-text text-white">${country.name.common}</h4>
     </div>
        <img src="${country.flags.svg}" alt="">
       <div class="card-body">
       <h6 class="card-text">Temperature: ${weatherData.main.temp}</h6>
       <h6 class="card-text">Ground-Level: ${weatherData.main.grnd_level}</h6>
       <h6 class="card-text">Humidity: ${weatherData.main.humidity}</h6>
       <h6 class="card-text">Pressure: ${weatherData.main.pressure}</h6>
       <h6 class="card-text">Sea-Level: ${weatherData.main.sea_level}</h6>
       <h6 class="card-text">Temp-Max: ${weatherData.main.temp_max}</h6>
       <h6 class="card-text">Temp-Min: ${weatherData.main.temp_min}</h6>
      </div>`;
      second_coloumn.append(second_card);   

//To create reset button inside the card
   let button1 = document.createElement("button");
   button1.setAttribute("class","btn btn-primary");
   button1.classList.add('class','btn')
   button1.innerText = "Reset";
   second_card.append(button1);

//Location reload 
   button1.addEventListener("click",()=>{
     location.reload()
   })
}
catch(err){
    console.log("");
}       

}
    });

}    
getCountries()

    