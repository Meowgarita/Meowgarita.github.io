/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert(<img></img>)
})

function openPopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'none';
}