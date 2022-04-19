//var nombreciro = "anastasia";
document.getElementById("user").innerHTML = getNombre("nombre_user");

function getNombre(name, url) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "*indefinido*";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
