//Gallery Images Enlarge
var featuredImage=document.getElementById("featuredImage");
var imageViewer=document.getElementById("imageViewer");

function expandImage(id){
	var selectedImage=document.getElementById(id);

	var widthOfImage=selectedImage.width;
	var heightOfImage=selectedImage.height;
	var windowHeight=window.innerHeight;
	var marginTop;

	featuredImage.src="../media/gallery/"+id+".jpg";
	imageViewer.style.visibility="visible";

	marginTop = (windowHeight-heightOfImage)/3;

	featuredImage.style.width=widthOfImage*1.2+"px";
	featuredImage.style.height=heightOfImage*1.2+"px";
	featuredImage.style.marginTop = marginTop+"px";

/*	imageViewer.style.width=featuredImage.width+"px";
	imageViewer.style.height=featuredImage.height+"px";*/
}

function dismissImageViewer(){
	imageViewer.style.visibility="hidden";
	featuredImage.src="";
}

/*var galleryContainers;
function galleryResize(){
	var windowWidth=window.innerWidth;
	galleryContainers=document.getElementsByClassName("galleryImageContainer");

	if (windowWidth<500){
			for (var i=0; i<galleryContainers.length;i++){
				var container=galleryContainers[i];
				container.style.marginLeft="10px";
		}
		}
	else if (windowWidth<1000){
			for (var i=0; i<galleryContainers.length;i++){
				var container=galleryContainers[i];
				container.style.marginLeft="50px";
		}
		}
	else{
			for (var i=0; i<galleryContainers.length;i++){
				var container=galleryContainers[i];
				container.style.marginLeft="100px";
		}
	}
}
*/
