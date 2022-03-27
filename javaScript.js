function amountCalc(Tip) {
    console.log(Tip)
        let Bill = Number(document.getElementById("inputNumber").value)
        let people = Number(document.getElementById('inputPeople').value)
        
    if (Tip == -5) {
        document.getElementById("inputNumber").value = 0;
        document.getElementById("amountValue").innerHTML = 0;
        document.getElementById("totalValue").innerHTML = 0;
        document.getElementById("inputPeople").value = 0;
        document.getElementById("inputCustom").value = 0;
    }
    else {        
    if (people >= 1) {

        document.getElementById("inputPeople").style.border = "initial"
        document.getElementById("inputPeople").style.borderColor = "initial"
        document.getElementById("inputPeople").style.borderWidth = "initial"
        document.getElementById("erroText").style.display = "none"
        
        
    if (Tip > 1) { 
        
        if (Bill > 99999.99) {

            Bill = 0
            document.getElementById("inputNumber").value = 0
            return Bill
        }
        else {
        let amount = Number((Bill * (Tip/100)) / people).toFixed(2)
        document.getElementById("amountValue").innerHTML = amount;
        let Total = Number((Bill + (amount * people)) / people).toFixed(2)
        document.getElementById("totalValue").innerHTML = Total;
       

        }
    }
    else {
        var customTip = document.getElementById("inputCustom").value
        let amount = Number((Bill * (customTip/100)) / people).toFixed(2)
        document.getElementById("amountValue").innerHTML = amount   
        let Total = Number((Bill + (amount * people)) / people).toFixed(2)
        document.getElementById("totalValue").innerHTML = Total
        }  
    }
    else {
        document.getElementById("inputPeople").style.border = "solid"
        document.getElementById("inputPeople").style.borderColor = "rgb(207, 114, 114)"
        document.getElementById("inputPeople").style.borderWidth = "1px"
        document.getElementById("erroText").style.display = "initial"
        document.getElementById("inputPeople").style.outlineStyle = "none"
    }
} 
}

        
        





