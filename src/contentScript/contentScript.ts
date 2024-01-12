const defaultArrange = (state) => {
  //리팩토링 필요

  const moreInfo = document.getElementById("bottom-row");
  const comments = document.getElementById("comments");
  const fullBleedContainer = document.getElementById("full-bleed-container");
  const primary = document.getElementById("primary");
  const primaryInner = document.getElementById("primary-inner");
  const secondary = document.getElementById("secondary");
  const secondaryInner = document.getElementById("secondary-inner");
  const below = document.getElementById("below");
  if (moreInfo && comments && secondaryInner) {
    if (state) {
      fullBleedContainer.appendChild(below);
      below.appendChild(secondaryInner);
      secondary.appendChild(moreInfo);
      secondary.appendChild(comments);
      return;
    }
    primaryInner.appendChild(below);
    secondary.appendChild(secondaryInner);
    below.appendChild(moreInfo);
    below.appendChild(comments);
  }
};

const setHtmlAttribute = (state) => {
  const html = document.querySelector("html");
  if (state) {
    html.setAttribute("twitch_default", "");
    return;
  }
  html.removeAttribute("twitch_default");
};

const enterTwichLayout = () => {
  chrome.storage.local.get(["isOn"], (result) => {
    let value = result.isOn;
    if (value) {
      defaultArrange(value);
      setHtmlAttribute(value);
      return;
    }
  });
};

const toggleTwichLayout = () => {
  chrome.storage.local.get(["isOn"], (result) => {
    let value = !result.isOn;
    chrome.storage.local.set({ isOn: value });
    setHtmlAttribute(value);
    defaultArrange(value);
  });
};

const appendToggleIcon = () => {
  // let svg =
  //   "<svg viewBox='0 0 200 200'><rect x='20' y='50' width='100' height='100'/><rect x='140' y='50' width='40' height='100'/></svg>";
  // let button = document.createElement("button");
  // button.innerHTML = svg;
  // button.classList.add("ytp-button");
  // button.addEventListener("click", toggleTwichLayout);

  // const controls = document.querySelector("#movie_player .ytp-chrome-bottom");
  // const rightControls = controls.querySelector(".ytp-right-controls");
  // rightControls.appendChild(button);

  const sizeButton = document.querySelector(".ytp-size-button");

  sizeButton.addEventListener("click", toggleTwichLayout);
};

chrome.storage.local.set({ isOn: false });

setTimeout(() => {
  enterTwichLayout();
  appendToggleIcon();
}, 1000);
