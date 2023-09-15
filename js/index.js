var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1 ,countDownDate.getMonth() - 6 , 1);

/* --------------------------------- counter -------------------------------- */
var x = setInterval(function(){
    var now = new Date();
    var diff = countDownDate - now;

    var month = Math.floor(diff / (1000 *60 *60 *24 *30));
    var days = Math.floor((diff % (1000 *60 *60 *24 *30)) / (1000*60*60*24));
    var hours = Math.floor((diff % (1000*60*60*24))  / (1000*60*60));
    var minuntes = Math.floor((diff % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minut").innerHTML = minuntes;
    document.getElementById("second").innerHTML = seconds;
}, 1000);

/* ------------------------------- validation ------------------------------- */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()