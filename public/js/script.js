const form1 = document.getElementById("form1");
const loc = document.getElementById("location");
const weather = document.getElementById("weather");
const error = document.getElementById("error");
const inp = document.getElementById("inp");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inp.value);
  fun();
  form1.reset();
});

const fun = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/weather?location=" + inp.value
    );
    const data =await res.json();
    console.log(data)
    console.log(data.error)
    if (data.error) {
      loc.innerText = "";
      weather.innerText = "";
      error.innerText =JSON.stringify(data.error);
    } else {
      loc.innerText = data.location;
      weather.innerText = data.forcast;
      error.innerText = "";
    }
  } catch (e) {
    console.log(e);
  }
};
