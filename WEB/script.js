
      const loginForm = document.getElementById("loginForm");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");

      loginForm.addEventListener("submit", function (e) {
        let isValid = true;

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

        if (!isValid) {
          e.preventDefault();
        }
        window.location.href = "ind.html";
      });
