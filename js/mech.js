headerDisplay();
const slider = document.querySelector("header .slider");
const slider1 = document.querySelector("#mech .slider");

const indicatorParent = document.querySelector("header .control ul");
const indicators = document.querySelectorAll("header .control li");
index = 0;
const indicatorParent1 = document.querySelector("#mech .control ul");
const indicators1 = document.querySelectorAll("#mech .control li");
index1 = 0;
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -25 + "%)";
    index = i;
  });
});
indicators1.forEach((indicator1, i) => {
  indicator1.addEventListener("click", () => {
    document
      .querySelector("#mech .control .selected")
      .classList.remove("selected");
    indicator1.classList.add("selected");
    slider1.style.transform = "translateX(" + i * -20 + "%)";
    index1 = i;
  });
});




const aslider = document.querySelector("header .slider");
const aslider1 = document.querySelector("#appdev .slider");

const aindicatorParent = document.querySelector("header .control ul");
const aindicators = document.querySelectorAll("header .control li");
aindex = 0;
const aindicatorParent1 = document.querySelector("#appdev .control ul");
const aindicators1 = document.querySelectorAll("#appdev .control li");
aindex1 = 0;
aindicators.forEach((aindicator, a) => {
  aindicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    aindicator.classList.add("selected");
    aslider.style.transform = "translateX(" + a * -25 + "%)";
    aindex = a;
  });
});
aindicators1.forEach((aindicator1, a) => {
  aindicator1.addEventListener("click", () => {
    document
      .querySelector("#appdev .control .selected")
      .classList.remove("selected");
    aindicator1.classList.add("selected");
    aslider1.style.transform = "translateX(" + a * -20 + "%)";
    aindex1 = a;
  });
});



const eslider = document.querySelector("header .slider");
const eslider1 = document.querySelector("#electrical .slider");

const eindicatorParent = document.querySelector("header .control ul");
const eindicators = document.querySelectorAll("header .control li");
eindex = 0;
const eindicatorParent1 = document.querySelector("#electrical .control ul");
const eindicators1 = document.querySelectorAll("#electrical .control li");
eindex1 = 0;
eindicators.forEach((eindicator, k) => {
  eindicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    eindicator.classList.add("selected");
    eslider.style.transform = "translateX(" + k * -25 + "%)";
    eindex = k;
  });
});
eindicators1.forEach((eindicator1, k) => {
  eindicator1.addEventListener("click", () => {
    document
      .querySelector("#electrical .control .selected")
      .classList.remove("selected");
    eindicator1.classList.add("selected");
    eslider1.style.transform = "translateX(" + k * -20 + "%)";
    eindex1 = k;
  });
});



const cslider = document.querySelector("header .slider");
const cslider1 = document.querySelector("#cybersec .slider");

const cindicatorParent = document.querySelector("header .control ul");
const cindicators = document.querySelectorAll("header .control li");
cindex = 0;
const cindicatorParent1 = document.querySelector("#cybersec .control ul");
const cindicators1 = document.querySelectorAll("#cybersec .control li");
cindex1 = 0;
cindicators.forEach((cindicator, j) => {
  cindicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    cindicator.classList.add("selected");
    cslider.style.transform = "translateX(" + j * -25 + "%)";
    cindex = j;
  });
});
cindicators1.forEach((cindicator1, j) => {
  cindicator1.addEventListener("click", () => {
    document
      .querySelector("#cybersec .control .selected")
      .classList.remove("selected");
    cindicator1.classList.add("selected");
    cslider1.style.transform = "translateX(" + j * -20 + "%)";
    cindex1 = j;
  });
});



const wslider = document.querySelector("header .slider");
const wslider1 = document.querySelector("#webdev .slider");

const windicatorParent = document.querySelector("header .control ul");
const windicators = document.querySelectorAll("header .control li");
windex = 0;
const windicatorParent1 = document.querySelector("#webdev .control ul");
const windicators1 = document.querySelectorAll("#webdev .control li");
windex1 = 0;
windicators.forEach((windicator, w) => {
  windicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    windicator.classList.add("selected");
    wslider.style.transform = "translateX(" + w * -25 + "%)";
    windex = w;
  });
});
windicators1.forEach((windicator1, w) => {
  windicator1.addEventListener("click", () => {
    document
      .querySelector("#webdev .control .selected")
      .classList.remove("selected");
    windicator1.classList.add("selected");
    wslider1.style.transform = "translateX(" + w * -20 + "%)";
    windex1 = w;
  });
});


