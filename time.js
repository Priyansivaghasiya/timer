let a;
let totalseconds;
let hourss;

function timer() {
    let inputField = document.getElementById("input");
    totalseconds = Number(inputField.value);
    hourss = Math.floor(totalseconds / 3600);
    minutes = Math.floor(Math.abs(hourss * 3600 - totalseconds))
    a = Math.floor(minutes / 60)
    second = Math.abs(a * 60 - minutes)
    // console.log(hours, a, second)
}

function hours() {
    timer();
    let hoursoutput = document.getElementById("hoursoutput")

    if (hoursoutput.classList[0] === "hidden") {
        hoursoutput.classList.remove("hidden")
        hoursoutput.classList.add("visible")
    }
    else {
        hoursoutput.classList.remove("visible")
        hoursoutput.classList.add("hidden")
    }
    hoursoutput.innerText = hourss;
}

function mintus() {
    timer();
   
    let minutesoutput = document.getElementById("minutesoutput")
    if (minutesoutput.classList[0] === "hidden") {
        minutesoutput.classList.remove("hidden")
        minutesoutput.classList.add("visible")
    }
    else {
        minutesoutput.classList.remove("visible")
        minutesoutput.classList.add("hidden")
    }
    minutesoutput.innerText = a;
    

}

function seconds() {
    timer();
   
    let secondoutput = document.getElementById("secondoutput")
    if (secondoutput.classList[0] === "hidden") {
        secondoutput.classList.remove("hidden")
        secondoutput.classList.add("visible")
    }
    else {
        secondoutput.classList.remove("visible")
        secondoutput.classList.add("hidden")
    }
    secondoutput.innerText = second;
}

