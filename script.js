let datecontainer=document.querySelector('.date-container');
let hourscontainer=document.querySelector('.hours');
let minutescontainer=document.querySelector('.minutes');
let secondscontainer=document.querySelector('.seconds');


const weekdays=[
 "Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday"
];

const monthNames=[
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
"December"
];


function formatTime(time){
 return time <10 ? "0" +time : time;
};

function updateClock(){


 const today = new Date();
 // console.log(today);

 let date = today.getDate();
 // console.log(date);
let day = weekdays[today.getDay()];
let month = monthNames[today.getMonth()];
// console.log(day,month);
// console.log(today.getDay(),today.getMonth());
let hours = formatTime(today.getHours());
let minutes = formatTime(today.getMinutes());
let seconds = formatTime(today.getSeconds())

datecontainer.innerHTML=`<p>${day}</p><p><span>${date}</span></P><p>${month}`;
// datecontainer.textContent=day;,month;


hourscontainer.textContent=hours +":";
minutescontainer.textContent=minutes+":";
secondscontainer.textContent=seconds;

};
setInterval(updateClock,1000);
// updateClock();












