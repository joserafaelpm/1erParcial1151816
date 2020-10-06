jQuery(document).ready(function(data) {
    $.getJSON("https://www.datos.gov.co/resource/gt2j-8ykr.json", function(data) {
        var i = 0;
        $.each(data, function(key, val) {
            if (i <= 25) {
                $("#datoscovid").append('<tr>' + '<td align="center" style="dislay: none;">' + data[key].fecha_de_notificaci_n + '</td>' + '<td align="center" style="dislay: none;">' + data[key].ciudad_de_ubicaci_n + '</td>' + '<td align="center" style="dislay: none;">' + data[key].atenci_n + '</td>' + '</tr>');
                i++;
            }
        });
    });
});
