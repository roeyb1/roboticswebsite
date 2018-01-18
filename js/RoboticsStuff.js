//RoboticsStuff.js
var content=document.getElementById("content");
var numbar=document.getElementById("numbar");

numbar.style.fontSize=content.style.fontSize;

function numberLines(){
	getLang();
	getInfo();
	var preliminaryNumberOfLines;
	var heightOfContent=content.clientHeight;//offsetHeight;
	var windowHeight=window.innerHeight;
	console.log(heightOfContent);
	var lineHeight=25;//parseInt(content.style.lineHeight);
	console.log(lineHeight);
	if (heightOfContent>windowHeight) preliminaryNumberOfLines=heightOfContent/lineHeight;
	else preliminaryNumberOfLines=windowHeight/lineHeight;

	//First, make sure that the line numbers fit...
	var widthOfNumbar;

	if (preliminaryNumberOfLines>=1000) widthOfNumbar=40;
	else if (preliminaryNumberOfLines>=100) widthOfNumbar=30;
	else widthOfNumbar=20;

	numbar.style.width=widthOfNumbar + "px";
	var windowWidth=window.innerWidth;
	console.log(windowWidth);
	var widthOfContent=windowWidth-(widthOfNumbar+5);
	content.style.width=widthOfContent + "px";
	var widthOfContentText=widthOfContent-10;
	content.style.paddingRight="1cm";
	content.style.left=widthOfNumbar+5+"px";

	heightOfContent=content.clientHeight;//offsetHeight;
	console.log(heightOfContent);
	lineHeight=25;//parseInt(content.style.lineHeight);
	console.log(lineHeight);
	var numberOfLines;
	if (heightOfContent>windowHeight) numberOfLines=heightOfContent/lineHeight;
	else numberOfLines=windowHeight/lineHeight;
	var htmlNumbar="";

	for (i=1; i<=numberOfLines; i++) htmlNumbar += `${i}<br>`;

	document.getElementById("numbar").innerHTML=htmlNumbar;
	numbar.style.bottom=0+"px";
	if (heightOfContent>windowHeight) numbar.style.height=heightOfContent+"px";
	else numbar.style.height=windowHeight+"px";

}

//Cookies
/*var consoleHasAnimated;

function getAnimatedCookie(){
	var consoleCookie=document.cookie;
	if (consoleCookie==null||consoleCookie==undefined) consoleHasAnimated=false;
	else{
		var beforeStartingIndex=document.cookie.search("consoleHasAnimated=");
		var startingIndex=document.cookie.indexOf("=",beforeStartingIndex);
		//var endingIndex=document.cookie.indexOf(";",startingIndex);
		cookieContents=document.cookie.slice(startingIndex+1);
		if (cookieContents=="true") consoleHasAnimated=true;
		else consoleHasAnimated=false;
	}

	console.log(consoleCookie);
	console.log(document.cookie);
}*/

var lang;
var info;
var nagivateText;

function getLang(){
	if (window.location.pathname.search("fr")!=-1) lang="fr";
	else lang="en";
}

