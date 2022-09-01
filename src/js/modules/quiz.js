export function renderQuiz() {
  const $quiz = document.querySelector('#quiz');
  const tab = $quiz.querySelectorAll(".quiz-item");
  const $btnPrev = $quiz.querySelector('#btn-prev');
  const $btnNext = $quiz.querySelector('#btn-next');
  const $btnResult = $quiz.querySelector('#btn-result');
  const fields = $quiz.querySelectorAll('.js-input');
  let currentItem = 0;
  let k = 1;

  //Display navigation panel
  const showItem = function(n) {
    tab[n].classList.add('active');
    if (n == 0 || n == tab.length - 1) {
      $btnPrev.style.display = "none";
    } else {
      $btnPrev.style.display = "inline";
    }
    if (n == tab.length - 1) {
      $btnNext.style.display = "none";
      $btnResult.style.display = "block";
      document.querySelector('#quiz-body-1').style.display = "none";
      document.querySelector('#quiz-body-2').style.display = "block";
    } else {
      $btnNext.innerHTML = "Далее";
    }
  };

  //Display current quiz
  const scrollQuiz = function(n) {
    tab[currentItem].classList.remove('active');
    currentItem = currentItem + n;
    showItem(currentItem);
  }

  //Prev quiz
  $btnPrev.addEventListener('click', function() {
    const numBtn = $btnPrev.dataset.num;
    scrollQuiz(Number(numBtn));
  });

  //Next quiz
  $btnNext.addEventListener('click', function() {
    const numBtn = $btnNext.dataset.num;
    scrollQuiz(Number(numBtn));
  });
  
  //Input type radio click
  if (fields) {
    fields.forEach(function (item) {
      item.addEventListener('input', function () {
        tab[currentItem].classList.remove('active');
        currentItem = currentItem + k;
        showItem(currentItem);
      });

    });
  }

  showItem(currentItem);
  
}