const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
}
$(() => {
    //////////////////////////////////
    // ACTORS
    //////////////////////////////////
  
    ////human class


    class myPlayer {
        constructor(name) {
            this.name = name;
            this.lives = 3;
            // this.choice = 
        }
        offense(point) {
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 37) {
                    console.log('Left was pressed');
                    changeDisplayValue(event, $userPointLeft, 'block')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'none')

                    changeDisplayValue(event, $userLookLeft, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 38) {
                    console.log('Up was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'block')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'none')

                    changeDisplayValue(event, $userLookUp, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 39) {
                    console.log('Right was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'block')

                    changeDisplayValue(event, $userLookRight, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 40) {
                    console.log('Down was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'block')
                    changeDisplayValue(event, $userPointRight, 'none')

                    changeDisplayValue(event, $userLookDown, 'none')
                }
            })
        }
        defense(cpu) {
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 37) {
                    console.log('Left was pressed');
                    changeDisplayValue(event, $userLookLeft, 'block')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointLeft, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 38) {
                    console.log('Up was pressed');
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'block')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointUp, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 39) {
                    console.log('Right was pressed');
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'block')

                    changeDisplayValue(event, $userPointRight, 'none')
                }
            })
            document.addEventListener('keydown', function (event) {
                if (event.keyCode == 40) {
                    console.log('Down was pressed');
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'block')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointDown, 'none')
                }
            })
        }

    }
    const human = new myPlayer('Neil')
    //////end human class

  //////start CPU class
  class CPU {
    constructor(name) {
        this.name = name;
        this.lives = 3;
        this.choice = Math.random()
    }
    cpuTurnDefense() {
        if (Math.random() < .24) {

            $cpuLookLeft.css('display', 'block')
            $cpuLookRight.css('display', 'none')
            $cpuLookUp.css('display', 'none')
            $cpuLookDown.css('display', 'none')
            $cpuLookLeft.css('border', '5px solid red')
            console.log('cpu left')
            return ('cpu looked left')

        } else if (Math.random() < .49) {
            $cpuLookLeft.css('display', 'none')
            $cpuLookRight.css('display', 'block')
            $cpuLookUp.css('display', 'none')
            $cpuLookDown.css('display', 'none')
            $cpuLookRight.css('border', '5px solid red')
            console.log('cpu right')
            return ('cpu looked right')

        } else if (Math.random() < .74) {
            $cpuLookLeft.css('display', 'none')
            $cpuLookRight.css('display', 'none')
            $cpuLookUp.css('display', 'block')
            $cpuLookDown.css('display', 'none')
            $cpuLookUp.css('border', '5px solid red')
            console.log('cpu  up')
            return ('cpu looked up')


        } else if (Math.random() < 1) {
            $cpuLookLeft.css('display', 'none')
            $cpuLookRight.css('display', 'none')
            $cpuLookUp.css('display', 'none')
            $cpuLookDown.css('display', 'block')
            $cpuLookDown.css('border', '5px solid red')
            console.log('cpu down')
            return ('cpu looked down')

        }
    }
    cpuTurnOffense() {
        if (Math.random() < .24) {
            $cpuPointLeft.css('display', 'block')
            $cpuPointLeft.css('border', '5px solid black')
            $cpuPointRight.css('display', 'none')
            $cpuPointUp.css('display', 'none')
            $cpuPointDown.css('display', 'none')
            console.log('cpu left point')
            return ('cpu pointed left')

        } else if (Math.random() < .49) {
            $cpuPointLeft.css('display', 'none')
            $cpuPointRight.css('display', 'block')
            $cpuPointRight.css('border', '5px solid black')
            $cpuPointUp.css('display', 'none')
            $cpuPointDown.css('display', 'none')
            console.log('cpu right point')
            return ('cpu pointed right')


        } else if (Math.random() < .74) {
            $cpuPointLeft.css('display', 'none')
            $cpuPointRight.css('display', 'none')
            $cpuPointUp.css('display', 'block')
            $cpuPointUp.css('border', '5px solid black')
            $cpuPointDown.css('display', 'none')
            console.log('cpu up point')
            return ('cpu pointed up')


        } else if (Math.random() < 1) {
            $cpuPointLeft.css('display', 'none')
            $cpuPointRight.css('display', 'none')
            $cpuPointUp.css('display', 'none')
            $cpuPointDown.css('display', 'block')
            $cpuPointDown.css('border', '5px solid black')
            console.log('cpu down point')
            return ('cpu pointed down')


        }
    }
}
////////end CPU class

    //Array of Teachers
    const Ayla = new CPU("Ayla")
    const Paul = new CPU("Paul")
    const Ira = new CPU("Ira")
    const Arthur = new CPU("Big Poppa Code")

    let teacherArray = [Ayla, Paul, Ira, Arthur]


    /////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////

    //Grabbing Elements
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const $selectOpponent = $('.select-opponent-button')
    const $startOffense = $('.start-offense-button')
    const $startDefense = $('.start-defense-button')

    const $cpuLookLeft = $('.cpu-look-left')
    const $cpuLookRight = $('.cpu-look-right')
    const $cpuLookUp = $('.cpu-look-up')
    const $cpuLookDown = $('.cpu-look-down')
    const $cpuPointLeft = $('.cpu-point-left')
    const $cpuPointRight = $('.cpu-point-right')
    const $cpuPointUp = $('.cpu-point-up')
    const $cpuPointDown = $('.cpu-point-down')
    const $cpuPointSpin = $('cpu-point-spin')


    const $userLookLeft = $('.user-look-left')
    const $userLookRight = $('.user-look-right')
    const $userLookUp = $('.user-look-up')
    const $userLookDown = $('.user-look-down')
    const $userPointLeft = $('.user-point-left')
    const $userPointRight = $('.user-point-right')
    const $userPointUp = $('.user-point-up')
    const $userPointDown = $('.user-point-down')
    const $userPointSpin = $('user-point-spin')

    /////////////////////////   
    //Event Listeners
    /////////////////////////
    //MODAL

    $openBtn.on('click', (event) => {
        changeDisplayValue(event, $modal, 'block')
    });
    $closeBtn.on('click', (event) => {
        changeDisplayValue(event, $modal, 'none')
    });

    //MODAL EMD





    //Event listeners End

    //Event Handlers Start


    $selectOpponent.on('click', (event) => {
        let chooseTeacher;
        chooseTeacher = prompt(`Will you battle (a) Ayla, (b) Paul, (c) Ira, or (d) Big Poppa Code?`)
        if (chooseTeacher === 'a') {
            loadAyla();
        }
        else if (chooseTeacher === 'b') {
            loadPaul();
        } else if (chooseTeacher === 'c') {
            loadIra();
        } else {
            loadArthur();
        }
    })

    const loadArthur = () => {
        $cpuLookLeft.css('background', 'url(https://i.ebayimg.com/images/g/eOwAAOSwOzpdYERm/s-l64.jpg)')
        $cpuLookRight.css('background', 'url(https://i.ebayimg.com/images/g/eOwAAOSwOzpdYERm/s-l64.jpg)')
        $cpuLookUp.css('background', 'url(https://i.ebayimg.com/images/g/eOwAAOSwOzpdYERm/s-l64.jpg)')
        $cpuLookDown.css('background', 'url(https://i.ebayimg.com/images/g/eOwAAOSwOzpdYERm/s-l64.jpg)')
        teacherArray[0].name = 'Big Poppa Code'
    }
    const loadIra = () => {
        $cpuLookLeft.css('background', 'url(https://i.ebayimg.com/images/g/vYkAAOSwS51em-l9/s-l64.jpg)')
        $cpuLookRight.css('background', 'url(https://i.ebayimg.com/images/g/vYkAAOSwS51em-l9/s-l64.jpg)')
        $cpuLookUp.css('background', 'url(https://i.ebayimg.com/images/g/vYkAAOSwS51em-l9/s-l64.jpg)')
        $cpuLookDown.css('background', 'url(https://i.ebayimg.com/images/g/vYkAAOSwS51em-l9/s-l64.jpg)')
        teacherArray[0].name = 'Ira'
    }

    const loadAyla = () => {
        $cpuLookLeft.css('background-color', 'green')
        $cpuLookRight.css('background-color', 'green')
        $cpuLookUp.css('background-color', 'green')
        $cpuLookDown.css('background-color', 'green')
        teacherArray[0].name = 'Ayla'
    }

    const loadPaul = () => {
        $cpuLookLeft.css('background-color', 'blue')
        $cpuLookRight.css('background-color', 'blue')
        $cpuLookUp.css('background-color', 'blue')
        $cpuLookDown.css('background-color', 'blue')
        teacherArray[0].name = 'Paul'
    }


    const gameOver = () => {
        alert(`That's embarassing`)
    }
    // const refreshOpponentBoard = (event) => {
    //     changeDisplayValue(event, $cpuLookLeft,  'block')
    //     changeDisplayValue(event, $cpuLookRight, 'block')
    //     changeDisplayValue(event, $cpuLookUp,    'block')
    //     changeDisplayValue(event, $cpuLookDown,  'block')
    // }

    const offenseSetUp = (event) => {
        changeDisplayValue(event, $cpuPointLeft, 'none')
        changeDisplayValue(event, $cpuPointRight, 'none')
        changeDisplayValue(event, $cpuPointUp, 'none')
        changeDisplayValue(event, $cpuPointDown, 'none')

        changeDisplayValue(event, $cpuLookLeft, 'block')
        changeDisplayValue(event, $cpuLookRight, 'block')
        changeDisplayValue(event, $cpuLookUp, 'block')
        changeDisplayValue(event, $cpuLookDown, 'block')

        changeDisplayValue(event, $userPointLeft, 'block')
        changeDisplayValue(event, $userPointRight, 'block')
        changeDisplayValue(event, $userPointUp, 'block')
        changeDisplayValue(event, $userPointDown, 'block')

        changeDisplayValue(event, $userLookLeft, 'none')
        changeDisplayValue(event, $userLookRight, 'none')
        changeDisplayValue(event, $userLookUp, 'none')
        changeDisplayValue(event, $userLookDown, 'none')

        $cpuLookDown.css('border', '')
        $cpuLookUp.css('border', '')
        $cpuLookRight.css('border', '')
        $cpuLookLeft.css('border', '')


    }

    const defenseSetUp = (event) => {

        changeDisplayValue(event, $cpuPointLeft, 'block')
        changeDisplayValue(event, $cpuPointRight, 'block')
        changeDisplayValue(event, $cpuPointUp, 'block')
        changeDisplayValue(event, $cpuPointDown, 'block')

        changeDisplayValue(event, $cpuLookLeft, 'none')
        changeDisplayValue(event, $cpuLookRight, 'none')
        changeDisplayValue(event, $cpuLookUp, 'none')
        changeDisplayValue(event, $cpuLookDown, 'none')

        changeDisplayValue(event, $userPointLeft, 'none')
        changeDisplayValue(event, $userPointRight, 'none')
        changeDisplayValue(event, $userPointUp, 'none')
        changeDisplayValue(event, $userPointDown, 'none')

        changeDisplayValue(event, $userLookLeft, 'block')
        changeDisplayValue(event, $userLookRight, 'block')
        changeDisplayValue(event, $userLookUp, 'block')
        changeDisplayValue(event, $userLookDown, 'block')

        $cpuPointDown.css('border', '')
        $cpuPointUp.css('border', '')
        $cpuPointRight.css('border', '')
        $cpuPointLeft.css('border', '')


    }



    $startOffense.on('click', (event) => {
        if (teacherArray[0].lives === 0 && human.lives > 0) {
            console.log('you win!')
        } else if(teacherArray[0].lives > 0 && human.lives === 0){
           console.log('you lose!')
        }else {
            offenseSetUp()
            human.offense()
            setTimeout(teacherArray[0].cpuTurnDefense, 3000);
        }
        // if($cpuLookLeft === true && $userPointLeft === true) {
        //     teacherArray[0].lives -= 1;
        //     console.log('lost a life')
        // }


    })
    $startDefense.on('click', (event) => {
        if (teacherArray[0].lives === 0 && human.lives > 0) {
            console.log('you win!')
        } else if(teacherArray[0].lives > 0 && human.lives === 0){
           console.log('you lose!')
        }else {
            defenseSetUp()
            human.defense()
            setTimeout(teacherArray[0].cpuTurnOffense, 3000);
        }
    })


});