function getInfo(){
	if (lang=="en") {
		info=infoEng;
		navigateText="Navigate";
	}
	else if (lang=="fr"){
		info=infoFR;
		navigateText="Naviguer";
	}
}
//Navigator
var repeatFunction;
var flashCursor;
var homeString="<br><span id=\"aSecond\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bSecond\", class=\"b\">~</span><span id=\"cSecond\", class=\"c\">$</span> ";
		var currentDir=homeString;
		var language=lang;
		var infoEng=`
		Marianonymous Robotics [kernel 5.778-4](c) 2018 Marianopolis College. All lefts reserved.<!-- laglaglaglaglaglaglaglaglaglaglag --><br style=line-height:1px><span id=\"aFirst\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bFirst\", class=\"b\">~</span><span id=\"cFirst\", class=\"c\">$</span><!--lag-->ls <br>
		<a id=\"home\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/home.html\')\">home/</a><br>
		<a id=\"game\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/game.html\')\">game/</a><br>
		<a id=\"team\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/team.html\')\"> team/</a><br>
		<a id=\"robot\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/robot.html\')\"> robot/</a><br>
		<a id=\"gallery\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/gallery.html\')\">gallery/</a><br>
		<a id=\"journal\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../en/journal.html\')\"> journal/</a><br><span id=\"aSecond\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bSecond\", class=\"b\">~</span><span id=\"cSecond\", class=\"c\">$</span> `;
		var infoFR=`
		Marianonymous Robotics [kernel 5.778-4](c) 2018 Marianopolis College. Toutes gauches r\u00e9serv\u00e9es.<!-- laglaglaglaglaglaglaglaglaglaglag --><br style=line-height:1px><span id=\"aFirst\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bFirst\", class=\"b\">~</span><span id=\"cFirst\", class=\"c\">$</span><!--lag-->ls <br>
		<a id=\"accueil\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/home.html\')\">accueil/</a><br>
		<a id=\"jeu\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/game.html\')\">jeu/</a><br>
		<a id=\"\u00e9quipe\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/team.html\')\">\u00e9quipe/</a><br>
		<a id=\"robot\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/robot.html\')\">robot/</a><br>
		<a id=\"gallerie\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/gallery.html\')\">gallerie/</a><br>
		<a id=\"journal\", onclick=\"printLink(id)\", href=\"javascript:delay(\'../fr/journal.html\')\"> journal/</a><br><span id=\"aSecond\", class=\"a\">hackerman@marianopolis</span>:<span id=\"bSecond\", class=\"b\">~</span><span id=\"cSecond\", class=\"c\">$</span> `;
		//var homeString="<br><span id=a>hackerman@marianopolis</span>:<span id=b>~</span><span id=c>$</span> "
		
