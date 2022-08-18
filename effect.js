"use strict";

function askNumberOfFilms() {
    let showNumberMoviesFunc;
    let userNumberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    personalMovieDB.count = userNumberOfFilms;
    showNumberMoviesFunc = showMovieCount(personalMovieDB.count);
    showNumberMoviesFunc();
}

function askFilmAndRaiting(){

    for(let i = 0; i < 2; i++){
        // Метод str.trim(); - убирает лишние пробелы с начала и конца строки
        let film = prompt("Один из последних просмотренных фильмов?", "").trim();
        let raiting = +prompt("На сколько оцените его?", "").trim();

        if(film == "" || raiting == "" || film === null || raiting === null || film.length >= 50){
            i--;
        } else {
            personalMovieDB.movies[film] = raiting;
        }
    }

    let i = 0;
    // while(i < 2){
    //     let film = prompt("Один из последних просмотренных фильмов?", "");
    //     let raiting = +prompt("На сколько оцените его?", "");
    //     if(film == "" || raiting == "" || film === null || raiting === null || film.length >= 50){
    //         i--;
    //     } else {
    //         personalMovieDB.movies[film] = raiting;
    //     }
    //     i++
    // }

    // do{
    //     let film = prompt("Один из последних просмотренных фильмов?", "");
    //     let raiting = +prompt("На сколько оцените его?", "");
    //     if(film == "" || raiting == "" || film === null || raiting === null || film.length >= 50){
    //         i--;
    //     } else {
    //         personalMovieDB.movies[film] = raiting;
    //     }
    //     i++
    // } while(i < 2);
    

    console.log(personalMovieDB);
}

function showMovieCount(numberOfMovies){
    let showNumberMoviesFunc;
    if(numberOfMovies <= 10){
        showNumberMoviesFunc = function() {
            alert("Просмотренно довольно мало фильмов");
        };
    } else if(numberOfMovies <= 30){
        showNumberMoviesFunc = function() {
            alert("Вы классический зритель");
        };
    } else if(numberOfMovies > 30){
        showNumberMoviesFunc = function() {
            alert("Вы киноман");
        };
    } else {
        showNumberMoviesFunc = function() {
            alert("Произошла ошибка");
        };
    }

    return showNumberMoviesFunc;
} 


function showMyDB(privatStatus) {
    if(!(privatStatus)){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let personsFavoriteMovie;
    let i = 0;

    while(i < 3){
        personsFavoriteMovie = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        if(!personsFavoriteMovie){
            i--;
        } else {
            personalMovieDB.genres[i] = personsFavoriteMovie;
        }
        i++;
    }
    console.log(personalMovieDB);
}

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};













