var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

function sendContact() {
  alert("Your Message has been sent!");
}

function alert(message, type) {
  document.getElementById('liveAlertPlaceholder').innerHTML = "";
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  var wrapper = document.createElement('div')
  document.getElementById('emailInput').value= "";
  document.getElementById('subjectInput').value= "";
  document.getElementById('messageInput').value= "";
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  console.log(wrapper)
  alertPlaceholder.append(wrapper)

}

function portfolioModalNext() {
  console.log("dfsd")
  $('.close').click(function(){
    if ($('.one').is(':checked'))
    {
      $("#portfolio1").modal('toggle');
    }
  })
}


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Developer", "Photographer", "Student", "Dreamer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
