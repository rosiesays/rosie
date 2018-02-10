chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		if($(document.activeElement).attr("contenteditable")){
			sendResponse({messageText: $(document.activeElement).html()});
		} else{
			sendResponse({messageText: "Please click into an input field"});
		}
		
        
});



