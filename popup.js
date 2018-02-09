chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.messageText);
    $("#popupMessage").html(response.messageText);
    console.log("THIS IS HAPPENING IN THE POPUPJS THING");
    });
});