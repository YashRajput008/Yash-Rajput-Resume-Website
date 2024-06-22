document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("hoverText");
  const content = text.textContent;
  text.innerHTML = content
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");
});
