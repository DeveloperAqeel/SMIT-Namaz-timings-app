function checkData(){
let userCountry = document.getElementById("userCountry").value

   let userCity = document.getElementById("userCity").value

   let url = "https://api.aladhan.com/v1/timingsByCity?city="
    // fetch(url + userCity)
    // .then(function(reponse){
    //     return  Response.json()
    // }).then(function(data){

    // })
axios.get(url + userCity + "&country=" + userCountry)
.then(function(response){
    console.log(response)
    let data = response.data
    document.getElementById("result").innerHTML = `  
        <div class="img-div1"><img src="assets/aa.png" width="180px" height="250px"><p>Fajr &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Fajr}</p></div>
    <div class="img-div1"><img src="assets/aa.png" width="180px" height="250px"><p>Sunrise &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Sunrise}</p></div>
    <div class="img-div2"><img src="assets/aa.png" width="180px" height="250px"><p>Dhuhr &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Dhuhr}</p></div>
    <div class="img-div3"><img src="assets/aa.png" width="180px" height="250px"><p>Asr &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Asr}</p></div>
    <div class="img-div4"><img src="assets/aa.png" width="180px" height="250px"><p>Maghrib &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Maghrib}</p></div>
    <div class="img-div5"><img src="assets/aa.png" width="180px" height="250px"><p>Isha &nbsp;&nbsp;&nbsp;&nbsp;<br>${data.data.timings.Isha}</p></div>  
    `
    document.getElementById("span1").innerText = `${data.data.meta.timezone}`
    document.getElementById("span2").innerText = `${data.data.meta.method.name}`
    document.getElementById("span3").innerText = `${data.data.date.gregorian.date}`
    document.getElementById("span4").innerText = `${data.data.date.hijri.date}`
}).catch(function(error){
    alert(error)
})

}