var printingComplete;
var sectionToFill;
var repeatFunction;

		function fillSection(text){
			clearInterval(repeatFunction);
			repeatFunction=setInterval(addNextLetter, 5);
			sectionToFill=document.getElementById("consoleArea");
			var cursor=document.getElementById("cursor");
			//cursor.style.opacity=1;
			var fullText=sectionToFill.innerHTML+text;

			var completedLetters=0;
			printingComplete=false;
			clearInterval(flashCursor);

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

				if (completedLetters>=text.length || printingComplete){
					sectionToFill.innerHTML=fullText;
					printingComplete=true;
					clearInterval(repeatFunction);
					//flashCursor=setInterval(cursorFlash,5);

				}else{
					console.log(text.charAt(completedLetters));
					if (text.charAt(completedLetters) != "<"){
					cursor.style.opacity=0;
					sectionToFill.innerHTML+=text.charAt(completedLetters);
					completedLetters++;
					//cursor.style.opacity=1;
					}
					else if (text.charAt(completedLetters) == "<"){
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
var changingDirs=false;

		function printLink(linkID){
			getLang();
			changingDirs=true;
			consoleBox.onmouseleave="";
			var textToPrint=document.getElementById(linkID).innerText;
			var newDir=homeString.replace("~",`~/${linkID}`);
			newDir=newDir.replace("\"aSecond\"","\"aThird\"");
			newDir=newDir.replace("\"bSecond\"","\"bThird\"");
			newDir=newDir.replace("\"cSecond\"","\"cThird\"");
			currentDir=newDir;
			printingComplete=false;
			var stringToFill;
			if (lang=="en") stringToFill=`cd ${linkID}<br>  Changing directories to \"${linkID}\"   <br>${currentDir}`;
			else if (lang=="fr") stringToFill=`cd ${linkID}<br>  Changement de fichiers \u00e0 \"${linkID}\"   <br>${currentDir}`;
			fillSection(stringToFill);
			//.getElementById("consoleArea").innerHTML+=`cd ${linkID}<br>  Changing directories to \"${linkID}\"   <br>${currentDir}`;
		}


		function delay(url){
			keepBoxSize();
			setTimeout(function(){window.location=url}, 1000);
			clearInterval(flashCursor);
		}
//Expand navigator:
var consoleBox=document.getElementById("console");
var boxIsScaled=false;
var consoleSmallHeight = 75;
var consoleSmallWidth = 75;
var consoleBigHeight = 300;
var consoleBigWidth = 500;
consoleBox.style.width=consoleSmallWidth+"px";
consoleBox.style.height=consoleSmallHeight+"px";
consoleBox.style.overflowY="hidden";

var desiredHeight = consoleBigHeight;
var desiredWidth = consoleBigWidth;
var consoleAspect = (desiredHeight-consoleSmallHeight)/(desiredWidth-consoleSmallWidth);
var scaling=false;
var screenWidth;
var screenHeight;

var consoleYToTrigger;
var consoleXToTrigger;


var maxYToTrigger;
var maxXToTrigger;
var width;
var height;
var resizerator;

var scalingUp=false;
var abortingResize=false;

function scaleBox(event){
	console.log("resizing");
	//getAnimatedCookie();
	getLang();
	getInfo();

	var locationX=event.clientX;
	var locationY=event.clientY;
	console.log(locationX,locationY);

	width=parseInt(consoleBox.style.width);
	height=parseInt(consoleBox.style.height);

	screenWidth=window.innerWidth;
	screenHeight=window.innerHeight;

	consoleYToTrigger=parseInt(window.innerHeight)*0.04+height;
		consoleXToTrigger=parseInt(window.innerWidth)*0.04+width;

	maxYToTrigger=screenHeight-consoleYToTrigger-1;
	maxXToTrigger=screenWidth-consoleXToTrigger-1;
	clearInterval(resizerator);

	//Change Big heigth and width based on window size:
		if (screenWidth<1000) consoleBigWidth=275;
		else;
		
		if (!changingDirs){
			if ((boxIsScaled||scaling)&&(locationX<maxXToTrigger||locationY<maxYToTrigger)){
				abortingResize=true;
				resizerator=setInterval(shrink, 1);
				}
			else{
				resizerator=setInterval(grow, 1);
				abortingResize=false;
			}
		} else{}
	function grow(){
			width=parseInt(consoleBox.style.width);
			height=parseInt(consoleBox.style.height);
			desiredHeight=consoleBigHeight;
			desiredWidth=consoleBigWidth;
			if (width<desiredWidth && height<desiredHeight){
				width+=4; height+=4*consoleAspect;
				consoleBox.style.width=width+"px";
				consoleBox.style.height=height+"px";
				scaling=true;
			}
			else if (width<desiredWidth){
				width+=4;
				consoleBox.style.width=width+"px";
				scaling=true;
			}
			else if (height<desiredHeight){
				height+=4;
				consoleBox.style.height=height+"px";
				scaling=true;
			}
			else{
				boxIsScaled=true;
				clearInterval(resizerator);
				document.getElementById("consoleArea").innerHTML="";
				consoleBox.style.overflowY="auto";
				
				/*if (consoleHasAnimated) document.getElementById("consoleArea").innerHTML=info;
				else{
					//document.cookie="consoleHasAnimated=true;path=/";
					fillSection(info);
				}*/
				scaling=false;
				fillSection(info);
			}
		}

		function shrink(){
			desiredHeight=75;
			desiredWidth=75;
			width=parseInt(consoleBox.style.width);
			height=parseInt(consoleBox.style.height);
			/*var charactersRemovedFromText=-1;

			var consoleArea=document.getElementById("consoleArea");
			consoleArea.innerText=consoleArea.innerText.slice(charactersRemovedFromText);
			charactersRemovedFromText--;*/
			clearInterval(repeatFunction);
			clearInterval(flashCursor);
			cursor.style.opacity=0;
			document.getElementById("consoleArea").innerHTML=navigateText;
			printingComplete=true;
			if (width>desiredWidth && height>desiredHeight){
				width-=4; height-=4*consoleAspect;
				consoleBox.style.width=width+"px";
				consoleBox.style.height=height+"px";
				scaling=true;
			}
			else if (width>desiredWidth){
				width-=4;
				consoleBox.style.width=width+"px";
				scaling=true;
			}
			else if (height>desiredHeight){
				height-=4;
				consoleBox.style.height=height+"px";
				scaling=true;
			}
			else{
				boxIsScaled=false;
				clearInterval(repeatFunction);
				clearInterval(resizerator);
				consoleBox.style.overflowY="hidden";
				scaling=false;
				document.getElementById("consoleArea").innerHTML=navigateText;
			}


		}
 //		while (scaling) document.getElementById("consoleArea").innerHTML="";
//		while (!boxIsScaled) document.getElementById("consoleArea").innerHTML="Navigate";
}

function keepBoxSize(){
	clearInterval(resizerator);
	consoleBox.style.width=width;
	consoleBox.style.height=height;
}
