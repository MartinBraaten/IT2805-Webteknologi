footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `<div id="kontaktoss">
  <div id="epost" class="kontaktIcon">
    <img src="ICon/outline_email_white_48dp.png" alt="Email Icon"> <br>
    <a class="foot" href="mailto:emilios@example.com">emilios@example.com</a>
  </div>
  <div id="telefon" class="kontaktIcon">
    <img src="ICon/baseline_phone_white_48dp.png" alt="Phone Icon"> <br>
    <a class="foot" href="tel:+4712345678">+47 123 45 678</a>
  </div>
  <div id="åpningstider" class="kontaktIcon">
    <img src="ICon/outline_schedule_white_48dp.png" alt="Clock Icon">
    <p id="åpning" class="foot">Mandag-Søndag: <br>16.00-23.00</p>
  </div>
  <div id="kart" class="kontaktIcon">
    <a id="kartIcon" class="foot" target="_blank" href="https://www.google.no/maps/place/63%C2%B024'55.4%22N+10%C2%B024'16.9%22E/@63.4154526,10.4024567,16.52z/data=!4m5!3m4!1s0x0:0x0!8m2!3d63.4154!4d10.4047">
      <img src="ICon/baseline_place_white_48dp.png" id="mapIcon" alt="Place Marker Icon"> <br>
      Høyskoleringen 5 <br> 7034 Trondheim
    </a>
  </div>
  <div id="sosialeMedier" class="kontaktIcon">
    <a class="foot" href="http://bitly.com/98K8eH" target="_blank">
      <img src="ICon/download__1_-removebg-preview.png" alt="Instagram Icon" id="socialIcon">
    </a>
    <a class="foot" href="http://bitly.com/98K8eH" target="_blank">
      <img src="ICon/4202107facebookfblogosocialsocialmedia-115710_115591.png" id="socialIcon" alt="Facebook Icon">
    </a>
  </div>
</div>`;

// the api was inspired by the code on https://developers.google.com/maps/documentation/javascript/examples/
var api_src = document.createElement("script");
api_src.setAttribute(
  "src",
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyARs9TxcFeNl-OhvKHiB7BMNNwhl71-V9w&callback=initMap"
);
document.head.appendChild(api_src);
