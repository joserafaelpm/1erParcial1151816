function loadDoc(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parce(this.responseText);
      var lista = "<ul>";
      for (var i = 0; i < obj.length; i++) {
        var opcion = document.createElement('li');
        opcion.textContent = obj[i].municipio;
        lista.appendChild(opcion);
        //lista = lista + "<li>" + obj[i].municipio+"</li>";
      }
      lista = lista + "</ul>";
      document("#resultado").innerHTML = lista;
    }
  };
  xhttp.open("GET", "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr.json", true);
  xhttp.send();
}
