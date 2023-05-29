/* main.js */
var timeEl = document.getElementById("time");
var dateEl = document.getElementById("date");

setInterval(() => {
  // Get time
  const time = new Date();
  var hh = time.getHours();
  var mm = time.getMinutes();
  var ss = time.getSeconds();

  var ampm = hh >= 12 ? "PM" : "AM";
  hh = hh > 12 ? hh - 12 : hh;
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  hh = hh === "00" ? "12" : hh;
  timeEl.innerText =
    ss % 2 === 0
      ? hh + ":" + mm + ":" + ss + " " + ampm
      : hh + " " + mm + " " + ss + " " + ampm;

  // Get date
  let DAY = time.getDay();
  let DD = time.getDate();
  DD = DD < 10 ? "0" + DD : DD;
  let MM = time.getMonth();
  let YY = time.getFullYear();
  let Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dateEl.innerText = Days[DAY] + " " + Months[MM] + " " + DD + ", " + YY;
  // END
}, 1000);
