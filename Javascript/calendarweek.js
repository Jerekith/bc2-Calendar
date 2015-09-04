function calendarweek () {
  var year = document.getElementById("selectElementId").value;
  var month = document.getElementById("monthValue").value;
  var date = document.getElementById("dateValue").value;
  console.log(year,month,date);
  var curr = new Date(year,month,date); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var second = first + 1;
  var third = first + 2;
  var fourth = first + 3;
  var fifth = first + 4;
  var sixth = first + 5;
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first)).toUTCString();
  var secondday = new Date(curr.setDate(last)).toUTCString();
  var thirdday = new Date(curr.setDate(last)).toUTCString();
  var fourthday = new Date(curr.setDate(last)).toUTCString();
  var fifthday = new Date(curr.setDate(last)).toUTCString();
  var sixthday = new Date(curr.setDate(last)).toUTCString();
  var seventhday = new Date(curr.setDate(last)).toUTCString();

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var sunday = new Date(firstday);
  var monday = new Date(secondday);
  var tuesday = new Date(thirdday);
  var wednesday = new Date(fourthtday);
  var thursday = new Date(fifthday);
  var friday = new Date(fsixthday);
  var sartuday = new Date(seventhday);

  var finalfirst = sunday.getDate()+" "+(monthNames[sunday.getMonth()+1]).toupperCase;
  var finalsecond = monday.getDate()+" "+(monthNames[monday.getMonth()+1]).toupperCase;
  var finalthird = tuesday.getDate()+" "+(monthNames[tuesday.getMonth()+1]).toupperCase;
  var finalfourth = wednesday.getDate()+" "+(monthNames[wednesday.getMonth()+1]).toupperCase;
  var finalfifth = thursday.getDate()+" "+(monthNames[thursday.getMonth()+1]).toupperCase;
  var finalsixth = friday.getDate()+" "+(monthNames[friday.getMonth()+1]).toupperCase;
  var finalseventh = sartuday.getDate()+" "+(monthNames[sartuday.getMonth()+1]).toupperCase;
  
  console.log(finalfirst);



  document.getElementById("sun").value.innerHTML += finalfirst;
  document.getElementById("mon").value.innerHTML += finalsecond;
  document.getElementById("tue").value.innerHTML += finalthird;
  document.getElementById("wed").value.innerHTML += finalfourth;
  document.getElementById("thur").value.innerHTML += finalfifth;
  document.getElementById("fri").value.innerHTML += finalsixth;
  document.getElementById("sat").value.innerHTML += finalseventh;
}