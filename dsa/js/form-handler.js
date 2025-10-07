  document.getElementById("sheetForm").addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      phone: this.phone.value,
      interest: this.interest.value
    };

    fetch("https://script.google.com/macros/s/AKfycbyeDyW0qfBljj5JyzaXOJSElRwW1E20jAwTOseR44rBYwKErkQtvqtVHFiemrhxu4da/exec", {
      method: "POST",
      mode: "no-cors", // Google Apps Script requires this for static sites
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("✅ Your request has been submitted! You will receive a call from us shortly. ");
      this.reset();
    })
    .catch(err => alert("❌ Error: " + err));
  });



  document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let data = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxhEqIHoTw9dIKG47fgnUKLMnndDLrE3dAlphOnr4BwaxZXT8jGJv0BWMUcoLBgEomcrQ/exec", {
    method: "POST",
    mode: "no-cors", // Google Apps Script requires this for static sites
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("✅ Thank you! Your message has been sent.");
    this.reset();
  })
  .catch(err => alert("❌ Error: " + err));
});
