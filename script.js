const splitter = document.querySelector(".app-name");
const btnTip = document.querySelectorAll(".btn-tip");
const btnReset = document.querySelector(".btn-reset");
const customTip = document.getElementById("custom-tip");
const billInput = document.getElementById("bill");
const numberOfPeople = document.getElementById("number-of-people");

let bill;
let tip;
let people;

billInput.addEventListener("input", (e) => {
  bill = +e.target.value;
});

btnTip.forEach((button) => {
  button.addEventListener("click", () => {
    tip = +button.getAttribute("data-tip");
  });
});

customTip.addEventListener("input", (e) => {
  if (!e.target.value) return;
  tip = +e.target.value;
});

numberOfPeople.addEventListener("input", (e) => {
  if (!e.target.value) return;
  people = +e.target.value;
});

splitter.addEventListener("click", () => {
  if (people === 0) {
    document
      .querySelector(".people-container")
      .setAttribute("data-invalid", "true");
    return;
  }

  let billPerPerson = +(bill / people).toFixed(2);
  let tipPerPerson = +(billPerPerson * (tip / 100)).toFixed(2);
  let billPlusTip = (billPerPerson + tipPerPerson).toFixed(2);

  if (!billPerPerson || !tipPerPerson) return;

  document.querySelector(".person-tip").innerHTML = tipPerPerson;
  document.querySelector(".person-total").innerHTML = billPlusTip;
});

btnReset.addEventListener("click", () => {
  location.reload();
});
