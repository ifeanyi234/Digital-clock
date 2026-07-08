"use strict";
const displayTime = document.querySelector("#time");
setInterval(function () {
  let date = new Date();

  displayTime.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
