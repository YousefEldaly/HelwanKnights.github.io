// Theme-Mode

window.onload = function() {
  // try to get the theme from local storage if it doesn't exist set to default
      let currentTheme = localStorage.getItem("mytheme") || "default";
      setTheme("default", currentTheme);
  // get the theme selector 
      const themeSelector = document.getElementById("theme-selector");
      themeSelector.value = currentTheme;

      themeSelector.addEventListener("change", function(e) {
        const newTheme = e.currentTarget.value;
        setTheme(currentTheme, newTheme);
      });

      function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];

        body.classList.remove(oldTheme);
        body.classList.add(newTheme);

        currentTheme = newTheme;

        // Store the new theme in local storage
        localStorage.setItem("mytheme", newTheme);
      }
    };





// Validation
function ValidateEmailLogin(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Welcome to Pyramids!");
}
else
{
alert("You have entered an invalid email address!");
document.login.email.focus()
return false;
}
}

function ValidateEmailSignUp(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
}
else
{
alert("You have entered an invalid email address!");
document.register.user_email.focus()
return false;
}
}
