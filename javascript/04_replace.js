// mask cep

var input = "50120102";
var regex = /(\d{2})(\d{3})(\d{3})/g;
var formatted = input.replace(regex, "$1.$2-$3");

console.log(formatted); // 50.120-102
