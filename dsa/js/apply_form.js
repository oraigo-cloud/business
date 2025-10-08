document.getElementById("applicationForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData();

  // Personal Info
  formData.append("Full Name", form.querySelector('input[type="text"]').value);
  formData.append("Email", form.email.value || form.querySelector('input[type="email"]').value);
  formData.append("Phone", form.phone.value || form.querySelector('input[type="tel"]').value);
  formData.append("City/Country", form.querySelector('input[placeholder*="City"]').value);

  // Program Details
  formData.append("Program", form.querySelector('select').value);
  formData.append("Preferred Start Month", form.querySelector('input[type="month"]').value);

  // Background
  formData.append("Highest Qualification", form.querySelector('input[placeholder*="Qualification"]').value);
  formData.append("Experience", form.querySelector('select[required]:not([name="Program"])').value);
  formData.append("Background Description", form.querySelector('textarea[placeholder*="experience and interests"]').value);

  // Motivation & Career Goals
  formData.append("Motivation", form.querySelector('textarea[placeholder*="motivation"]').value);
  formData.append("Career Goals", form.querySelector('textarea[placeholder*="Career Goals"]').value);

  // Resume (optional)
  const resumeFile = form.querySelector('input[type="file"]').files[0];
  if (resumeFile) {
    formData.append("Resume", resumeFile);
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxo3HNOFCPkMNCycd_g_z4yD3E9eJQnOAhAYQfdkiN0-WUOLt8aOEXXdeE-FfM_wemh8A/exec", {
      method: "POST",
      body: formData
    });

    const text = await response.text();
    console.log("Server response:", text);

    if (text.includes("✅ Success")) {
      alert("✅ Your application has been submitted successfully!");
      form.reset();
    } else {
      alert("⚠️ Something went wrong: " + text);
    }
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
});
