document.getElementById('brochureForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const email = formData.get('email').trim(); // <-- uses the name attribute

  if (!email) {
    document.getElementById('formMessage').textContent = 'Please enter a valid email.';
    return;
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyT1gD9AFHvHta8g_9OtzBQ02ttdnUrzd0rQF1wagl3y9oagC18VIAiOivqc6wowFpJ3A/exec';

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const result = await response.json();
    document.getElementById('formMessage').textContent = result.message || 'Request completed.';
    form.reset(); // clears the input after successful submission
  } catch (error) {
    console.error('Error sending email:', error);
    document.getElementById('formMessage').textContent = 'An error occurred. Please try again later.';
  }
});