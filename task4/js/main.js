let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let pickColor = document.getElementById('pickColor').value;
    let color = document.getElementById('color');
    color.style.background = pickColor;


});
