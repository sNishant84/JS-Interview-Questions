const options=['rock','paper','scissor']
function Play(playerchoice){;
   const botChoice=options[Math.floor(Math.random()*options.length)];
   document.getElementById('player-choice').textContent=`You choose ${playerchoice}`;
   document.getElementById('bot-choice').textContent=`Bot choose ${botChoice}`
    const outcome=getResults(playerchoice,botChoice);
    document.getElementById('result').textContent=`Result ${outcome}`;
}

function getResults(playerchoice,botChoice){
    if(playerchoice==botChoice){
        return 'draw'
    }
    if(playerchoice=='rock' && botChoice === 'scissor' || playerchoice=='scissor' && botChoice === 'paper' || playerchoice=='paper' && botChoice === 'rock'){
        return `you win`

    }else{
        return `you lose`
    }
}
