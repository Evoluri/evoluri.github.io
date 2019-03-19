document.addEventListener("DOMContentLoaded", function(event) {
    var evo_xName = 'Coign';
	var evo_xLink = 'https://google.com';
	var evo_xQuery = '?ref=';
	var evo_xSy = 'Desenvolvido por:';
	var evo_PageUrl = document.URL;
	document.getElementById("evo--author").innerHTML = '<small>'+evo_xSy+' <a href="'+evo_xLink+evo_xQuery+evo_PageUrl+'" target="_blank">'+evo_xName+'</a></small>';
});