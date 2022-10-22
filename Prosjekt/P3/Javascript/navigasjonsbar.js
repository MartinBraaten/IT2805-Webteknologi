nav = document.getElementsByTagName('nav')[0];
nav.innerHTML = `<div id='navBar'>
    <div class='logoBox'>
        <a href="hjemskjerm.html">
        <img src="img/LogoSample_ByTailorBrands–Kopi.jpg" class="logoicon" alt="Emilios logo">
        </a>
    </div>
    <ul class="nav-links">
        <li>
            <a href="hjemskjerm.html">Hjem</a>
        </li>
        <li>
            <a href="menu.html">Meny</a>
        </li>
        <li>
            <a href="bordreservasjon.html">Reservasjon</a>
        </li>
        <li>
            <a href="sokejobb.html">Søk jobb</a>
        </li>
        <li>
            <a href="#footer">Kontaktinfo</a>
        </li>
        <li>
        <div class="iconBox">
            <a href="http://bitly.com/98K8eH" target="_blank">
            <img src="ICon/download__1_-removebg-preview.png" alt="Instagram Icon" class="icon"> 
            </a>
            <a href="http://bitly.com/98K8eH" target="_blank">
            <img class="icon" src="ICon/4202107facebookfblogosocialsocialmedia-115710_115591.png" alt="Facebook Icon">
            </a>
        </div>
        </li>
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</div>`;


//Responsive navbar

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();


// get navbar on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navBar').style.top = '0';
  } else {
    document.getElementById('navBar').style.top = '-200px';
  }
  prevScrollpos = currentScrollPos;
}
