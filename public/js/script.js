
const div1 = document.getElementById("div1");
const btn1 = document.getElementById("btn1");
const form1 = document.getElementById("form1");
const div2 = document.getElementById("div2");
let inp1 = document.getElementById("inp1");
let span1 = document.getElementById("span1");
let inp2 = document.getElementById("inp2");
let country = document.querySelectorAll(".country");
let country1 = document.getElementById("country1");
let lat = document.getElementById("lat");
const long = document.getElementById("long");
const temp = document.getElementById("temp");
const load = document.getElementById("load");
const data = document.getElementById("data");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inp1.value) {
    span1.style.display = "inline";
    return;
  }
  div1.style.display = "none";
  div2.style.display = "block";
  inp2.value = inp1.value;

});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  load.style.display = "inline";

  fun(inp2.value);
  form1.reset();
});

const fun = async (loc) => {
  try {
    const res = await fetch(`/weather?location=${loc}`);
    const data = await res.json();
    console.log(data);
    console.log(data.error);
    load.style.display = "none";
    if (data.error) {
      d1.style.display = "block";
      d2.style.display = "none";
      d3.style.display = "none";
      d4.style.display = "none";
      country1.innerText = data.error.error;
      country1.style.color = "red";
    } else {
      d1.style.display = "flex";
      d2.style.display = "flex";
      d3.style.display = "flex";
      d4.style.display = "flex";
      country1.innerText = ` country : ${data.country}`;
      lat.innerText = ` latitude : ${data.latitude}`;
      long.innerText = `longitude : ${data.longitude}`;
      temp.innerText = ` temperture : ${data.tempreture}`;
    }
  } catch (e) {
    console.log(e);
  }
};

inp2.addEventListener("keyup", async (e) => {
  console.log(e.target.value);
  country1.innerText = `country: ${e.target.value}`;
  country1.style.color = "#28566b";
});
