
var evo_xName = 'Coign';
var exibeType = 'whats'; //email, whats, web, facebook

var evo_contact = [{
  "email":"dione.mxes@gmail.com",
  "whats":"43991143750",
  "fb":"/dimaxdeveloper",
  "web":'https://coign.tech',
}];

var evo_xSy = 'Desenvolvido por: ';
var evo_xQuery = '?ref=';
var evo_PageUrl = document.URL;
var evo_PageTitle = document.title;
var evo__xID = document.getElementById("evo--author");  


evo__xID.innerHTML = evo__view(evo_contact[0][exibeType]);

function evo__view(type){
  var evo__content;
  var evo__color_white = 'style="color:rgba(255,255,255,0.6);"';
  var evo__color_black = 'style="color:rgba(0,0,0,0.8);"';
  var evo_attribute_color = 'data-a-color';
  
  // If the <a> element has a target attribute, set the value to "_self"
  if (evo__xID.hasAttribute(evo_attribute_color)) {       
    if(evo__xID.getAttribute(evo_attribute_color) == 'white')
    {
      var evo__color = evo__color_white;
    }
    else if(evo__xID.getAttribute(evo_attribute_color) == 'black')
    {
      var evo__color = evo__color_black;
    }
  }
  
  
  
  
  
  if(exibeType == 'web')
  {
    evo__content= '<a href="'+type+evo_xQuery+evo_PageUrl+'" target="_blank" '+evo__color+'>'+evo_xName+'</a>';
  }
  else if(exibeType == 'email')
  {
    evo__content= '<a href="mailto:'+type+'" target="_blank" '+evo__color+'>'+evo_xName+'</a>';
  }
  else if(exibeType == 'whats')
  {
    evo__content= '<a href="https://api.whatsapp.com/send?phone=55'+type+'&text=Olá, vim da referencia de '+evo_PageTitle+'" target="_blank" '+evo__color+'>'+evo_xName+'</a>';
  }
  else if(exibeType == 'fb')
  {
    evo__content= '<a href="https://fb.com/'+type+'" target="_blank" '+evo__color+'>'+evo_xName+'</a>';
  }
  
  return '<small>'+evo_xSy+evo__content+'</small>';
  
}
