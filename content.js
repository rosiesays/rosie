chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		if($(document.activeElement).attr("contenteditable")){
			sendResponse({
				messageText: $(document.activeElement).html(),
				showButtons: true
				});
		} else{
			sendResponse({
				messageText: "To use Rosie, click into an input field, and then click on Rosie to get suggestions for your writing.",
				showButtons: false
				});
		}
});
