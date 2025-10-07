
document.getElementById("bookDemoForm").addEventListener("submit", function(e){
  e.preventDefault();

  const form = e.target;
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    program: form.program.value,
    preferredDate: form.preferredDate.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyeDyW0qfBljj5JyzaXOJSElRwW1E20jAwTOseR44rBYwKErkQtvqtVHFiemrhxu4da/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("✅ Demo booked successfully! You’ll receive confirmation shortly.");
    form.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("bookDemoModal"));
    modal.hide();
  })
  .catch(err => alert("❌ Error: " + err));
});
