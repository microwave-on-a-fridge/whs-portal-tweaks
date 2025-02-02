/**
 * author: pastelle
 * date: 2025-02-02
 * license: MIT
 */

console.log("EXTENSION IS LOADED");

function deletePfp() {
  //const NAVBAR = document.querySelector(".avatar-container");
  const NAVBAR_IMG = document.querySelector(".avatar");
  const REPLACEMENT_URL = browser.runtime.getURL("img/profile.jpg");
  const POPUP = document.querySelector(".school-card-image");
  /*
  if (NAVBAR) {
    NAVBAR.remove();
    console.log("removed pfp");
  } else {
    console.log("pfp is already gone!");
  }*/
  if (NAVBAR_IMG) {
    NAVBAR_IMG.src = REPLACEMENT_URL;
    console.log("replaced pfp");
  } else {
    console.log("idk lol")
  }
  if (POPUP) {
    POPUP.remove();
    console.log("removed pfp");
  } else {
    console.log("pfp is already gone!");
  }
}

function injectSettings() {
  const NAV_PARENT = document.querySelector(".main-nav");
  const SETTINGS_BUTTON = document.createElement("li");
  const BUTTON_CHILD = document.createElement("a");
  const SETTINGS_URL = browser.runtime.getURL("settings.html");

  SETTINGS_BUTTON.className = "nav-item";

  BUTTON_CHILD.className = "sk_nav_text nav-link nav-link-settings";

  BUTTON_CHILD.href = SETTINGS_URL;
  BUTTON_CHILD.textContent = "Extension Settings";

  SETTINGS_BUTTON.appendChild(BUTTON_CHILD);

  if (NAV_PARENT) {
    NAV_PARENT.appendChild(SETTINGS_BUTTON);
  }
}

function colourChange() {
  const NAV_MAIN = document.querySelector(".nav-and-main");
  const NAV = NAV_MAIN.querySelector(".sk_nav");

  if (NAV) {
    NAV.style.setProperty("background-color", "#EFB0FF", "important"); 
  }
  
}

function testing() {
  deletePfp();
  injectSettings();
  //colourChange();
}

setTimeout(testing, 3000);