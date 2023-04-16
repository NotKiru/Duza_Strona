function bg_color(color){
    var r = document.querySelector(":root");
    r.style.setProperty('--primary-col',color);
}
function txt_color(color){
    var r = document.querySelector(":root");
    r.style.setProperty('--secondary-col',color);
}
function font_size(size){
    document.querySelector("html").style.fontSize = `${size}px`;
}

function saturate(){
  if (document.querySelector("html").getAttribute('data-bs-saturate') == 'true') {
      document.querySelector("html").setAttribute('data-bs-saturate','false');
      document.querySelector("html").style.filter= "saturate(1)";
  }
  else {
      document.querySelector("html").setAttribute('data-bs-saturate','true');
      document.querySelector("html").style.filter= "saturate(0)";
  }
}