(function () {
  const formEmail = document.getElementById("sendForm");
  const emailText = formEmail.querySelector("input");

  let dinamycImage = document.querySelector(".rightContainer > img");

  const protocol = window.location.protocol;
  const host = window.location.host;

  checkMedia();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function checkMedia() {
    if (window.innerWidth > 768) {
      dinamycImage.src = "./assets/images/illustration-sign-up-desktop.svg";
    } else {
      dinamycImage.src = "./assets/images/illustration-sign-up-mobile.svg";
    }
  }

  window.addEventListener("resize", checkMedia);

  formEmail.addEventListener("submit", (e) => {
    e.preventDefault();
    let flag = true;

    if (emailText.value == "") {
      flag = false;
    } else if (validateEmail(emailText.value) == null) {
      flag = false;
    }

    if (!flag) {
      emailText.classList.add("error");

      document.querySelector(".errorMessage").style.display = "block";
    } else {
      document.querySelector(".errorMessage").style.display = "none";
      emailText.classList.remove("error");

      //Exit sending email
      let thanksPopup = `
        <div class="thanksPopup">
          <img src="../assets/images/icon-success.svg">
          <h2>Thanks for subscribing!</h2>
          <p>An email confirmation has been sent to ${emailText.value}. Please open it and click the button inside to confirm your subscription.</p>
          <button class="dismissMessageBtn">Dismiss message</button>
        </div>
    `;
      document.querySelector(".container").innerHTML = thanksPopup;
    }
  });

  document.addEventListener("click", someListener);

  function someListener(event) {
    var element = event.target;
    if (
      element.tagName == "BUTTON" &&
      element.classList.contains("dismissMessageBtn")
    ) {
      location.reload();
    }
  }
})();
