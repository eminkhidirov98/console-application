'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (this.count === '' || this.count === null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const movieName = prompt('Один из последних просмотренных фильмов', '');
      const movieRating = prompt('На сколько оцените его?', '');

      if (
        movieName === null ||
        movieRating === null ||
        movieName.trim() === '' ||
        movieRating.trim() === '' ||
        movieName.length > 50
      ) {
        console.log('Ошибка! Введите данные корректно.');
        i--;
        continue;
      }

      this.movies[movieName] = movieRating;
    }
  },

  detectPersonalLevel() {
    if (this.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (this.count >= 10 && this.count <= 30) {
      console.log('Вы классический зритель');
    } else if (this.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB() {
    if (!this.privat) {
      console.log(this);
    }
  },

  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },

  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (genre === null || genre.trim() === '') {
        console.log('Некорректный ввод. Попробуйте снова.');
        i--;
      } else {
        this.genres.push(genre.trim());
      }
    }

    this.genres.forEach((genre, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${genre}`);
    });
  },
};

// Вызовы для тестирования:
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

// Проверка переключения privat
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
