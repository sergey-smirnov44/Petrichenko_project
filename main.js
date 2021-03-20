// мой вариант  
/*let numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", 0));

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const answerFilmLike = prompt("Последний фильм, который вы посмотрели?", 0);
const answerFilmRate = prompt("Как оцениваете данное произведение", 0);
const answerFilmLike1 = prompt("Последний фильм, который вы посмотрели?", 0);
const answerFilmRate1 = prompt("Как оцениваете данное произведение", 0);

personalMovieDB.movies[answerFilmLike] = answerFilmRate;
personalMovieDB.movies[answerFilmLike1] = answerFilmRate1;
*/

//вариант ИвПетриченко
const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Только вопросы немного другие он использовал
const a = prompt('Последний фильм, который вы посмотрели?', ''),
    b = prompt('Как оцениваете данное произведение', ''),
    c = prompt('Последний фильм, который вы посмотрели?', ''),
    d = prompt('Как оцениваете данное произведение', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;