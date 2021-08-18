let europeSpanish = fetch('https://restcountries.eu/rest/v2/lang/es').then((data) => data.json())
.then((data)=> data.filter((country)=> country.region="Europe"))
.then((countries)=> countries.forEach((spanish) => createFlag(spanish)))
.catch((errMsg) => console.log(errMsg));
var element = document.createElement("div");
         element.className = "main-container";
         document.body.append(element);


          function createFlag({name, flag, population, region, area, capital}){
  
                 element.innerHTML +=` 
                <div class="flag-container">
                <img class="flag" src=${flag}>
     
                <div class="details">
               <h3>${name}</h3>
               <p><b>Population: </b>${population}</p>
               <p><b>Region: </b>${region}</p>
               <p><b>Area: </b>${area}</p>
               
               </div>
               </div>`;                 
               }