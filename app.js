var date = document.querySelector(".input-date");
var luckyNumber = document.querySelector(".input-lucky");
var clickMe = document.querySelector(".btn-click");
var op = document.querySelector(".output");
var alertLine = document.querySelector(".alert-line");

function clickHandler(){
    op.innerHTML = "";
    alertLine.innerHTML = "";
    var datestr = date.value.toString();
    var x = luckyNumber.value;
    var year = "";
    for(var i = 0; i<datestr.length; i++){
        if(datestr[i] == '-') break;
        year+=(datestr[i]);
    }
    if(datestr.length === 0 || x == 0 || x.toString().length == 0 || year>2022){
        alertLine.innerHTML = "!Error: Invalid Input"
    }
    else{
        var sum = 0;
        for(var i = 0; i<datestr.length; i++){
            if(datestr[i] - '0' >0 && datestr[i] - '0'<=9){
                sum+=(datestr[i] - '0');
            }
        }
        
        var num = luckyNumber.value;
        
        if(sum%num == 0){
            op.innerHTML = "That's Really a lucky one 🤩🥳";
        }
        else{
            op.innerHTML = "Oops!! Not that lucky 😪";
        }
    }
}

clickMe.addEventListener("click", clickHandler);    



