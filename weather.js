// const search = "new%20york"

function weatherInfo(search) {
    let url = `https://weatherdbi.herokuapp.com/data/weather/${search}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const region = data.region;
            const temp = data.currentConditions.temp.f;
            document.getElementById("region").innerText = region
            document.getElementById("temp").innerText = temp
        });
}

// weatherInfo("new%20york");