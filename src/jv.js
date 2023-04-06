var a = 0
const lga = document.getElementById('lga').style.visibility = "hidden"; a = 1
const dsl = document.getElementById('dsl').style.visibility = "visible";

function sas() {
    const lga = document.getElementById('lga').style.visibility = "visible"; a = 0
    const dsl = document.getElementById('dsl').style.visibility = "hidden";
}
function das() {
    const lga = document.getElementById('lga').style.visibility = "hidden"; a = 1
    const dsl = document.getElementById('dsl').style.visibility = "visible";
        
}

clicar.onclick = () => {
    if(a == 1){
        const lga = document.getElementById('lga').style.visibility = "visible"; a = 0
        const dsl = document.getElementById('dsl').style.visibility = "hidden";
    }
    else{
        const dsl = document.getElementById('dsl').style.visibility = "visible";
        const lga = document.getElementById('lga').style.visibility = "hidden"; a = 1
    }
    
}

