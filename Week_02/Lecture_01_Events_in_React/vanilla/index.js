// We need an imperative approach with vanilla javascript.

const btn = document.getElementById("time-alert");

btn.addEventListener("click", () => alert(new Date()));

// const root = document.getElementById("root");

// const divInRoot = document.createElement("div");
// divInRoot.classList.add("container");

// root.append(divInRoot);

const emailInput = document.getElementById("email");

emailInput.addEventListener("change", (event) => {
  console.log(event);
});
