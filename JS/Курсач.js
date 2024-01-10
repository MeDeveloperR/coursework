$(document).ready(function(){
   $('.header_burger').click(function(event) {
      $('.header_burger, .header_menu').toggleClass("active")
   })
});





document.addEventListener("DOMContentLoaded", function() {
   let example = document.querySelector(".up");

   example.addEventListener("mouseover", function() {
     example.style.background = "rgb(110, 110, 110,0.4)";
   });

   example.addEventListener("mouseleave", function() {
     example.style.background = "rgb(110, 110, 110)";
   });

   example.addEventListener("click", function() {
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
   });
 });
 