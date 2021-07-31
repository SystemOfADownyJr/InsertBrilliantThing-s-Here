let timeUp = false;
let score = 0;
let holes = 0;
const scoreBoard = $('.score');

function bloodSport() {
  timeUp = false
  holes = Math.floor(Math.random()* 5) + 2
  let time = (Math.floor(Math.random()* 3) + 1) * 200
  let timer = 30
  setTimeout(() => timeUp = true, 3000)
  $(`.Block${holes}`).addClass('filled')
  document.querySelector(`.Block${holes}`).addEventListener('click', Validation)
  setTimeout(() => {
    $(`.Block${holes}`).removeClass('filled')
    $(`.Block${holes}`).removeClass('bashed')
    $(`.Block${holes}`).off('click', Validation)
    if (!timeUp)  {
      bloodSport();
    } else  {
      if (score < 0)  {
        alert("Zuckerberg Has All Your Data, AND The Last Laugh!")
      } else  {
          alert("You Win The Battle, But He Owns Hawaii Now.")
      }
      score = 0
      scoreBoard[0].textContent = score
    }
  }, time);
}

function Validation(event) {
  if (!timeUp) {
    if (event.srcElement.className == `Block${holes} filled`) {
      score++
      scoreBoard[0].textContent = score
      $(`.Block${holes}`).addClass('bashed')
    } else  {
      console.log("He's a slippery one!")
      score--
      scoreBoard[0].textContent = score
    }
  }
  
  console.log(score)
}