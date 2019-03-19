var exibeType = 'email'; //email, whats, web, facebook
var evo_contact = [{
  "email":"dione.mxes@gmail.com",
  "whats":"43991143750",
  "fb":"/dimaxdeveloper",
  "web":false,
}];

/*
var evo_xEmail = 'dione.mxes@gmail.com';
var evo_xName = 'Coign';
var evo_xLink = 'https://google.com';
var evo_xQuery = '?ref=';
var evo_xSy = 'Desenvolvido por:';
var evo_PageUrl = document.URL;*/
//document.getElementById("evo--author").innerHTML = '<small>'+evo_xSy+' <a href="'+evo_xLink+evo_xQuery+evo_PageUrl+'" target="_blank" style="color:rgba(255,255,255,0.6);">'+evo_xName+'</a></small>';


document.getElementById("evo--author").innerHTML = '<small>'+evo__view(evo_contact[exibeType])+'</small>';

function evo__view(type){

  return 'teste site developement';
  
}
