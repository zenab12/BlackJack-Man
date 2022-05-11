      let cards = [];
        let Sum = 0;
        let message = " ";
        let messageEl = document.getElementById("messageEl");
        let sumMessage = document.getElementById("sum");
        let cardMessage = document.querySelector("#cards");
        let hasBlackJack = false;
        let isAlive = true;

        //player info

        let player_el = document.getElementById("player-el");
        let playerName = prompt("Please Enter Your Name !");
        let player = {
            name: playerName,
            chips: 0
        }

        //Buttons

        let startGame = document.getElementById("startGame");
        let newCard = document.querySelector("#newCard");

        //render Game function to call it when Start Game and add new Card
        function renderGame() {
            if (Sum < 21) {
                message = "Do you want to Draw a new Card";
                newCard.style.cursor = 'pointer';
                newCard.style.opacity = '1';
            } else if (Sum === 21) {
                message = "WoHoooo! You Have got BlackJack! ";
                hasBlackJack = true;
                player.chips = 200;
                newCard.style.cursor = 'no-drop';
                newCard.style.opacity = '.7';

            } else {
                message = " You are Out of the Game , Hard Luck! ";
                isAlive = false;
                newCard.style.cursor = 'no-drop';
                newCard.style.opacity = '.7';

            }
            messageEl.textContent = message;
            sumMessage.innerHTML = "Sum : " + `<span style="color:#daa520">${Sum}</span>`;
            let numCards = " ";
            cardMessage.innerHTML += `<span style="color:#daa520"> ${cards.join(" ")+ " "} </span>`;
            player_el.innerHTML = player.name + ` : <span style="color:#cc9712">${player.chips}</span> $`

        }

        //Start playing Game() Function 
        function StartGame() {
            let firstCard = getRandomCard();
            let secondCard = getRandomCard();
            cards = [];
            isAlive = true;
            hasBlackJack = false;
            player.chips = 0;
            cardMessage.innerHTML = "Cards : ";
            cards.push(firstCard);
            cards.push(secondCard);
            Sum = cards[0] + cards[1];
            renderGame()
        }

        startGame.addEventListener('click', StartGame);

        //New Card Event Listener
        newCard.addEventListener('click', function() {
            if (isAlive === true && hasBlackJack === false) {
                let card = getRandomCard();
                Sum += card;
                cards.push(card);
                cardMessage.innerHTML = "Cards : ";
                this.style.cursor = 'pointer';
                this.style.opacity = '1'
                renderGame();
            } else {
                this.style.cursor = 'no-drop';
                this.style.opacity = '.7'
            }

        });

        //Get Random get Random Card()
        function getRandomCard() {
            let randomNum = Math.floor(Math.random() * 13) + 1;
            if (randomNum == 1) {
                return 11
            } else if (randomNum > 10) {
                return 10
            }
            return randomNum
        }
