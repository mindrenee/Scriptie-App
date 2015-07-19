function share() {
	var message = document.forms["social"]["bericht"].value;
	window.plugins.socialsharing.share(message, null, null, null);
}
