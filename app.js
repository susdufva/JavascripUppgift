// inkomst och kostnads div måste läsas med query selector 
//uppdatera den med användarens inmatade data med ex textContent

//form data måste läsas när användare trycker på add (eventlistener + function)

//inkomst o kostnadslista ska uppdateras med nya element. elementet ska ha beskrivining och kostnad (key: value) !!kolla föreläsning 18/11 sista 30!! 

// användare måste mata in flera olika data (array) push.lista
//inkomst array [1000,25000] loopa igenom för att räkna total
//samma med kostnads array
// inkomstArray - kostnadsArray = totalt/kvar
//eller allt i ett [1000, 25000, - 200, -5000,] = totalt
var arrayAll = [1000, 25000, - 200, -5000,]
for (var i=0; i<arrayAll.length; i++){
    console.log(arrayAll[i])}
    var summan = 0;
    for(var i=0; i<arrayAll.length; i++ ){
        summan += arrayAll[i]; console.log(summan)
    } //Testa (+ return summan? nej)
    //från början är arrayAll = []
    //använd array.push()

    //skapa en funktion som matar in olika data i alla divar vid button add 
    var vinstLista = [];
    var kostnadsLista = [];
    var inkomstLista = [];
    function countTotal(event){
        event.preventDefault(); //"sparar" det vi lagt till på sidan iställer för uppdate nollställ 
        console.log("test")//bara för att se att anropning funkar 
        //olika funktion för + / -
     var options = document.querySelector("#selectOption")
     if (options.value === "+"){
         //plus options kod
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        var inkomstData = document.querySelector(".inkomstData")
        inkomstData.textContent = value;
        var li = document.createElement("li")
        li.innerText = description + " : " + value; // : är bara text i html ej nödvändig 
        var ul = document.querySelector(".listaIncome") //kolla rätt klass
        ul.appendChild(li);
         //li från variabeln 
        //pusha value in i vinst lista
        vinstLista.push(Number(value)) //värdet skrivs som nummer 
        //även minus fältete ska pusha till vinstLista
        inkomstLista.push(Number(value))


     }
     else if (options.value === "-"){
        // kod för minus 
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        vinstLista.push(Number(-value)) //minus före value för avdrag av värde
        kostnadsLista.push(Number(-value))
        var kostnadsData = document.querySelector(".kostnadsData")
        kostnadsData.textContent = value;
        var li = document.createElement("li");
        li.textContent = description + " " + value;
        var ul = document.querySelector(".listaKostnad")
        ul.appendChild(li)
        
     }
     var  summa = 0
     for(var i=0; i<vinstLista.length; i++){
         summa += vinstLista[i];
     }
     var totalt = document.querySelector(".totalt")
     totalt.textContent = summa;
     if(summa<0){
         alert("Du ligger minus")
     }
     
     var kostnad = 0
     for(var k=0; k<kostnadsLista.length; k++){
         kostnad += kostnadsLista[k];
     }
     var countKostnad = document.querySelector(".kostnadsData")
     countKostnad.textContent = kostnad;

     var inkomst = 0
     for(var i=0; i<inkomstLista.length; i++){
        inkomst += inkomstLista[i];
     }
     var countInkomst = document.querySelector(".inkomstData")
     countInkomst.textContent = inkomst;

     //en forloop var för att räkna ihop varje span


     
        //vid plus uppdateras inkomstfält *2 och vinst
        //vid miunus uppdateras utgifter *2 och vinst 
        //vinst: 
        //skapa element med create och pusha in i inkomstlista

         //vinst lägger vi utanför i en array 
    }

    function rensa (){
        location.reload();
        //localstorage.clean()
    }
   
   var add = document.querySelector(".add")
   add.addEventListener("click", countTotal)

   var clean = document.querySelector(".rensa")
   clean.addEventListener("click", rensa)
