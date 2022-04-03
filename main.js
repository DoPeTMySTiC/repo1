// 1. Make the document body background white
document.body.style.backgroundColor = "white";

// 2. 3x3 table
var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.border = "1px solid black";
table.style.margin = "auto";
table.style.marginTop = "50px";

for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
        var cell = document.createElement("td");
        cell.style.width = "190px";
        cell.style.height = "190px";
        cell.style.backgroundColor = "black";
        cell.style.border = "1px solid white";
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);

// 3. Message box
var messageBox = document.createElement("div");
messageBox.style.fontFamily = "Helvetica";
messageBox.style.textAlign = "center";
messageBox.style.margin = "auto";
messageBox.style.marginTop = "50px";
messageBox.style.width = "190px";
messageBox.innerHTML = "Choose a box";
document.body.appendChild(messageBox);

// 4. Computer move function.
function computerMove() {
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor == "black") {
            cells[i].style.backgroundColor = "red";
            break;
        }
    }
}

// 5. Check for winner
function checkForWinner() {
    var cells = document.getElementsByTagName("td");
    var winner = "";
    if (cells[0].style.backgroundColor == "blue" && cells[1].style.backgroundColor == "blue" && cells[2].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[3].style.backgroundColor == "blue" && cells[4].style.backgroundColor == "blue" && cells[5].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[6].style.backgroundColor == "blue" && cells[7].style.backgroundColor == "blue" && cells[8].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[0].style.backgroundColor == "blue" && cells[3].style.backgroundColor == "blue" && cells[6].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[1].style.backgroundColor == "blue" && cells[4].style.backgroundColor == "blue" && cells[7].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[2].style.backgroundColor == "blue" && cells[5].style.backgroundColor == "blue" && cells[8].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[0].style.backgroundColor == "blue" && cells[4].style.backgroundColor == "blue" && cells[8].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[2].style.backgroundColor == "blue" && cells[4].style.backgroundColor == "blue" && cells[6].style.backgroundColor == "blue") {
        winner = "Player";
    } else if (cells[0].style.backgroundColor == "red" && cells[1].style.backgroundColor == "red" && cells[2].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[3].style.backgroundColor == "red" && cells[4].style.backgroundColor == "red" && cells[5].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[6].style.backgroundColor == "red" && cells[7].style.backgroundColor == "red" && cells[8].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[0].style.backgroundColor == "red" && cells[3].style.backgroundColor == "red" && cells[6].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[1].style.backgroundColor == "red" && cells[4].style.backgroundColor == "red" && cells[7].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[2].style.backgroundColor == "red" && cells[5].style.backgroundColor == "red" && cells[8].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[0].style.backgroundColor == "red" && cells[4].style.backgroundColor == "red" && cells[8].style.backgroundColor == "red") {
        winner = "Computer";
    } else if (cells[2].style.backgroundColor == "red" && cells[4].style.backgroundColor == "red" && cells[6].style.backgroundColor == "red") {
        winner = "Computer";
    }
    if (winner != "") {
        messageBox.innerHTML = winner + " wins!";
    }
}

// 6. Add listeners
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (this.style.backgroundColor == "black") {
            this.style.backgroundColor = "blue";
            checkForWinner();
            computerMove();
            checkForWinner();
        }
    });
}

// 7. New game button
var newGameButton = document.createElement("button");
newGameButton.style.margin = "auto";
newGameButton.style.marginTop = "50px";
newGameButton.style.display = "block";
newGameButton.innerHTML = "New Game";
document.body.appendChild(newGameButton);

newGameButton.addEventListener("click", function() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "black";
    }
    messageBox.innerHTML = "Choose a box";
});