const mslider = document.querySelector("header .slider");
const mslider1 = document.querySelector("#mlai .slider");

const mindicatorParent = document.querySelector("header .control ul");
const mindicators = document.querySelectorAll("header .control li");
mindex = 0;
const mindicatorParent1 = document.querySelector("#mlai .control ul");
const mindicators1 = document.querySelectorAll("#mlai .control li");
mindex1 = 0;
mindicators.forEach((mindicator, m) => {
  mindicator.addEventListener("click", () => {
    document
      .querySelector("header .control .selected")
      .classList.remove("selected");
    mindicator.classList.add("selected");
    mslider.style.transform = "translateX(" + m * -25 + "%)";
    mindex = m;
  });
});
mindicators1.forEach((mindicator1, m) => {
  mindicator1.addEventListener("click", () => {
    document
      .querySelector("#mlai .control .selected")
      .classList.remove("selected");
    mindicator1.classList.add("selected");
    mslider1.style.transform = "translateX(" + m * -20 + "%)";
    mindex1 = m;
  });
});




function mechDisplay() {
  document.getElementById("mech-img").src="icons/mech_blue.png";
  document.getElementById("elec-img").src="icons/electrical.png";
  document.getElementById("cyber-img").src="icons/cybersec.png";
  document.getElementById("app-img").src="icons/app dev.png";
  document.getElementById("web-img").src="icons/web dev.png";
  document.getElementById("mlai-img").src="icons/artificial inteligence.png";

  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "block";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "none";

}
function elecDisplay() {
  document.getElementById("elec-img").src="icons/microchip_blue.png";
  document.getElementById("cyber-img").src="icons/cybersec.png";
  document.getElementById("app-img").src="icons/app dev.png";
  document.getElementById("web-img").src="icons/web dev.png";
  document.getElementById("mlai-img").src="icons/artificial inteligence.png";
  document.getElementById("mech-img").src="icons/mechanical.png";


  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "none";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("electrical").style.display = "block";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "none";
}
function cybersecDisplay() {
  document.getElementById("cyber-img").src="icons/cyber_blue.png";
  document.getElementById("app-img").src="icons/app dev.png";
  document.getElementById("web-img").src="icons/web dev.png";
  document.getElementById("mlai-img").src="icons/artificial inteligence.png";
  document.getElementById("mech-img").src="icons/mechanical.png";
  document.getElementById("elec-img").src="icons/electrical.png";

  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("cybersec").style.display = "block";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "none";
}
function appdevDisplay() {
  document.getElementById("app-img").src="icons/app_blue.png";
  document.getElementById("web-img").src="icons/web dev.png";
  document.getElementById("mlai-img").src="icons/artificial inteligence.png";
  document.getElementById("mech-img").src="icons/mechanical.png";
  document.getElementById("elec-img").src="icons/electrical.png";
  document.getElementById("cyber-img").src="icons/cybersec.png";

  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("appdev").style.display = "block";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "none";
}
function webdevDisplay() {
  document.getElementById("web-img").src="icons/web_blue.png";
  document.getElementById("mlai-img").src="icons/artificial inteligence.png";
  document.getElementById("mech-img").src="icons/mechanical.png";
  document.getElementById("elec-img").src="icons/electrical.png";
  document.getElementById("cyber-img").src="icons/cybersec.png";
  document.getElementById("app-img").src="icons/app dev.png";

  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "block";
  document.getElementById("mlai").style.display = "none";
}
function mlaiDisplay() {
  document.getElementById("mlai-img").src="icons/AI_blue.png";
  document.getElementById("mech-img").src="icons/mechanical.png";
  document.getElementById("elec-img").src="icons/electrical.png";
  document.getElementById("cyber-img").src="icons/cybersec.png";
  document.getElementById("app-img").src="icons/app dev.png";
  document.getElementById("web-img").src="icons/web dev.png";

  document.getElementById("heading").style.display = "none";
  document.getElementById("mech").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "block";
}
function headerDisplay(){
  
  document.getElementById("heading").style.display = "block";
  document.getElementById("mech").style.display = "none";
  document.getElementById("electrical").style.display = "none";
  document.getElementById("cybersec").style.display = "none";
  document.getElementById("appdev").style.display = "none";
  document.getElementById("webdev").style.display = "none";
  document.getElementById("mlai").style.display = "none";
}