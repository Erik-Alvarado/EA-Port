const filterSwap = document.querySelector(".filter-green");

// event listener
filterSwap.addEventListener("click", nightSwap);

function nightSwap() {
  if (!document.body.dataset.theme) {
    document.body.dataset.theme = "dark-mode";
    filterSwap.classList.add("dark");
  } else {
    document.body.dataset.theme = "";
    filterSwap.classList.remove("dark");
  }
}
