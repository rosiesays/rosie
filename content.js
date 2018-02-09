chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({messageText: $(document.activeElement).html()});
});



