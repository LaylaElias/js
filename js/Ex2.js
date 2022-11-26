window.onload = function(){
    document.getElementById("btn").addEventListener('click', btn_click)
}

function calcular(){
    var n1 = parseFloat (document.getElementById('n1').value)
    var graus = (document.getElementById('graus').value)
    if (graus == "Celsius"){
        document.getElementById('result').innerHTML = (n1*1.8)+32
    }else if(graus == "Fahrenheit"){
        document.getElementById('result').innerHTML = (n1-32)*1.8
    }
}

function btn_click(){
    calcular()
}

