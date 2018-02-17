chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    $("#popupMessage").html(response.messageText);
    var replacements = keywordMatching();
    registerKeywordListeners(replacements);
    //copyToClipboard();
    });
});