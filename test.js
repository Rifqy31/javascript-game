function getComputerChoice(){
    const num = Math.floor(Math.random() * 10) + 1
    // console.log(num)
    if (num >= 1 && num  < 3){
        return 'paper'
    } else if (num >= 3 && num < 7) {
        return 'rock'
    } else if (num >= 7 && num <= 10) {
        return 'scissor'
    }
}
getComputerChoice()

function playRound() {
    let trial = 0
    while (trial < 5) {
        trial++
        console.log(`game ${trial}`)
        playerSelection = prompt('Input your selection: ')
        comSelection = getComputerChoice()
        if (playerSelection == 'paper' && comSelection == 'rock'){
            let text = 'You win! paper beats rock'
        } else if(playerSelection == 'paper' && comSelection == 'scissor'){
            text = 'You lose! scissor beats paper'
        } else if(playerSelection == 'paper' && comSelection == 'paper'){
            text = "it's a tie"
        } else if(playerSelection == 'scissor' && comSelection == 'scissor'){
            text = "it's a tie"
        } else if(playerSelection == 'scissor' && comSelection == 'paper'){
            text = 'You win! scissor beats paper'
        } else if(playerSelection == 'scissor' && comSelection == 'rock'){
            text = 'You lose! rock beats scissor'
        } else if(playerSelection == 'rock' && comSelection == 'paper'){
            text = 'You lose! paper beats rock'
        } else if(playerSelection == 'rock' && comSelection == 'scissor'){
            text = 'You win! rock beats scissor'
        } else if(playerSelection == 'rock' && comSelection == 'rock'){
            text = "it's a tie"
        }
        console.log(text)
    }
    return 'Game Over'
}
console.log(playRound())