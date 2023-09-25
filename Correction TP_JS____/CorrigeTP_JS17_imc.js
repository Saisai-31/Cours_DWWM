var poids = prompt("votre poids en kg ?") || 0;
var taille = prompt('votre taille en cm ?') || 1;

function calcul(){
    return poids / Math.pow((taille / 100), 2);
}
var res = calcul();
if(res >=25){
    alert("Attention, vous bougez le plus souvent");
}else if(res < 18.5){
    alert("Attention  arrêtez le self")
}else{
    alert("votre corpulence est normale");
}