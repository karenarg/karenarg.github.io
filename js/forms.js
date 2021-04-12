// Scroll thru sections

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onscroll = function() {myFunction()};
        
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// Accordions

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// Form

var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
  e.preventDefault();
  sendData();
});

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData() {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];

  urlEncodedDataPairs.push(
    encodeURIComponent("name") +
      "=" +
      encodeURIComponent(form.querySelector("[name='name']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("send_to") +
      "=" +
      encodeURIComponent(form.querySelector("[name='send_to']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("email") +
      "=" +
      encodeURIComponent(form.querySelector("[name='email']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("phone") +
      "=" +
      encodeURIComponent(form.querySelector("[name='phone']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("comments") +
      "=" +
      encodeURIComponent(form.querySelector("[name='comments']").value)
  );
  
  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", function(event) {
    if (XHR.readyState === XHR.DONE) {
      if (XHR.status === 200) {
        alert("Your message has been sent! Gu will get back to you.");
      } else {
        alert("Oh oh! We have a problem! " + XHR.responseText + ".");
      }
    }
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function(event) {
    // This is normally a timeout or connection error.
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open(form.getAttribute("method"), form.getAttribute("action"));

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
}
