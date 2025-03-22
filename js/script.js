let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: ["Termurah", "Terpercaya", "Terlengkap"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

function applyTheme(gender) {
  if (gender === "female") {
    document.documentElement.style.setProperty(
      "--bg-color",
      "#ffe4e1"
    ); /* Warna pink muda */
    document.documentElement.style.setProperty(
      "--snd-bg-color",
      "#ffb6c1"
    ); /* Warna pink */
    document.documentElement.style.setProperty(
      "--text-color",
      "#800080"
    ); /* Warna ungu */
    document.documentElement.style.setProperty(
      "--main-color",
      "#ff69b4"
    ); /* Warna pink cerah */
  } else {
    document.documentElement.style.setProperty(
      "--bg-color",
      "#fff"
    ); /* Kembali ke default */
    document.documentElement.style.setProperty("--snd-bg-color", "#d5fdf9");
    document.documentElement.style.setProperty("--text-color", "#000");
    document.documentElement.style.setProperty("--main-color", "#007f73");
  }
}
