chrome.runtime.onInstalled.addListener(({ reason }) => {
  switch (reason) {
    case "install":
      chrome.storage.local.set({ isOn: true });
      break;
    case "update":
      chrome.tabs.create({
        url: "ExtensionInfo/UpdateNotes.html",
        active: false,
      });
      break;
  }
});
