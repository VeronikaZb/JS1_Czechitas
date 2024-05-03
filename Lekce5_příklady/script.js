const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = #e9e9e9;

const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';

const h1Element = document.querySelector('h1');
h1Element.classList.add('news__title'); // Přidání třídy
h1Element.textContent = 'Aktuální novinky'; // Změna obsahu

const firstPostElement = document.getElementById('zprava1');
firstPostElement.classList.add('post--main');

const thirdPostImage = document.querySelector('#zprava3 .post__picture');
thirdPostImage.src = 'images/zprava3-novy.jpg';