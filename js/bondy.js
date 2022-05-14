function removeActive(arr, Activation = false) {
  if (Activation == true) {
    arr.forEach((element) => {
      element.addEventListener("click", () => {
        arr.forEach((element) => {
          element.classList.remove("active");
        });
        element.classList.add("active");
      });
    });
  } else {
    arr.forEach((element) => element.classList.remove("active"));
  }
}
function filtring(selectors, items) {
  selectors.forEach((select) => {
    select.addEventListener("click", () => {
      removeActive(selectors);
      select.classList.add("active");
      removeActive(items);
      document
        .querySelectorAll(
          `.${items[0].parentElement.parentElement.classList[0]} .${items[0].parentElement.classList[0]} .${select.dataset.typefilter}`
        )
        .forEach((item) => item.parentElement.classList.add("active"));
    });
  });
}
let selectors = document.querySelectorAll(".our-work ul li");
let choosers = document.querySelectorAll(".our-work .row .col-sm-6");
filtring(selectors, choosers);
let btn_show_search = document.querySelector(".navbar .search #btn-sh-search");
let inp_search = document.querySelector(".navbar .search input");
document.addEventListener("click", (ev) => {
  if (
    ev.target !== btn_show_search &&
    ev.target !== inp_search &&
    ev.target !== btn_show_search.children[0]
  ) {
    inp_search.classList.remove("active");
  }
});
inp_search.addEventListener("keyup", (ev) => {
  if (ev.key == "Enter") {
    window.find(inp_search.value);
  }
});
btn_show_search.addEventListener("click", () => {
  inp_search.classList.toggle("active");
  inp_search.focus();
});
