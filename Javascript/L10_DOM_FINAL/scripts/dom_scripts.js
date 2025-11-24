function cal() {
  let val = Number(document.querySelector(".input").value);
  if (val < 40) {
    val += 10;
  }
  document.querySelector(".sums").innerHTML = `$ ${val}`;
}
function sub() {
  const sub = document.querySelector(".subscribe");
  if (sub.innerHTML === "Subscribe") {
    document.querySelector(".subscribe").innerHTML = "Subscribed";
    sub.classList.add("subscribed");
  } else {
    document.querySelector(".subscribe").innerHTML = "Subscribe";
    sub.classList.remove("subscribed");
  }
}
