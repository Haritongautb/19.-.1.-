"use strict";

function askNumberOfFilms() {
    let userNumberOfFIlms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    personalMovieDB.count = userNumberOfFIlms;
}

function askFilmAndRaiting(){
    for(let i = 0; i < 2;i++){
        let film = prompt("Один из последних просмотренных фильмов?", "");
        let raiting = +prompt("На сколько оцените его?", "");
        personalMovieDB.movies[film] = raiting;
    }
}

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


askNumberOfFilms();
askFilmAndRaiting();











