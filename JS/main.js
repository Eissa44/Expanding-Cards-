const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    removClass();
    item.classList.add("active");
  });
});

function removClass() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
