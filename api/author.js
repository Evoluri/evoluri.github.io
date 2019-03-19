
var evo_xName = 'Coign';
var exibeType = 'email'; //email, whats, web, facebook

var evo_contact = [{
  "email":"dione.mxes@gmail.com",
  "whats":"43991143750",
  "fb":"/dimaxdeveloper",
  "web":'https://google.com',
}];
console.log(evo_contact);
var evo_xSy = 'Desenvolvido por: ';
var evo_xQuery = '?ref=';
var evo_PageUrl = document.URL;

document.getElementById('evo--author').innerHTML = evo__view(evo_contact[0][exibeType]);

function evo__view(type){
  var evo__content;
  var evo__color = 'style="color:rgba(255,255,255,0.6);"';
  
  if(exibeType == 'web')
  {
    //evo__content '<a href="'+type+evo_xQuery+evo_PageUrl+'" target="_blank" '+evo__color+'>'+evo_xName+'</a>';
  }
  else if(exibeType == 'email')
  {
    evo__content= '';
  }
  else if(exibeType == 'whats')
  {
    evo__content= '';
  }
  else if(exibeType == 'fb')
  {
    evo__content= '';
  }
  
  return evo_xSy+'<small>'+evo__content+'</small>';
  
}
