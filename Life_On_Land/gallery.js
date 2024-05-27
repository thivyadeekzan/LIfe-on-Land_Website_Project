function showExtendedView(id) {
  
  var extendedViews = document.querySelectorAll('.extended-view');
  extendedViews.forEach(function (view) {
    view.style.display = 'none';
  });
  
  var extendedView = document.getElementById('extendedView' + id);
  extendedView.style.display = 'block';

  var blurredElements = document.querySelectorAll('.thumbnail, .gallery img, .arrow-up-button');
  blurredElements.forEach(function (element) {
    element.classList.add('blurred');
  });

}
function closeExtendedView() {
  var extendedViews = document.querySelectorAll('.extended-view');
  extendedViews.forEach(function (view) {
    view.style.display = 'none';
  });

  
  var blurredElements = document.querySelectorAll('.thumbnail, .gallery img, .arrow-up-button');
  blurredElements.forEach(function (element) {
    element.classList.remove('blurred');
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 250) { 
    document.body.classList.add("scroll-up");
  } else {
    document.body.classList.remove("scroll-up");
  }
});


const backgroundSelect = document.querySelector('#backgroundSelect');
const fontSizeSelect = document.querySelector('#fontSizeSelect');
const fontFamilySelect = document.querySelector('#fontFamilySelect')


function setBackground() {
  const selectedColor = backgroundSelect.value;
  document.body.style.backgroundColor = selectedColor;
}

function setFontSize() {
  const selectedSize = fontSizeSelect.value;
  document.body.style.fontSize = selectedSize;
}

function setFontFamily() {
  const selectedFamily = fontFamilySelect.value;
  document.body.style.fontFamily = selectedFamily;
}

setBackground();
setFontSize();
setFontFamily();

backgroundSelect.addEventListener('change', setBackground);
fontSizeSelect.addEventListener('change', setFontSize);
fontFamilySelect.addEventListener('change', setFontFamily);