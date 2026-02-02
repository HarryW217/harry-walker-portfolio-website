//ABOUT ME SECTION TABS

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

//MOBILE VIEW SIDE MENU

const sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

//"SEE MORE" TOGGLE VISIBILITY

const seeMoreBtn = document.getElementById("see-more-btn");
const hiddenProjects = document.querySelector(".hidden-projects");

function handleSeeMoreClick(event) {
  const shown = hiddenProjects.classList.toggle("show");
  const btn = event.currentTarget;
  if (shown) {
    btn.classList.add("move-down");
    btn.textContent = "See Less";
    btn.setAttribute("aria-expanded", "true");
  } else {
    btn.classList.remove("move-down");
    btn.textContent = "See More";
    btn.setAttribute("aria-expanded", "false");
  }
}

seeMoreBtn.addEventListener("click", handleSeeMoreClick);

//CONTACT FORM FUNCTIONALITY

const scriptURL =
  "https://script.google.com/macros/s/AKfycby_2pq69JIyEvpULqSwEZRBo9irdlIItv6B78Z1KjO3Nob0H3du-hPpH9BguqfENRYoqA/exec";
const form = document.forms["submit-to-google-sheet"];
const successMessage = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successMessage.innerHTML = "Message Sent Successfully!";
      setTimeout(() => {
        successMessage.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
