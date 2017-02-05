(function() {
    'use strict';
    angular.module('movieApp').run(['$httpBackend', function($httpBackend) {
        $httpBackend.whenGET('popular').respond(['tt0176385', 'tt0110912', 'tt0119081']);
        $httpBackend.whenGET('http://www.omdbapi.com/?v=1&i=tt0176385&plot=short')
            .respond({
                "Title": "Pokémon",
                "Year": "1997–",
                "Rated": "TV-Y",
                "Released": "08 Sep 1998",
                "Runtime": "24 min",
                "Genre": "Animation, Action, Adventure",
                "Director": "N/A",
                "Writer": "Satoshi Tajiri, Junichi Masuda, Ken Sugimori",
                "Actors": "Ikue Ôtani, Rodger Parsons, Kayzie Rogers, Sarah Natochenny",
                "Plot": "The adventures of Ash Ketchum and his partner Pikachu, who travel across many regions in hopes of being regarded as a Pokemon master.",
                "Language": "English",
                "Country": "Japan",
                "Awards": "1 nomination.",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_SX300.jpg",
                "Metascore": "N/A",
                "imdbRating": "7.4",
                "imdbVotes": "24,038",
                "imdbID": "tt0176385",
                "Type": "series",
                "totalSeasons": "20",
                "Response": "True"
            });

        $httpBackend.whenGET('http://www.omdbapi.com/?v=1&i=tt0110912&plot=short')
            .respond({
                "Title": "Pulp Fiction",
                "Year": "1994",
                "Rated": "R",
                "Released": "14 Oct 1994",
                "Runtime": "154 min",
                "Genre": "Crime, Drama",
                "Director": "Quentin Tarantino",
                "Writer": "Quentin Tarantino (story), Roger Avary (story), Quentin Tarantino",
                "Actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
                "Plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "Language": "English, Spanish, French",
                "Country": "USA",
                "Awards": "Won 1 Oscar. Another 60 wins & 65 nominations.",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
                "Metascore": "94",
                "imdbRating": "8.9",
                "imdbVotes": "1,376,761",
                "imdbID": "tt0110912",
                "Type": "movie",
                "Response": "True"
            });

        $httpBackend.whenGET('http://www.omdbapi.com/?v=1&plot=short&s=Star')
            .respond({
                "Search": [{
                    "Title": "Star Wars: Episode IV - A New Hope",
                    "Year": "1977",
                    "imdbID": "tt0076759",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: Episode V - The Empire Strikes Back",
                    "Year": "1980",
                    "imdbID": "tt0080684",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: Episode VI - Return of the Jedi",
                    "Year": "1983",
                    "imdbID": "tt0086190",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: The Force Awakens",
                    "Year": "2015",
                    "imdbID": "tt2488496",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: Episode I - The Phantom Menace",
                    "Year": "1999",
                    "imdbID": "tt0120915",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FmZGIwMzAtZTBkMS00M2JiLTk2MDctM2FlNTQ2OWYwZDZkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: Episode III - Revenge of the Sith",
                    "Year": "2005",
                    "imdbID": "tt0121766",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
                }, {
                    "Title": "Star Trek",
                    "Year": "2009",
                    "imdbID": "tt0796366",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
                }, {
                    "Title": "Star Wars: Episode II - Attack of the Clones",
                    "Year": "2002",
                    "imdbID": "tt0121765",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDRkYzA4OGYtOTBjYy00YzFiLThhYmYtMWUzMDBmMmZkM2M3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
                }, {
                    "Title": "Star Trek Into Darkness",
                    "Year": "2013",
                    "imdbID": "tt1408101",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg"
                }, {
                    "Title": "Rogue One: A Star Wars Story",
                    "Year": "2016",
                    "imdbID": "tt3748528",
                    "Type": "movie",
                    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
                }],
                "totalResults": "2962",
                "Response": "True"
            });

        $httpBackend.whenGET(/.*/).passThrough();

    }]);
}());
