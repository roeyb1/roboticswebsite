//Resizing script

//Resize for team page:

function resizeTeamPage(){
	var imgSize;
	var textWidth;
	var pageWidth;

	var imageBoxes=document.getElementsByClassName("userImage");
	var userNames=document.getElementsByClassName("userName");
	var leftElements=document.getElementsByClassName("teamInfoLeft");
	var rightElements=document.getElementsByClassName("teamInfoRight");
	var images=document.getElementsByTagName("IMG");
	var boundingBoxes=document.getElementsByClassName("userNameAndImage");
	var userContents=document.getElementsByClassName("userContent");
	
	var windowWidth=window.innerWidth;
	var windowWidthNumber=parseInt(windowWidth);
	
	if (windowWidthNumber<1000){
		for (var i=0;i<images.length;i++){
			var selectedImage=images[i];
			selectedImage.width=128;
			imageBoxes[i].style.width="128px";
			imageBoxes[i].style.height="128px";
			
			userNames[i].style.fontSize="8pt";
			
			boundingBoxes[i].style.height="152px";
			boundingBoxes[i].style.width="138px";
			
			userContents[i].style.fontSize="10pt";
			}
	}
	else{
		for (var i=0;i<images.length;i++){
			var selectedImage=images[i];
			selectedImage.width="200";
			imageBoxes[i].style.width="200px";
			imageBoxes[i].style.height="200px";
			
			userNames[i].style.fontSize="14pt";
			
			boundingBoxes[i].style.height="250px";
			boundingBoxes[i].style.width="205px";
			
			userContents[i].style.fontSize="12pt";
		}		
	}
}
