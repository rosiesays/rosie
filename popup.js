chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    $("#popupMessage").html(response.messageText);
    var replacements = keywordMatching();
    registerKeywordListeners(replacements);
    //copyToClipboard();
    });
});

// function copyToClipboard() {
//     var clipboard = new Clipboard('#copyButton');
//     console.log("Are you even being called lol");
//     clipboard.on('success', function(e) {
//         console.log("This worked");
//     });
//     clipboard.on('error', function(e) {
//         console.log("This did not work");
//     });
// }

// //Not currently functional at all
// function stripText() {
//     document.addEventListener('DOMContentLoaded', function() {
//         var link = document.getElementById("#copyButton");
//         link.addEventListener('click', function() {
//             $(span).removeClass("warning");
//         });
//     });
// }