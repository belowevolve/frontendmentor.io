document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const successMessage = document.getElementById("success-message");
  const successMessageMail = document.getElementById("success-message_mail");
  const dismissButton = document.getElementById("dismiss");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      emailInput.className = `${emailInput.className} input-error`;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Valid email is required";
      emailError.style.display = "block";
      emailInput.className = `${emailInput.className} input-error`;
    } else {
      emailError.style.display = "none";
      successMessageMail.textContent = email;
      successMessage.inert = true;
      successMessage.showModal();
      successMessage.inert = false;
      form.reset();
    }
  });

  dismissButton.addEventListener("click", function () {
    successMessage.close();
  });

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
