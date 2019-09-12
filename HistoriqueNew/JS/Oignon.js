var Gerer = document.getElementById('Gerer');
var Travailler = document.getElementById('Travailler');
var Observer = document.getElementById('Observer');
var Historique = document.getElementById('Historique');
var Semer = document.getElementById('Semer');
var Transplanter = document.getElementById('Transplanter');
var Recolter = document.getElementById('Recolter');
var Arracher = document.getElementById('Arracher');
var Maladie = document.getElementById('Maladie');
var Ravageur = document.getElementById('Ravageur');
var DoubleBechage = document.getElementById('DoubleBechage');
var Sarclage = document.getElementById('Sarclage');
var Desherbage = document.getElementById('Desherbage');
var Amendement = document.getElementById('Amendement');
var TraitementPurin = document.getElementById('TraitementPurin');

var H2019 = document.getElementById('H2019');
var H2018 = document.getElementById('H2018');
var H2017 = document.getElementById('H2017');
var H2016 = document.getElementById('H2016');
var TP21 = document.getElementById('Tparcelle2-1');
var TP32 = document.getElementById('Tparcelle3-2');
var Carotte = document.getElementById('Carotte');
var Radis = document.getElementById('Radis');
var Oignon = document.getElementById('Oignon');



Gerer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "visible";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";
    document.querySelector(".Gll").style.visibility = "visible";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "hidden";

    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";

}

Travailler.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "visible";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "visible";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "hidden";
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}

Observer.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "visible";
    document.querySelector(".Historique").style.visibility = "hidden";
    // document.querySelector(".annee").style.visibility = "hidden";
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

    
    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "visible";
    document.querySelector(".H").style.visibility = "hidden";
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";


    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}

Historique.onclick = function(){
    document.querySelector(".Gerer").style.visibility = "hidden";
    document.querySelector(".Travailler").style.visibility = "hidden";
    document.querySelector(".Observer").style.visibility = "hidden";
    document.querySelector(".Historique").style.visibility = "visible";
    // document.querySelector(".annee").style.visibility = "visible";
    document.querySelector(".H2019").style.visibility = "visible";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";
    // document.querySelector(".Transplanter").style.visibility = "hidden";
    document.querySelector(".Semer").style.visibility = "hidden";

    
    document.querySelector(".Gll").style.visibility = "hidden";
    document.querySelector(".Tll").style.visibility = "hidden";
    document.querySelector(".O").style.visibility = "hidden";
    document.querySelector(".H").style.visibility = "visible";
    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "hidden";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";

    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

    document.querySelector(".Ma").style.visibility = "hidden";
    document.querySelector(".Ra").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "visible";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2019.onclick = function(){
    document.querySelector(".H2019").style.visibility = "visible";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "visible";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2018.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "visible";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "visible";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2017.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "visible";
    document.querySelector(".H2016").style.visibility = "hidden";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "visible";
    document.querySelector(".H6").style.visibility = "hidden";
}
H2016.onclick = function(){
    document.querySelector(".H2019").style.visibility = "hidden";
    document.querySelector(".H2018").style.visibility = "hidden";
    document.querySelector(".H2017").style.visibility = "hidden";
    document.querySelector(".H2016").style.visibility = "visible";

    document.querySelector(".H9").style.visibility = "hidden";
    document.querySelector(".H8").style.visibility = "hidden";
    document.querySelector(".H7").style.visibility = "hidden";
    document.querySelector(".H6").style.visibility = "visible";
}

Semer.onclick = function(){
    document.querySelector(".Semer").style.visibility = "visible";

    document.querySelector(".Re").style.visibility = "hidden";
    document.querySelector(".Se").style.visibility = "visible";
    document.querySelector(".Tr").style.visibility = "hidden";
    document.querySelector(".Ar").style.visibility = "hidden";
}


Carotte.onclick = function(){
    alert('Des carottes ont été planter !');
}
Radis.onclick = function(){
    alert('Des radis ont été planter !');
}
Oignon.onclick = function(){
    alert('Des choux de bruxelle ont été planter !');
}


DoubleBechage.onclick = function(){
    alert('Un Double-Bêchage a été effectué !');
    document.querySelector(".DB").style.visibility = "visible";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";
}
Sarclage.onclick = function(){
    alert('Un Sarclage a été effectué !');
    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "visible";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";
}
Desherbage.onclick = function(){
    alert('Un Désherbage a été effectué !');
    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "visible";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "hidden";

}
Amendement.onclick = function(){
    alert('Un Amendement de la terre a été effectué !');
    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "visible";
    document.querySelector(".TP").style.visibility = "hidden";
}
TraitementPurin.onclick = function(){
    alert('Un Traitement avec un purin a été effectué !');
    document.querySelector(".DB").style.visibility = "hidden";
    document.querySelector(".Sa").style.visibility = "hidden";
    document.querySelector(".De").style.visibility = "hidden";
    document.querySelector(".AT").style.visibility = "hidden";
    document.querySelector(".TP").style.visibility = "visible";
}