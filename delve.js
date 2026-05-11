
var height = 6; //Number of Guesses.
var width =5; //Length of Words.

var row = 0; //Current Guess (Attempt #).
var col = 0; //Current Letter for Attempt.

var gameOver = false;
var word = "SQUID";


window.onload = function(){
    intialize();
}


function intialize(){

    //Create Game Board.
    for (let r = 0; r < height; r++) {
        for(let c = 0; c < width; c++) {
            // <span id="0-0" class="tile"></span>
            let title = document.createElement("span");
            title.id = r.toString() + "-" + c.toString();
            title.classList.add("tile");
            title.innerText = "";
            document.getElementById("board").appendChild(title);
        }
    }


    // Listen for Key Presses.
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        // alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3]
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if(e.code == "Enter") {
            update();
            row += 1; //Start New Row.
            col = 0; //Start at row 0.
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}

function update () {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        
    }
}