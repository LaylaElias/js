function pa() {
    var VI=parseInt(document.getElementById('VI').value);
    var VF=parseInt(document.getElementById('VF').value);
    var R=parseInt(document.getElementById('R').value);
    var res=document.getElementById('res');
    res.innerHTML="";
    for(let i=VI; i<=VF; i=i+R) {
        res.innerHTML+=i+"-";
    }
    }