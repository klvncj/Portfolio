//  const menu = ()=>{
//     document.getElementById('menu').ontoggle = () => {
//         document.getElementById('list').style.display="flex" 
//        }}


//        menu();


document.getElementById('menu').addEventListener('toggle', () => {
    document.getElementById('list').toggleAttribute('toggle', 'flex')
})

var i = 0;
var txt = 'HELLO! I\'M KELVIN';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();




  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var css = Toastify({
  text: "CSS (Cascading Style Sheets) \n This is used to style and layout web pages",
  duration: 5000
 })

 var Tailwind = Toastify({
  text: "Tailwind CSS.\n This is an open source CSS framework",
  duration: 5000
 })

    var html = Toastify({
      text: "HTML5 \n This is a markup language used for structuring and presenting content on the World Wide Web.",
      duration: 5000
     })

     var node = Toastify({
      text: "Node. js \n This is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.",
      duration: 5000
     })

     var javascript = Toastify({
      text: "JavaScript \n This is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else..",
      duration: 5000
     })

     var php = Toastify({
      text: "PHP \n This is a server scripting language, and a powerful tool for making dynamic and interactive Web pages",
      duration: 5000
     })
  