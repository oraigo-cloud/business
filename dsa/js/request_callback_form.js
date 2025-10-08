document.getElementById("requestCallBackForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData();

  // Match your Apps Script parameter names exactly
  formData.append("Name", form.firstName.value + " " + form.lastName.value);
  formData.append("Email", form.email.value);
  formData.append("Phone", form.phone.value);
  formData.append("Interest", form.interest.value);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbymiy00g_L2mpVGIX82HmDbiSy_8pEUGnCwqxO4g2lVumnC9Wnzcpi30F9hSxf-wbYLcw/exec", {
      method: "POST",
      body: formData
    });

    const text = await response.text();
    console.log("Server response:", text);

    if (text.includes("✅ Success")) {
      alert("✅ Your callback request has been submitted!");
      form.reset();
    } else {
      alert("⚠️ Something went wrong: " + text);
    }
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
});

