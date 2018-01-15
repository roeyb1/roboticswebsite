//RoboticsStuff.js
//Navigator
var repeatFunction;
var flashCursor;
var homeString="<br><span id=\"aSecond\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bSecond\", class=\"b\">~</span><span id=\"cSecond\", class=\"c\">$</span> ";
		var currentDir=homeString;
		var welcomeText="<p>Marianonymous Robotics [kernel 5.778-4](c) 2018 Marianopolis College. All lefts reserved. Toutes gauches r\u00e9serv\u00e9s.</p><p>marianopolis login:       hackerman<br>password:                                    </p><br style=line-height:2px><p id=\"bonjour\"style=\"font-size:40px;text-align:center\">Bonjour, Hi!</p><p id=\"welcome\"style=\"font-size:40px;text-align:center\">Welcome to/Bienvenu \u00e0</p><p id=\"marianonymousHeader\"style=\"font-size:56px;text-align:center\">MARIANONYMOUS</p><p style=line-height:20px><span id=\"aFirst\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bFirst\", class=\"b\">~</span><span id=\"cFirst\", class=\"c\">$</span> ls <br>Choose your language / SVP choisissez votre langue</p><p id=\"links\", style=lineHeight:20px><a id=\"fran\u00e7ais\", onclick=\"printLink(id)\", href=\"javascript:delay(\'home/home_fr.html\')\", onmouseenter=\"correctText(id)\", onmouseleave=\"correctText(id)\">ASSEMBLY</a><!---id=\"links\"-->   <a id=\"english\", onclick=\"printLink(id)\", href=\"javascript:delay(\'home/home_en.html\')\", onmouseover=\"correctText(id)\", onmouseleave=\"correctText(id)\">HASKELL</a></p><br><span id=\"aSecond\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bSecond\", class=\"b\">~</span><span id=\"cSecond\", class=\"c\">$</span> ";
		//var homeString="<br><span id=a>hackerman@marianopolis</span>:<span id=b>~</span><span id=c>$</span> "
		function fillSection(text){
			var repeatFunction=setInterval(addNextLetter, 10);
			var sectionToFill=document.getElementById("consoleArea");
			var cursor=document.getElementById("cursor");
			//cursor.style.opacity=1;
			var fullText=sectionToFill.innerHTML+text;

			var completedLetters=0;
			var printingComplete=false;
			var flashCursor;

			function cursorFlash(){
				var cursorOpacity;
				switch (cursor.style.opacity){
					case "0":
						cursorOpacity=1;
						break;
					case "1":
						cursorOpacity=0;
						break;
					default:
						cursorOpacity=1;

				}
				cursor.style.opacity=cursorOpacity.toFixed();

			}

			function addNextLetter(){
				clearInterval(flashCursor);
				//var tagBeginning;
				//var tagEnd;
				if (completedLetters>=text.length){
					sectionToFill.innerHTML=fullText;
					clearInterval(repeatFunction);
					//flashCursor=setInterval(cursorFlash,5);
					printingComplete=true;
				}else{
					if (text[completedLetters] != "<"){
					cursor.style.opacity=0;
					sectionToFill.innerHTML+=text[completedLetters];
					completedLetters++;
					//cursor.style.opacity=1;
					}
					else if (text[completedLetters] == "<"){
						//Add the html tags separately
						var substringOfTextLeft=text.substring(completedLetters);
						var indexOfClosing=substringOfTextLeft.indexOf(">");
						var idOfTag;//search for "id", then for class//No! Don't need to search for class! id is enough!!!!
						var textToAdd=substringOfTextLeft.slice(0,indexOfClosing+1);
						sectionToFill.innerHTML+=textToAdd;

						var newIndex=text.indexOf(">",completedLetters);
						//Search for id
						var presenceOfId=textToAdd.search("id");

						if (presenceOfId==-1){
							sectionToFill=document.getElementById("consoleArea");
						} else{
							var firstQuote=textToAdd.indexOf("\"");
							var closingQuote=textToAdd.indexOf("\"",firstQuote+1);
							idOfTag=textToAdd.slice(firstQuote+1,closingQuote);
							sectionToFill=document.getElementById(idOfTag);

						}

						completedLetters=newIndex+1;
					}
					//Now, how to figure out the tags... A possibility is to figure out the id of the tag, and then have it add to that tag... quite the idea, especially since we can perform a search for the text "id", and thus ignore the
					printingComplete=false;
				}
				startCursor();
			}




			function startCursor(){
				if (printingComplete) flashCursor=setInterval(cursorFlash,500);
				else {}

			}
			//var flashCursor=setInterval(cursorFlash, 15);
			//cursor.style.opacity=1;

		}

		function printLink(linkID){
			var textToPrint=document.getElementById(linkID).innerText;
			var newDir=homeString.replace("~",`~/${linkID}`);
			newDir=newDir.replace("\"aSecond\"","\"aThird\"");
			newDir=newDir.replace("\"bSecond\"","\"bThird\"");
			newDir=newDir.replace("\"cSecond\"","\"cThird\"");
			currentDir=newDir;
			var newText;
			fillSection(`cd ${linkID}<br>  Changing directories to \"${linkID}\"   <br>${currentDir}`);
		}

		function correctText(id){
			if (document.getElementById(id).innerHTML==id.toUpperCase()){
				if (id=="fran\u00e7ais") document.getElementById(id).innerHTML="ASSEMBLY";
				else if (id=="english") document.getElementById(id).innerHTML="HASKELL";

			}
			else document.getElementById(id).innerHTML=id.toUpperCase();
		}


		function delay(url){
			setTimeout(function(){window.location=url}, 4000);
			clearInterval(flashCursor);
		}

/*
if ((window.innerHeignt > window.innerWidth){
	backgroundSize = window.innerWidth;
} else {
	backgroundSize = window.innerHeignt;
}*/
