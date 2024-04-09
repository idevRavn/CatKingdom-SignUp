const pwd = document.querySelector("#password");
const cpwd = document.querySelector("#cpassword");
const pwderror = document.querySelector("#error");
const form = document.querySelector("form");

cpwd.addEventListener("input", () => {
  if (pwd.value !== cpwd.value) {
    pwderror.textContent = "*Password does not match";
    pwderror.style.color = "red";
  } else {
    pwderror.textContent = "Password match";
    pwderror.style.color = "green";
  }
});

form.addEventListener("submit", (e) => {
  if (pwderror.textContent === "*Password does not match") {
    e.preventDefault();
  } else {
    window.open("https://github.com/idevRavn", "_blank");
  }
});
