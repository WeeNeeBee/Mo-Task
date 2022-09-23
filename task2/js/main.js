let btn3 = document.getElementById('btn3');
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'c', 'd', 'e', 'f'];
let hexValue = document.getElementById('hexValue');
hexValue.innerHTML = '#00000';
let color = document.getElementById('color');
color.style.background = '#000000'

btn3.addEventListener('click', function(){
    let hexKey = '#';

    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * hex.length);
        hexKey += hex[index];
    }
    
    hexValue.innerHTML = hexKey;
    document.getElementById('myHex').hexValue = hexKey;
    color.style.background = hexKey;
    color.style.transition = '1s';
})
