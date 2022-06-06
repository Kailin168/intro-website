// const search = "new%20york"

// function weatherInfo(search) {
//     let url = `https://weatherdbi.herokuapp.com/data/weather/${search}`
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const region = data.region;
//             const temp = data.currentConditions.temp.f;
//             document.getElementById("region").innerText = region
//             document.getElementById("temp").innerText = temp
//         });
// }

// weatherInfo("new%20york");

function weatherInfo(search) {
    let url = `https://api.open-meteo.com/v1/forecast?${search}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const time = data.daily.time;
            const tempMax = data.daily.temperature_2m_max;
            const tempMin = data.daily.temperature_2m_min;

            let timeString = ""
            for (let t of time) {
                timeString += t;
                timeString += "\n";
            }
            let tempMaxString = ""
            for (let p of tempMax) {
                tempMaxString += p;
                tempMaxString += "\n";
            }
            let tempMinString = ""
            for (let i of tempMin) {
                tempMinString += i;
                tempMinString += "\n";
            }


            // document.getElementById("time").innerText = timeString.slice(0, 10) + "," + tempMaxString.slice(0, 2) + "," + tempMinString.slice(0, 2)
            // document.getElementById("tempMax").innerText = tempMaxString
            // document.getElementById("tempMin").innerText = tempMinString
        });
}

let newString = ""
 for (let i = 0; i < time.length; i++) {
     //98

     newString += "\n"
 }