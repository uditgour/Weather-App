const form = document.getElementById('form');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let body = document.getElementById('body');
let d = new Date();

const weather = async(city) => {


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6b6adaad4349bac2527fde0f7e20a94`;

    const fetchedData = await axios.get(url);

    s1.innerText = fetchedData.data.name + "," + fetchedData.data.sys.country;


    let x = d.toString();
    let arr = x.split(" ");
    s2.innerText = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3];
    s3.innerHTML = parseInt(fetchedData.data.main.temp - 273.15) + "&#8451;";
    s4.innerText = fetchedData.data.weather[0].main;


    s5.innerHTML = parseInt(fetchedData.data.main.temp_min - 273.15) + "&#8451;/" + parseInt(fetchedData.data.main.temp_min - 273.15) + "&#8451;";

    console.log(fetchedData.data);
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.dir(form.elements[0].value);
    const city = form.elements[0].value;
    console.log(form.elements[0].value);

    weather(city);

    form.elements[0].value = "";

});