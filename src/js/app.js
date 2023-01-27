import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document.querySelector(".image")
  .addEventListener("click", (e) => {
   document.querySelector(".image").style.transform  = "scale(2)"
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
