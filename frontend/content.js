const currentPage = {
  url: window.location.href,
  title: document.title,
  body: document.body.innerText, // You can change this to `document.body.innerHTML` for HTML
};

// Listens for requests from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getPageData") {
    sendResponse(currentPage);
  }
});
