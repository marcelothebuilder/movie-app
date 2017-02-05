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
        
        $httpBackend.whenGET(/.*/).passThrough();

    }]);
}());
