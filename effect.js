"use strict";

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function(privatCheckOut) {
        if(!privatCheckOut){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
        console.log(personalMovieDB);
    },

    askNumberOfFilms: function() {
        let showNumberMoviesFunc;
        let userNumberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
        personalMovieDB.count = userNumberOfFilms;
        showNumberMoviesFunc = this.showMovieCount(personalMovieDB.count);
        showNumberMoviesFunc();
    },

    showMovieCount: function(numberOfMovies){
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
    },

    askFilmAndRaiting: function(){

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
    },

    showMyDB: function(privatStatus){
        if(!(privatStatus)){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        let result = ``;
        let personsFavoriteMovie;
        for(let i = 0; i < 3; i++){
            personsFavoriteMovie = prompt(`Ваш любимый жанр под номером ${i + 1}`,"");
            
            if(personsFavoriteMovie){
                personsFavoriteMovie = personsFavoriteMovie.trim();

                if(!personsFavoriteMovie){
                    i--;
                } else {
                    this.genres[i] = personsFavoriteMovie;
                }
            } else {
                i--;
            }
        }

        this.genres.forEach((film, index) => {
            result += `Любимый жанр № ${index + 1} - это ${film}\n`;
        });

        console.log(result);
    }
};                   


personalMovieDB.writeYourGenres();
















