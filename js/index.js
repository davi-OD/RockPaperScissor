
const handOptions = {
    "rock": "../images/icon-rock.svg",
    "paper": "../images/icon-paper.svg",
    "scissors": "../images/icon-scissors.svg"
}

const pickUserHand = (hand) => {
    console.log(hand);

    //Hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none"
    
    //Show the choice on a page
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //Set the user choice
    document.getElementById("userPick").src = handOptions[hand];

}

const playAgain = document.querySelector(".newGame");