
var hasilSuhu;
var statusCuaca;

function init() {
    hasilSuhu = document.getElementById("outputSuhu");
    statusCuaca = document.getElementById("statusCuaca");
    konversiSuhu("celcius");
}

function konversiSuhu(id) {
    var celcius = parseFloat(document.getElementById(id).value);
    var fahrenheit = (celcius * 1.8) + 32;

    hasilSuhu.firstChild.data = fahrenheit;

    if (fahrenheit >= 86) {
        hasilSuhu.style.color = "red";
        hasilSuhu.style.fontWeight = "bold";
        statusCuaca.firstChild.data = "Status: Panas";
    } else {
        hasilSuhu.style.color = "blue";
        hasilSuhu.style.fontWeight = "normal";
        statusCuaca.firstChild.data = "Status: Sejuk";
    }
}

function resetForm() {
    document.getElementById("celcius").value = "";

    hasilSuhu.firstChild.data = 0;
    hasilSuhu.style.color = "";
    hasilSuhu.style.fontWeight = "";

    statusCuaca.firstChild.data = "Status: -";
}
