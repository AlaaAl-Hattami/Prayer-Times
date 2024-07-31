let cities=[
    {
     cityName:"صَنْعَاء",
     name:"Şanʻā’"
    },
    {
     cityName:"صَعْدَة",
     name:"Şanʻā’"
    },
     {
     cityName:"سقطرى",
     name:"Arkhabīl Suquţrá"
    },
     {
     cityName:"الْحُدَيْدَه",
     name:"Al Ḩudaydah"
    }
    ]
     for(let city of cities ){
         const content= ` 
         <option>${city.cityName}</option>
         `
         document.getElementById("cities-select").innerHTML +=content
     }
     document.getElementById("cities-select").addEventListener("change", () => {
         document.getElementById("city-name").innerHTML=document.getElementById("cities-select").value
 
  let cityName=""
         for(let city of cities){
 if(city.cityName==document.getElementById("cities-select").value){
     cityName=city.name
   }
 
  }
  prayeresTime(cityName)
  console.log(document.getElementById("cities-select").value);  
 
 })
 
     function prayeresTime(index){
         let params ={
         country:"YE",
        city:index
     }
 axios.get('http://api.aladhan.com/v1/timingsByCity', {
     params:params
   })
   .then(function (response) {
     let timings =response.data.data.timings
     fillprayer("alfjir-time",timings.Fajr)
     fillprayer("sunrise-time",timings.Sunrise)
     fillprayer("noon-time",timings.Dhuhr)
     fillprayer("afternoon-time",timings.Asr)
     fillprayer("morco-time",timings.Maghrib)
     fillprayer("dinner-time",timings.Isha)
    
 const readball= response.data.data.date.readable
 const wekend= response.data.data.date.hijri.weekday.ar
 const date = wekend + " " + readball
 
 document.getElementById("date").innerHTML = date ;
 })
 .catch(function(error) {
     console.log(error);
 })
     
     }     
   
     prayeresTime("Şanʻā’")
 function fillprayer(id,time){
     document.getElementById(id).innerHTML= time
 }
 