//RoboticsStuff.js
var content=document.getElementById("content");
var numbar=document.getElementById("numbar");

numbar.style.fontSize=content.style.fontSize;

function numberLines(){
	var preliminaryNumberOfLines;
	var heightOfContent=content.clientHeight//offsetHeight;
	var windowHeight=window.innerHeight
	console.log(heightOfContent);
	var lineHeight=25;//parseInt(content.style.lineHeight);
	console.log(lineHeight);
	preliminaryNumberOfLines=windowHeight/lineHeight;

	//First, make sure that the line numbers fit...
	var widthOfNumbar;

	if (preliminaryNumberOfLines>=100) widthOfNumbar=30;
	else widthOfNumbar=20;

	numbar.style.width=widthOfNumbar + "px";
	var windowWidth=window.innerWidth;
	console.log(windowWidth);
	var widthOfContent=windowWidth-widthOfNumbar-5;
	content.style.width=widthOfContent + "px";

	heightOfContent=content.clientHeight//offsetHeight;
	console.log(heightOfContent);
	lineHeight=25;//parseInt(content.style.lineHeight);
	console.log(lineHeight);
	var numberOfLines=windowHeight/lineHeight;
	var htmlNumbar="";

	for (i=1; i<=numberOfLines; i++) htmlNumbar += `${i}<br>`;

	document.getElementById("numbar").innerHTML=htmlNumbar;
}

//Navigator
var homeString="<span id=a>hackerman@marianopolis</span>:<span id=b>~</span><span id=c>$</span> "
var currentDir=homeString
var info=`Marianonymous Robotics [kernel 5.778-4](c) 2018 Marianopolis College. All lefts reserved.<!-- laglaglaglaglaglaglaglaglaglaglag --><br style=line-height:1px>${currentDir}<!-- laglaglaglaglaglaglaglaglaglaglag --> ls <br><a id=\"game\", class=\"link\", onclick=\"printLink(id)\", href=\"javascript:delay(\'game/game.html\')\">game/</a><br><a href=\"team/team.html\"> team/</a><br><a href=\"robot/robot.html\"> robot/</a><br>${currentDir} `
		var homeString="<br><span id=a>hackerman@marianopolis</span>:<span id=b>~</span><span id=c>$</span> "
		function fillSection(text){
			var repeatFunction=setInterval(addNextLetter, 25);
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
						var textToAdd=substringOfTextLeft.slice(0,indexOfClosing+1);
						sectionToFill.innerHTML+=textToAdd;

						var newIndex=text.indexOf(">",completedLetters);

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
			currentDir=newDir;
			fillSection(`cd ${linkID}<br>Changing directories to \"${linkID}\"<br>${currentDir}`);
		}

		function delay(url){
			setTimeout(function(){window.location=url}, 4000);
		}
//Expand navigator:
var consoleBox=document.getElementById("console");
var boxIsScaled=false;
consoleBox.style.width=75+"px";
consoleBox.style.height=75+"px";
consoleBox.style.overflowY="hidden";


function scaleBox(){
	var desiredHeight;
	var desiredWidth;

	var width=parseInt(consoleBox.style.width);
	var height=parseInt(consoleBox.style.height);

	var resizerator=setInterval(resize, 0.5);

	function resize(){
		if (!boxIsScaled){
			desiredHeight=300;
			desiredWidth=500;

			if (width<desiredWidth && height<desiredHeight){
				width+=2; height+=2;
				consoleBox.style.width=width+"px";
				consoleBox.style.height=height+"px";
			}
			else if (width<desiredWidth){
				width+=2;
				consoleBox.style.width=width+"px";
			}
			else if (height<desiredHeight){
				height+=1;
				consoleBox.style.height=height+"px";
			}
			else{
				boxIsScaled=true;
				clearInterval(resizerator);
				consoleBox.style.overflowY="auto";
				fillSection(info);
			}
		}
		else if (boxIsScaled){
			desiredHeight=75;
			desiredWidth=75;

			/*var charactersRemovedFromText=-1;

			var consoleArea=document.getElementById("consoleArea");
			consoleArea.innerText=consoleArea.innerText.slice(charactersRemovedFromText);
			charactersRemovedFromText--;*/
			document.getElementById("consoleArea").innerHTML="";
			if (width>desiredWidth && height>desiredHeight){
				width-=2; height-=2;
				consoleBox.style.width=width+"px";
				consoleBox.style.height=height+"px";
			}
			else if (width>desiredWidth){
				width-=2;
				consoleBox.style.width=width+"px";
			}
			else if (height>desiredHeight){
				height-=1;
				consoleBox.style.height=height+"px";
			}
			else{
				boxIsScaled=false;
				clearInterval(resizerator);
				consoleBox.style.overflowY="hidden";

			}


		}

	}

}
