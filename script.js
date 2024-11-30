const redcol = document.querySelector(".red");
const bluecol = document.querySelector(".blue");
const greencol = document.querySelector(".green");
const yellowcol = document.querySelector(".yellow");
const inputtext = document.querySelector("input");
const btn1 = document.querySelector(".btn1");
const header = document.querySelector("header");
redcol.addEventListener("click", () => {
  redcol.classList.add("div1");
});
bluecol.addEventListener("click", () => {
  bluecol.classList.add("div2");
});
greencol.addEventListener("click", () => {
  greencol.classList.add("div3");
});
yellowcol.addEventListener("click", () => {
  yellowcol.classList.add("div4");
});
btn1.addEventListener("click", () => {
  const inputval = inputtext.value;
  header.innerText = `Hello,${inputval}`;
});
