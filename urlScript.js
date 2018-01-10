//URL Script
function printLink(linkID){
	var textToPrint=document.getElementById(linkID).innerText;
	
	document.getElementById("output").innerText=textToPrint;
	
	//var url=document.getElementById(linkID).href;
/*	//Manually find link
	var textOutside=document.getElementById(linkID).outerHTML;
	var outerHTMLArray=textOutside.split(" ");
	
	function findhref(arrayOfText){
		for (var i=0; i<arrayOfText.length; i++){
			if (!(arrayOfText[i].search("href"))) return i;
			else continue;
		}
	}
	
	var indexOfHref=findhref(outerHTMLArray);
	var hrefIn=outerHTMLArray[indexOfHref];
	var substringBottom=hrefIn.search("\"");
	var substringTop=hrefIn.lastIndexOf("\"");
	
	var url=hrefIn.substring(substringBottom+1, substringTop);
	//window.setTimeout(window.location.assign(url),100000);*/
}

function delay(url){
	setTimeout(function(){window.location=url}, 2000);
}
