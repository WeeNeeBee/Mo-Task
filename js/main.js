// Input Section
function sumFunc(){
    // User first input
    let value1 = Number(document.getElementById('value1').value);
    // User second input
    let value2 = Number(document.getElementById('value2').value);
    // Sum of user first input and second input
    let sum = value1 + value2;
    // Submit button
    let btn = document.getElementById('btn');
    // Message to be displayed if user input is not a number
    let message1 = "Please enter a number!"
    // Result to be displayed
    let display1 = document.getElementById('display1');
    // Checks if user input is not a number
    if(isNaN(value1 && value2)){
        display1.innerHTML = message1;
    // If user input is empty, do this.
    } else if (value1 == "" || value2 ==""){
        message1 = "Please fill both fields!"
        // If user input is a number, do this.
    } else if(value1 == 0 || value2 == 0){
        true;
    } else {
        message1 = "The sum of " + value1 + " and " + value2 + " = " + sum;
    }
    // Display message, whichever one it may be.
    display1.innerHTML = message1;
}

// On clicking the button, execute the function.
btn.onclick = sumFunc;

// input transition
let showInput = document.getElementById('input');
function showInputSection(){
    showInput.className = "show-input";
}
setTimeout(showInputSection, 1500);



// greet section
function greetFunc(){
    let name = String(document.getElementById('name').value);
    let age = Number(document.getElementById('age').value);
    let address = document.getElementById('address').value;
    let display2 = document.getElementById('display2');
    let btn2 = document.getElementById('btn2');
    
    if(isNaN(age)){
        display2.innerHTML = "Age must be a number!";
    } else if (age == "" || name =="" || address == ""){
        display2.innerHTML = "Please fill in all fields!"
    }
    else {
        display2.innerHTML = "Hello " + name + ", you are " + age + " years old and your adress is " + address + ". I hope you find everything you want in life!" ;
    }
}
btn2.onclick = greetFunc;
// greet transition
let showGreet = document.getElementById('greet');
function showGreetSection(){
    showGreet.className = "show-greet";
}
setTimeout(showGreetSection, 1500);


// Color Section
    let colors = ['red', 'blue', 'green', 'purple', 'black', 'cyan', 'brown', 'white', 'orange'];
    let btn3 = document.getElementById('btn3');
    
    btn3.addEventListener('click', function(){
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        let color = document.getElementById('color');
        color.style.background = randomColor;
    })
// color transition
let showColor = document.getElementById('color');
function showColorSection(){
    showColor.className = "show-color";
}

setTimeout(showColorSection, 1500);
