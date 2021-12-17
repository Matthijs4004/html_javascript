var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'lightswitch off';
document.getElementById(button_id).innerHTML = 'lightswitch off';
document.body.appendChild(btn);


// schijf hier tussen je code
function myFunction() {
    var element = document.body;
    element.classList.toggle("lighton");
    var x = document.getElementById("switch");
  if (x.innerHTML === "lightswitch off") {
    x.innerHTML = "lightswitch on";
    console.log("light is on!");
  } else {
    x.innerHTML = "lightswitch off";
    console.log("light is off!");
  }
}
    // schijf hier tussen je code