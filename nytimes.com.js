function bashPaywall() {
	document.getElementById("gatewayUnit").hidden = true;
	document.getElementById("overlay").hidden = true;
	document.getElementsByTagName("body")[0].setAttribute("style", "overflow: scroll !important");
}

setTimeout("bashPaywall()", 2000);
