const questionItem = document.querySelectorAll('.question-item');

questionItem.forEach(questionItem =>{
    const question = questionItem.querySelector('.question');
    const answer = questionItem.querySelector('.answer');
    const toggleIcon = question.querySelector('.toggle-icon');

    answer.classList.remove('show');

    question.addEventListener('click', () => {
    answer.classList.toggle('show');

    if (answer.classList.contains('show')) {
      toggleIcon.src = 'assets/images/icon-minus.svg';
      question.style.color = "hsl(275, 60%, 55%)";
    } else {
      toggleIcon.src = 'assets/images/icon-plus.svg';
      question.style.color = "hsl(292, 42%, 14%)"
    }
  });
});