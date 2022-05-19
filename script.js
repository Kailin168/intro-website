// const h2 = document.createElement('h2');
// h2.textContent="This content added by JavaScript";
// document.querySelector("body").appendChild(h2);

let d = new Date();
alert("Today's date is " + d);

// let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// document.querySelector("h3").append(time)

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();
  