//Gallery Images Enlarge
var featuredImage=document.getElementById("featuredImage");
var imageViewer=document.getElementById("imageViewer");

function expandImage(id){
	var selectedImage=document.getElementById(id);
	
	featuredImage.src="images/"+id+".jpg";
	imageViewer.style.visibility="visible";
	
	featuredImage.width=selectedImage.width*1.5;
	featuredImage.height=selectedImage.height*1.5;
	
/*	imageViewer.style.width=featuredImage.width+"px";
	imageViewer.style.height=featuredImage.height+"px";*/
}

function dismissImageViewer(){
	imageViewer.style.visibility="hidden";
	featuredImage.src="";
}
