const dotMap={
    1:[5],
    2:[1,9],
    3:[1,5,9],
    4:[1,3,7,9],
    5:[1, 3, 5, 7, 9],
    6:[1, 3, 4, 6, 7, 9]
}

function drawDots(diceId, value) {
    const dice = document.getElementById(diceId);
    const dots = dice.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('show'));

    const positionsToShow = dotMap[value];
    positionsToShow.forEach(pos => {
      const dot = dice.querySelector(`.dot[data-pos="${pos}"]`);
      if (dot) {
        dot.classList.add('show');
      }
    });
  }

function rollDice(){
    const dice1=Math.floor(Math.random()*6)+1
    const dice2=Math.floor(Math.random()*6)+1
    drawDots('dice1',dice1)
    drawDots('dice2',dice2)
    const result=document.getElementById('result');
    if(dice1>dice2){
        result.textContent="player 1 wins"
    }else if(dice1<dice2){
        result.textContent="player 2 wins"
    }else{
        result.textContent="draw"
    }

}

drawDots('dice1',1);
drawDots('dice2',1)
