function verifica(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    if (num1 <= 0 || num2 <= 0 || num3 <= 0 || isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Insira três números inteiros positivos.");
        return;
    }

    let numa, numb, numc, numd, nume;

    if (num2 - num1 == num3 - num2){
        const sub = num3 - num2
        numa = num3 + sub;
        numb = numa + sub;
        numc = numb + sub;
        numd = numc + sub;
        nume = numd + sub;
        alert("É uma sequencia aritmetrica")
    }else if (num2 / num1 == num3 / num2){
        const div = num3 / num2
        numa = num3 * div;
        numb = numa * div;
        numc = numb * div;
        numd = numc * div;
        nume = numd * div;
        alert("É uma sequencia geometrica")
    }
    else{
        alert("É uma sequencia aleatória")
        const aleat = num1 + num2
        numa = num3 + aleat;
        numb = numa + aleat;
        numc = numb + aleat;
        numd = numc + aleat;
        nume = numd + aleat;

    }
        document.getElementById("resul").innerHTML = numa;
    document.getElementById("resul1").innerHTML = numb;
    document.getElementById("resul2").innerHTML = numc;
    document.getElementById("resul3").innerHTML = numd;
    document.getElementById("resul4").innerHTML = nume;
};

function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";

    document.getElementById("resul").innerHTML = "";
    document.getElementById("resul1").innerHTML = "";
    document.getElementById("resul2").innerHTML = "";
    document.getElementById("resul3").innerHTML = "";
    document.getElementById("resul4").innerHTML = "";
}
