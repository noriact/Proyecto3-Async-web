import { injectGallery, fetchPhotos } from "./gallery";
import { exampleResponse } from "./main";

const headerTemplate= () => {
  return `
  <h1>I</h1>
  <input type="text" placeholder="Search" id="searchinput"/>
  <nav id="headerButtons">
    <button id="searchButton"><i class="fa fa-search"></i></button>
    <button id="darkModeButton"><i class="fa fa-bed" id="darkmodeicon"></i></button>
    <button id="profileButton"><i class="fa fa-smile-o"></i></button>
  </nav>`;
};

const setUpHeaderListeners = () => {
  const darkModeButton = document.querySelector("#darkModeButton");
  darkModeButton.addEventListener("click", () => {
    themeSwitch();
    const isThemeDarkActive = document.body.classList.contains("dark");
    // Si el tema es oscuro, el boton se pone claro y viceversa
    if (isThemeDarkActive) {
      document.querySelector("#darkmodeicon").src = "/icons/light.svg";
    } else {
      document.querySelector("#darkmodeicon").src = "/icons/dark.svg";
    }
  });

  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", async () => {
    const searchInput = document.querySelector("#searchinput");
    const photos = await fetchPhotos(searchInput.value);
    if (searchInput.value.length) {
      injectGallery(photos);
    }
  });
};

const themeSwitch = () => {
  document.body.classList.toggle("dark");
};

export const printHeaderTemplate = () => {
  document.querySelector("header").innerHTML = headerTemplate();
  setUpHeaderListeners();
};
