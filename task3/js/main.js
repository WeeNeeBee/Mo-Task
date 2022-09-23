let btn = document.getElementById('btn');
let errorMessage = document.getElementById('errorMessage');

btn.addEventListener('click', function(){
    let searchColor = document.getElementById('searchColor').value;
    let color = document.getElementById('color');
    color.style.background = searchColor;
    

    if(searchColor !== color.style.background || searchColor == ""){
       errorMessage.innerHTML = "Please enter a valid color."
    }
    else {
        errorMessage.innerHTML = "Your color is "+ searchColor;
    }

});
