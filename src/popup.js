chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];
  chrome.tabs.remove(currentTab.id, function() {
    window.close();  // Close the popup window
  });
});
