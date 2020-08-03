const changeDisplayValue = (event, selector, displayValue) => {
  const $item = $(selector);
  $item.css('display', displayValue);
}
$( () => {
//////////////////////////////////
    // ACTORS
//////////////////////////////////
class myPlayer {
    constructor(name){
        this.name = name;
        this.lives = 3;
        this.attack = 1;
    }
    success(opponent){
        if(playerChoice === opponentChoice){
            teacherArray[0].lives -= teacherArray[0].lives
        }
        else{
            alert(`Music plays oooooo\'s`)
        }
    }
}
const human = new myPlayer ('Neil')

class CPU {
    constructor(name){
        this.name = name;
        this.lives = 3;
        this.attack = 1
    }
    success(vPlayer){
        if(opponentChoice === playerChoice){
            human.lives -= human.lives
        }
        else{
            alert(`Music plays oooooo\'s`)
        }
    }
}


//Array of Teachers
const Ayla = new CPU ("Ayla")
const Paul = new CPU ("Paul")
const Ira = new CPU ("Ira")
const Arthur = new CPU ("Big Poppa Code")

let teacherArray = [Ayla, Paul, Ira, Arthur]
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

   //Grabbing Elements
   const $openBtn = $('#openModal');
   const $modal = $('#modal');
   const $closeBtn = $('#close');
   const $startGame = $('.start-game')
   //Event Listeners
  
//MODAL
  
   $openBtn.on('click', (event)=>{
       changeDisplayValue(event, $modal, 'block')
   });
   $closeBtn.on('click', (event)=>{
       changeDisplayValue(event, $modal, 'none')
   });

//MODAL EMD


   $startGame.on('click', (event) => {
        alert(`The game has started and ${human.name} is squaring off against ${teacherArray[3].name}`)
   })

});