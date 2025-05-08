
      const signupForm = document.getElementById("signupForm");
      const fullNameInput = document.getElementById("fullName");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const confirmPasswordError = document.getElementById(
        "confirmPasswordError"
      );

      signupForm.addEventListener("submit", function (e) {
        let isValid = true;

        if (!fullNameInput.checkValidity()) {
          nameError.style.display = "block";
          isValid = false;
        } else {
          nameError.style.display = "none";
        }

        if (!emailInput.checkValidity()) {
          emailError.style.display = "block";
          isValid = false;
        } else {
          emailError.style.display = "none";
        }

        if (!passwordInput.checkValidity()) {
          passwordError.style.display = "block";
          isValid = false;
        } else {
          passwordError.style.display = "none";
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
          confirmPasswordError.style.display = "block";
          isValid = false;
        } else {
          confirmPasswordError.style.display = "none";
        }

        if (!isValid) {
          e.preventDefault();
        }
        window.location.href = "login.html";
      });
 