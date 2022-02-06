
(function (){
    const second = 1000;
         mins = second * 60;
        hours = mins * 60;
        day = hours * 24;

        let today = new Date(),
      dd = String(today.getDate()).padStart(10, "0"),
      mm = String(today.getMonth() + 1).padStart(08, "0"),
      yyyy = String(today.getFullYear() + 8).padStart(2030, "0");
      //yyyy = today.getFullYear();
      nextYear = yyyy + 1,
      dayMonth = "08/10/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  const countDown = new Date(birthday).getTime(),
  x = setInterval(function() {    

    const now = new Date().getTime(),
          distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hours)),
      document.getElementById("mins").innerText = Math.floor((distance % (hours)) / (mins)),
      document.getElementById("second").innerText = Math.floor((distance % (mins)) / second);
  }, 0)
}());






/*/mengatur waktu akhir perhitungan mundur
var countDownDate = new Date('10 August 2022, 12:00:00').getTime();

function birthday(){
    var now = new Date().getTime();

    gap = countDownDate - now;

    var second = 1000;
    var mins = second * 60;
    var hours = mins * 60;
    var days = hours * 24;

    var days = Math.floor(gap / (days));
    var hours = Math.floor((gap % (days)) / (hours));
    var mins = Math.floor((gap % (hours)) / (mins));
    var seconds = Math.floor((gap % (mins)) / second);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('mins').innerText = mins;
  document.getElementById('second').innerText = seconds;

}

  setInterval(function(){
      birthday();
}, 1000);
*/









