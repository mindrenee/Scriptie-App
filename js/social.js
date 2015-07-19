function share() {
	var message = document.forms["social"]["bericht"].value;
	//alert(message);
	window.plugins.socialsharing.share(message);
}
