// inkomst och kostnads div måste läsas med query selector 
//uppdatera den med användarens inmatade data med ex textContent
//form data måste läsas när användare trycker på add (eventlistener + function)

//inkomst o kostnadslista ska uppdateras med nya element. elementet ska ha beskrivining och kostnad (key: value) !!kolla föreläsning 18/11 sista 30!! 

// användare måste mata in flera olika data (array) push.lista
//inkomst array [1000,25000] loopa igenom för att räkna total
//samma med kostnads array
// inkomstArray - kostnadsArray = totalt/kvar
//eller allt i ett [1000, 25000, - 200, -5000,] = totalt

    //skapa en funktion som matar in olika data i alla divar vid button add 
    //från början är arrayAll = []
    //använd array.push()
    var resultList = [];
    var expenseList = [];
    var incomeList = [];
    function countTotal(event){
        event.preventDefault(); //"sparar" det vi lagt till på sidan iställer för uppdate nollställ 
        //console.log("test")//bara för att se att anropning funkar 
     var options = document.querySelector("#selectOption")
     if (options.value === "+"){
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        var incomeData = document.querySelector(".incomeData")
        incomeData.textContent = value;
        var li = document.createElement("li")
        li.innerText = description + " : " + value; // : är bara text i html ej nödvändigt 
        var ul = document.querySelector(".listIn") 
        ul.appendChild(li);
         //li från variabeln 
        //pusha value in i resultat listan
        resultList.push(Number(value)) //värdet skrivs som nummer 
        incomeList.push(Number(value))


     }
     else if (options.value === "-"){
        // kod för minus 
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        resultList.push(Number(-value)) //minus före value för avdrag av värde
        expenseList.push(Number(-value))
        //även minus fältet ska pusha till resultat listan
        var expenseData = document.querySelector(".expenseData")
        expenseData.textContent = value;
        var li = document.createElement("li");
        li.textContent = description + " " + value;
        var ul = document.querySelector(".listOut")
        ul.appendChild(li)
        
     }
     var amount = 0
     for(var i=0; i<resultList.length; i++){
         amount += resultList[i];
     }
     var total = document.querySelector(".total")
     total.textContent = amount;
     if(amount<0){
         alert("Du ligger minus")
     }
     var expense = 0
     for(var i=0; i<expenseList.length; i++){
         expense += expenseList[i];
     }
     var countExpense = document.querySelector(".expenseData")
     countExpense.textContent = expense;

     var income = 0
     for(var i=0; i<incomeList.length; i++){
        income += incomeList[i];
     }
     var countIncome = document.querySelector(".incomeData")
     countIncome.textContent = income;

     //en forloop var för att räkna ihop varje span

        //vid plus uppdateras inkomstfält *2 och vinst
        //vid miunus uppdateras utgifter *2 och vinst 
        //vinst: 
        //skapa element med create och pusha in i inkomstlista
    }

    function clear (){
        location.reload();
        //localstorage.clean()
    }
   
   var add = document.querySelector(".add")
   add.addEventListener("click", countTotal)

   var clean = document.querySelector(".clear")
   clean.addEventListener("click", clear)
