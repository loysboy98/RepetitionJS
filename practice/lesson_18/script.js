/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// +prompt user dan +boganiga faqat int qapul qiladi

const personalMovieDB = {
  count: numberOfFilms, // Ответ на первый вопрос
  movies: {}, // Объект
  actors: {}, // Объект
  genres: [], // Массив
  private: false // Логическое
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      d = prompt('Один из последних просмотренных фильмов?', ''),
      c = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; //Записать ответы в объект movies в формате: 'logan': '8.1'
personalMovieDB.movies[d] = c;

console.log(personalMovieDB);