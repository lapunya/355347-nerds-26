var writeUs = document.querySelector('.foot-btn');
var popup = document.querySelector('.write-us');
var closeWriteUs = popup.querySelector('.close-btn');
var form = popup.querySelector('form');
var inputName = form.querySelector('.in-name');
var inputEmail = form.querySelector('.in-email');

writeUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('write-us-show');
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('write-us-show');
  popup.classList.remove('write-us-error');
});

form.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    popup.classList.remove('write-us-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('write-us-error');
  }
});

if (document.querySelector('.slider')) {
  var slider = document.querySelector('.slider');
  var slides = slider.querySelectorAll('.slide');
  var controls = slider.querySelectorAll('.slider-control');
  var previousSlide = slides[0];
  var previousControl = controls[0];

  controls.forEach(function (item, index) {
    item.onclick = function () {
      if (item !== previousControl) {
        item.classList.add('slider-control-active');
        previousControl.classList.remove('slider-control-active');
        slides[index].classList.add('slide-active');
        previousSlide.classList.remove('slide-active');
        previousSlide = slides[index];
        previousControl = item;
      }
    }
  });
}

var initMap = function () {
  var center = {
    lat: 59.9392,
    lng: 30.3219
  };
  var pin = {
    lat: 59.9388,
    lng: 30.3238
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    disableDefaultUI: false,
    center: center,
  });

  var marker = new google.maps.Marker({
    position: pin,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'nerds',
    icon: {
      url: 'img/map-marker.png',
      scaledSize: new google.maps.Size(231, 190)
    }
  });
};

initMap();
