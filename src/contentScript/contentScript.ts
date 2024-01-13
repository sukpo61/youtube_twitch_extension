const defaultArrange = (state) => {
  const moreInfo = document.getElementById("bottom-row");
  const comments = document.getElementById("comments");
  const fullBleedContainer = document.getElementById("full-bleed-container");
  const primary = document.getElementById("primary");
  const primaryInner = document.getElementById("primary-inner");
  const secondary = document.getElementById("secondary");
  const secondaryInner = document.getElementById("secondary-inner");
  const below = document.getElementById("below");
};

// const resizeObserver = new ResizeObserver((entries) => overlay.place());

const setHtmlAttribute = (state) => {
  const html = document.querySelector("html");
  if (state) {
    html.setAttribute("twitch_default", "");
    return;
  }
  html.removeAttribute("twitch_default");
};

const enterTwichLayout = () => {
  const sizeButton: HTMLElement = document.getElementById(
    "player-full-bleed-container"
  );
  const value = !!sizeButton?.children[1];
  setHtmlAttribute(value);
  chrome.storage.local.set({ isOn: value });
};

const toggleTwichLayout = () => {
  chrome.storage.local.get(["isOn"], (result) => {
    let value = !result.isOn;
    chrome.storage.local.set({ isOn: value });
    setHtmlAttribute(value);
  });
};

const addEventToSizeButton = () => {
  const sizeButton = document.querySelector(".ytp-size-button");
  sizeButton.addEventListener("click", toggleTwichLayout);
};

setTimeout(() => {
  enterTwichLayout();
  addEventToSizeButton();
}, 1000);
