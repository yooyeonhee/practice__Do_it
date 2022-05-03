const checkValidation =() => {
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;

    if(id && pw){
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").onmouseenter = function(){
            this.style.backgroundColor = "#555"
            this.style.color = "#fff"
        }
        document.getElementById("btn").onmouseleave = function(){
            this.style.backgroundColor = "#fff"
            this.style.color = "#888"
        }
    }
    else{
        document.getElementById("btn").disabled = true;
    }
}

