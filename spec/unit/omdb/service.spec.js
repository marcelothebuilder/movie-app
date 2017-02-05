describe('omdb service', function() {
    var movieData = {
        "Search": [{
            "Title": "Pokémon: The First Movie - Mewtwo Strikes Back",
            "Year": "1998",
            "imdbID": "tt0190641",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQxOTg5MF5BMl5BanBnXkFtZTYwODA2MDE3._V1_SX300.jpg"
        }, {
            "Title": "Pokémon: The First Movie - Mewtwo Strikes Back",
            "Year": "1998",
            "imdbID": "tt0190641",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQxOTg5MF5BMl5BanBnXkFtZTYwODA2MDE3._V1_SX300.jpg"
        }],
        "totalResults": "2",
        "Response": "True"
    };

    var movieDataById = {
        "Title": "Ouija: Origin of Evil",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "21 Oct 2016",
        "Runtime": "99 min",
        "Genre": "Horror, Thriller",
        "Director": "Mike Flanagan",
        "Writer": "Mike Flanagan, Jeff Howard, Stiles White (characters), Juliet Snowden (characters)",
        "Actors": "Annalise Basso, Elizabeth Reaser, Lulu Wilson, Henry Thomas",
        "Plot": "In 1967 Los Angeles, a widowed mother and her 2 daughters add a new stunt to bolster their seance scam business and unwittingly invite authentic evil into their home. When the youngest daughter is overtaken by a supernatural spirit, the family confronts unthinkable fears to save her and send her possessor back to the other side.",
        "Language": "English",
        "Country": "Japan, USA",
        "Awards": "N/A",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NTcxNTQ5NF5BMl5BanBnXkFtZTgwNTk5OTU4OTE@._V1_SX300.jpg",
        "Metascore": "65",
        "imdbRating": "6.2",
        "imdbVotes": "14,123",
        "imdbID": "tt4361050",
        "Type": "movie",
        "Response": "True"
    };

    var OmdbApi = {};
    var $httpBackend;

    beforeEach(function() {
        angular.mock.module('omdb');

        angular.mock.inject(function(_OmdbApi_, _$httpBackend_) {
            OmdbApi = _OmdbApi_;
            $httpBackend = _$httpBackend_;
        });
    });


    it('should return search movie data from api', function() {
        $httpBackend.expectGET('http://www.omdbapi.com/?v=1&plot=short&s=pokemon+first')
            .respond(200, movieData);

        var response;

        OmdbApi.search('pokemon first').then(function(_response) {
            response = _response;
        });

        $httpBackend.flush();

        expect(response).toEqual(movieData.Search);
    });

    it('should return movie data by id', function() {
        $httpBackend.expectGET('http://www.omdbapi.com/?v=1&i=tt4361050&plot=short')
            .respond(200, movieDataById);

        var response;

        OmdbApi.findById('tt4361050')
            .then(function(_response) {
                response = _response;
            });

        $httpBackend.flush();

        expect(response).toEqual(movieDataById);
    });

    it('should return movie data by id 2', function(done) {
        $httpBackend.expectGET('http://www.omdbapi.com/?v=1&i=tt4361050&plot=short')
            .respond(200, movieDataById);

        OmdbApi.findById('tt4361050')
            .then(function(_response) {
                expect(_response).toEqual(movieDataById);
                done();
            });

        $httpBackend.flush();
    });
});
