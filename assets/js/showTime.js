function showTime() {
    var i = new Date();
    var h = i.getHours();
    var m = i.getMinutes();
    var s = i.getSeconds();
    var k = i.getDay();
    var c = i.getDate();
    var g = i.getMonth();
    var j = i.getFullYear();
    var l = new Array("الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت");
    var b = new Array("يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر");
    var session = "صباحا";
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    if (h > 12) {
        h -= 12;
        session = "مساءً"
    } else {
        session = "صباحاً"
    }
    var time = l[k] + " " + c + " من " + b[g] + " " + j + " , الساعة الان " + h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout("showTime()", 1000)
}
showTime();

// Set the date we're counting down to
var countDownDate = new Date("April 23, 2020 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="ramdankarem"
  document.getElementById("ramdankarem").innerHTML ="متبقي لرمضان "+ days + " يوم  و " + hours + " ساعة و "
  + minutes + " دقيقة و " + seconds + " ثانية ";
//  document.getElementById("ramdankarem").innerHTML ="متبقي لرمضان "+ days + " يوم  و " + hours + "ساعة "
//  + minutes + "دقيقة " + seconds + "ثانية ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ramdankarem").innerHTML = "شهر مبارك وكل عام وانتم بخير";
  }
}, 1000);