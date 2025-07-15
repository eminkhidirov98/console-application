/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    if (genre === null || genre.trim() === '') {
      console.log('Некоректный ввод. Попробуйте снова.');
      i--;
      continue;
    }
    personalMovieDB.genres.push(genre);
  }
}
writeYourGenres();

const numbersOfQuestions = 2;

function rememberMyFilms() {
  for (let i = 0; i < numbersOfQuestions; i++) {
    const movieName = prompt('Один из последних просмотренных фильмов', '');
    const movieRating = prompt('На сколько оуените его?', '');

    if (
      movieName === null ||
      movieRating === null ||
      movieName.trim() === '' ||
      movieRating.trim() === '' ||
      movieName.length > 50
    ) {
      console.log('Ошибка! Введите данные коректно.');
      i--;
      continue;
    }

    personalMovieDB.movies[movieName] = movieRating;
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}
detectPersonalLevel();

console.log(personalMovieDB);
