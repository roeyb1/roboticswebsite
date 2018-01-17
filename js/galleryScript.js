//Gallery Images Enlarge
var featuredImage=document.getElementById("featuredImage");
var imageViewer=document.getElementById("imageViewer");

function expandImage(id){
	var selectedImage=document.getElementById(id);
	
	var widthOfImage=selectedImage.width;
	var heightOfImage=selectedImage.height;
	
	featuredImage.src="images/"+id+".jpg";
	imageViewer.style.visibility="visible";
	
	featuredImage.width=widthOfImage*1.2;
	featuredImage.height=heightOfImage*1.2;
	
/*	imageViewer.style.width=featuredImage.width+"px";
	imageViewer.style.height=featuredImage.height+"px";*/
}

function dismissImageViewer(){
	imageViewer.style.visibility="hidden";
	featuredImage.src="";
}

var galleryContainers;

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
