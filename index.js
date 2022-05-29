const phrases = ["Select your language!", "Selecione o seu idioma!"];
var atual = 0;
setInterval(function(){
    document.getElementById("idiomas").innerHTML = phrases[atual];
    atual++;
    if (atual >= phrases.length) {
        atual = 0;
    };
},3000);