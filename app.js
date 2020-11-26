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
    

    var resultList = []; //fr början är alla array = [], använd sen array.push()
    var expenseList = [];
    var incomeList = [];
    function countTotal(event){
        event.preventDefault(); //"sparar" det vi lagt till på sidan iställer för update nollställ 
        //console.log("test")//bara för att se att anropning funkar 
     var options = document.querySelector("#selectOption")
     if (options.value === "+"){
        //kod för val av plus
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        var incomeData = document.querySelector(".incomeData")
        incomeData.textContent = value;
        var li = document.createElement("li") //Skapar lista i HTML
        li.innerText = description + " : " + value +"kr"; // : är bara text i html ej nödvändigt 
        var ul = document.querySelector(".listIn") 
        ul.appendChild(li); //li från variabeln 
        resultList.push(Number(value)) //värdet skrivs som nummer
        incomeList.push(Number(value)) //pusha value in i resultat listan 

     }
     else if (options.value === "-"){
        //kod för val minus 
        var description = document.querySelector("#description").value
        var value = document.querySelector("#value").value
        resultList.push(Number(-value)) //minus före value för avdrag av värde
        expenseList.push(Number(-value)) //även minus fältet ska pusha till resultat listan
        var expenseData = document.querySelector(".expenseData")
        expenseData.textContent = value;
        var li = document.createElement("li"); //Skapar lista i HTML
        li.textContent = description + " " + value +"kr"; //skriver namn & värdet in i listan
        var ul = document.querySelector(".listOut")
        ul.appendChild(li)
        
     }
    var amount = 0 //Den slutliga summan kommer från användardata 
     for(var i=0; i<resultList.length; i++){
         amount += resultList[i];
     }
    var total = document.querySelector(".total")
     total.textContent = amount;
     if(amount<0){
        // alert("Du ligger minus")
        popup();
     }
     function popup () {
        var cover = document.createElement("div"); //behövs som parent till popup diven 
        cover.classList.add('cover'); //lägger till class till diven 
        var alert = document.createElement("div"); //div till popup rutan
        alert.classList.add('alert'); //skapar class alert 
        var text = document.createElement("span");
        text.textContent = "Varning, du ligger minus!";
    
        var btn = document.createElement("button");
        btn.textContent="stäng";
        btn.onclick = () => cover.remove(); //stänger popup rutan
    
        alert.appendChild(text);
        alert.appendChild(btn);
        cover.appendChild(alert);
        document.body.appendChild(cover); //täcker ursprungs documentet 
    }
    var expense = 0 //loppar igenom och ger ett totalt värde för alla minus
     for(var i=0; i<expenseList.length; i++){
         expense += expenseList[i];
     }
    var countExpense = document.querySelector(".expenseData")
    countExpense.textContent = expense;

    var income = 0 //plussar ihop inkomsternas totala värde
     for(var i=0; i<incomeList.length; i++){
        income += incomeList[i];
     }
    var countIncome = document.querySelector(".incomeData")
    countIncome.textContent = income;

     //en forloop var för att räkna ihop varje span

        //vid plus uppdateras inkomstfält *2 och vinst
        //vid miunus uppdateras utgifter *2 och vinst 
        //vinst: skapa element med create och pusha in i inkomstlista
    }

    function clear (){     //Funktion för att rensa data och börja om 
        location.reload();
    }
   
   var add = document.querySelector(".add") 
   add.addEventListener("click", countTotal) //När man trycker på knappen add anropas funktionen

   var clean = document.querySelector(".clear")
   clean.addEventListener("click", clear) 
