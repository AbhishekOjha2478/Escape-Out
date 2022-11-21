 //declaring varaibles 
 var score = 0;
 var speed = 2;
 var acc = 200;
 var map = "grassbg.jpg";

 var high=0;
 high = Math.max(high,score);


//before start of the game

 document.getElementById('chmp').addEventListener('click',()=>{
    document.getElementById('mainbox').style.display='block';
    document.getElementById('maps').style.display='block';
    document.getElementById('level').style.display='none';
})
document.getElementById('chlv').addEventListener('click',()=>{
    document.getElementById('mainbox').style.display='block';
    document.getElementById('maps').style.display='none';
    document.getElementById('level').style.display='block';
})
document.getElementById('sand').addEventListener('click',()=>{
    map='/CSS/desertbg.jpg';
    document.getElementById('box').style.backgroundImage="url("+map+")"
    document.getElementById('mainbox').style.display='none';
    document.getElementById('start').style.display='block';
})
document.getElementById('ice').addEventListener('click',()=>{
    map='/CSS/redishbg.jpg';
    document.getElementById('box').style.backgroundImage="url("+map+")"
    document.getElementById('mainbox').style.display='none';
    document.getElementById('start').style.display='block';
})
document.getElementById('grass').addEventListener('click',()=>{
    map='/CSS/grassbg.jpg';
    document.getElementById('box').style.backgroundImage="url("+map+")"
    document.getElementById('start').style.display='block';
    document.getElementById('mainbox').style.display='none';
})
document.getElementById('bridge').addEventListener('click',()=>{
    map='/CSS/blackbg.jpg';
    document.getElementById('box').style.backgroundImage="url("+map+")"
    document.getElementById('start').style.display='block';
    document.getElementById('mainbox').style.display='none';
})
document.getElementById('easy').addEventListener('click',()=>{
    speed = 2;
    acc = 400;
    document.getElementById('start').style.display='block';
    document.getElementById('mainbox').style.display='none';
})
document.getElementById('medium').addEventListener('click',()=>{
    speed = 1;
    acc= 100;
    document.getElementById('start').style.display='block';
    document.getElementById('mainbox').style.display='none';
})
document.getElementById('hard').addEventListener('click',()=>{
    speed = 0.5;
    acc= 25;
    document.getElementById('start').style.display='block';
    document.getElementById('mainbox').style.display='none';
})











//adding keys functioning
function handle(e) {
    if (e.key == 'ArrowLeft') {
        MoveLeft()
    }
    if (e.key == 'ArrowRight') {
        MoveRight()
    }
}

//adding directions
function MoveLeft() {
    hero = document.querySelector('#hero')
    leftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
    leftPos -= 100;
    if (leftPos >= 0) {
        console.log(hero)
        hero.style.left = leftPos + 'px';
    }

}



function MoveRight() {
    hero = document.querySelector('#hero')
    rightPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
    rightPos += 100;
    if (rightPos < 300) {

        hero.style.left = rightPos + 'px';
    }

}

var checkDead;
//main logic
function startgame() {

    document.getElementById('road').style.animation='moveRoad 2s linear infinite';
    document.getElementById('box').style.animation='movebody 20s linear infinite';
    document.getElementById('villain').style.animation='blockHero '+speed+'s linear infinite';

    //playin audio
    document.getElementById('bgsound').play();

    //hiding buttons
    document.getElementById('chmp').style.display='none';
    document.getElementById('chlv').style.display='none';

    //hiding mainbox
    document.getElementById('mainbox').style.display='none';
    
    //hiding the start button
    this.style.display='none';



    //adding  event for keys functioning   
    document.addEventListener('keydown',handle )

    //checking dead
    checkDead = setInterval(checking_dead, acc);
    
    road = document.querySelector('#road')
    villain = document.querySelector('#villain')
    box=document.querySelector('#box')
    document.addEventListener('animationiteration', function() {
        randomNumber = Math.floor(Math.random() * 3) * 100
        villain.style.left = randomNumber + 'px';
    })
}

//function to check dead state
function checking_dead()
     {
        score++
        high = Math.max(high,score);
        heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
        villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue('left'))
        villaintop = parseInt(window.getComputedStyle(villain).getPropertyValue('top'))
        document.querySelector('#score').innerHTML = 'Score: ' + score
        if (heroLeft == villainLeft && villaintop >= 400 && villaintop<=600) {
            // alert('Game over! Your Score Is ' + score)
            document.getElementById('crash').play();
            document.getElementById('bgsound').pause();
            document.removeEventListener("keydown",handle);
            document.getElementById('text').innerHTML='Your score is '+score
            document.getElementById('highscore').innerHTML='High Score: '+high
            document.getElementById('over').style.display='block'
            villain.style.animation = 'none';
            road.style.animation = 'none';
            box.style.animation = 'none';
            villain.style.top = villaintop + 'px'
            console.log(villaintop)
            clearInterval(checkDead)
        }
    }

function restartgame(){
//    window.location.reload();
    document.getElementById('start').style.display='block';
    score=0;
    // document.addEventListener("keydown",handle);
    // document.getElementById('bgsound').play();
    document.getElementById('over').style.display='none';
}



//adding events to buttons 
document.getElementById('start').addEventListener('click', startgame);
document.getElementById('again').addEventListener('click',restartgame);
document.getElementById('home').addEventListener('click',()=>{
    window.location.reload();
})


//=====================================================================

