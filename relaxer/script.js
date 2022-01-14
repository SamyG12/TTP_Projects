const container = document.getElementById('container');
const text = document.getElementById('text');
const totalTime = 7500;
const breatheTime = (totalTime / 5)* 2;
const holdTime = totalTime / 5;

// declare a function called bratheAnimation
breathAnimation();

//defining the function
function breathAnimation(){
    //display breathe In
    text.innerText = 'Breathe In!';
    //make the circle grow
    container.className = 'containter grow';

    setTimeout(() =>{
        //display hold
        text.innerText = 'Hold';

        setTimeout(() =>{
            //display brathe out
            text.innerText= 'Breathe Out!';
            //make the contaner shrink w5hen the time is out 
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime)
}

//calling the function
setInterval(breathAnimation, totalTime);