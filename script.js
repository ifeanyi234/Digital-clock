"use strict";
const displayTime = document.querySelector("#time");

const padding = function (num) {
  return num.toString().padStart(2, "0");
};

setInterval(function () {
  const date = new Date();

  displayTime.innerHTML = `${padding(date.getHours())}:${padding(date.getMinutes())}:${padding(date.getSeconds())}`;
}, 1000);

// first for the flickering the styling is supposed to work but i think my font choice is making life hard for me and i don''t want to spend all day struggling on a font

// honestly this project is the weirdest cause its the smallest and also i feel its on a concpt developer won't really keep to head cause i built something bigger than this before dealling with time but that is like you save time (and i used {new Intl.DateTimeFormat(navigator.language, options).format(
//             new Date(time)
//           )) there so this was weird cause i knew this little but i felt like phase 1 you won't possibly be asking me to use those advanced formatting right? which is then why i felt like i didn't learn much from this project atall just reminding me of stuff i forgot
