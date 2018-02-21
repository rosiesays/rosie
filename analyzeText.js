var count = 0;
var keyReplacements;
keywordMatching = () => {
    var keywords = WORDS.words.map((word) => word.keyword);
    var keywordMatches = getKeywordMatches(keywords);
    keyReplacements = getKeyReplacements(keywordMatches,keywords);
    if(keywordMatches !== null) {
        keywordMatches.forEach((matchedWord) => {
            $("#popupMessage").html(function(_, html) {
                //Changes the CSS class if the keyword is bad
                let warningMessage = WORDS.words[keywords.indexOf(matchedWord)].message;
                let id = "warningId"+count;
                let returnValue = html.replace(new RegExp("[^>]"+matchedWord), ` <span id= "${id}" class="warning" title="${removeCode(warningMessage)}">${removeCode(matchedWord)}</span>`);
                count++;
                return returnValue;
            });
        });
    }
    return keyReplacements;
}

registerKeywordListeners = (keyReplacements) => {
    for(var x = 0; x<keyReplacements.length; x++){
        document.getElementById("warningId"+x).addEventListener("dblclick", trackAcceptChange);
        document.getElementById("warningId"+x).addEventListener("dblclick", function(){
            this.innerHTML=keyReplacements[parseInt(this.id.replace("warningId", ""))];
            this.classList.remove("warning");
        });
    }
    document.getElementById("allChange").addEventListener("click", AcceptAllChanges);
}

function removeCode(str){
    return str.replace(/<[^>]*>/g, "");
}

function prepareForCopy(str){	
	var removeNewLines = str.replace(/\r?\n|\r/g, "");
	var removeDivDiv = removeNewLines.replace(/<div><div>/g, "\n");
	var removeDiv = removeDivDiv.replace(/<div><\/div>/, "").replace(/<div>/g, "\n");
	var removeP = removeDiv.replace(/<p><\/p>/g, "").replace(/<\/p>/g, "\n");
	var removeBr = removeP.replace(/<br>/g, "\n");
	var removeFbSpan = removeBr.replace(/<span data-text="true">/, "");
	removeFbSpan = removeFbSpan.replace(/<span data-text="true">/g, "\n");
	return removeCode(removeFbSpan).replace(/&nbsp;/g, "");
}

AcceptAllChanges = () => {    
    var keywords = WORDS.words.map((word) => word.keyword);
    var matches = getKeywordMatches(keywords);
    var replacements = keyReplacements;
    for(var x = 0;x<replacements.length; x++){
        var element = document.getElementById("warningId"+x)
        element.innerHTML=replacements[parseInt(element.id.replace("warningId", ""))];
        element.classList.remove("warning"); 
    }
}

getKeywordMatches = (keywords)=>{
    var inputString = $("#popupMessage").html().toString();
    //Creates reguar expression that matches the json keywords
    var keywordMatcher = new RegExp(keywords.join("|"), "g");
    var keywordMatches = inputString.match(keywordMatcher);
    return keywordMatches;
}

getKeyReplacements = (keywordMatches, keywords)=>{
    return keywordMatches.map((word)=>WORDS.words[keywords.indexOf(word)].replacement);
}