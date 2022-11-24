(function () {
  
  "use strict";
  // get all data in form and return object
  function getFormData() {
    
    var name = document.getElementById("name").value,
      email = document.getElementById("email").value,
      subject = document.getElementById("subject").value,
      message = document.getElementById("message").value,
      url = document.getElementById("url").value,
      formData = {};
    
    formData.name = name;
    formData.email = email;
    formData.subject = subject;
    formData.message = message;
    formData.url = url;
    return formData;
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData(),
      url = event.target.action,
      xhr = new XMLHttpRequest();
    
    $('#submition').fadeOut(750, function () {
      $('#sending').fadeIn(750, function () {
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
          console.log(this.readyState, xhr.status, xhr.statusText);
          if (this.readyState === 4) {
            if (this.status === 200) {
              $('#sending').delay(1600).fadeOut(750, function () {
                $('#sent').fadeIn(750, function () {});
              });
            } else {
              $('#sending').delay(1600).fadeOut(750, function () {
                $('#error').fadeIn(750, function () {});
              });
            }
          } else {
            console.log(this.readyState + this.status);
          }
          return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      });
    });
  }
  
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var form = document.getElementById("SubmitionForm");
    form.addEventListener("submit", handleFormSubmit, false);
  }
  document.addEventListener("DOMContentLoaded", loaded, false);
}());