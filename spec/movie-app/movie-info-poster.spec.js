describe('Movie info poster directive', function() {
    var movieData = {
        "Title": "Event Horizon",
        "Year": "1997",
        "Rated": "R",
        "Released": "15 Aug 1997",
        "Runtime": "96 min",
        "Genre": "Horror, Sci-Fi, Thriller",
        "Director": "Paul W.S. Anderson",
        "Writer": "Philip Eisner",
        "Actors": "Laurence Fishburne, Sam Neill, Kathleen Quinlan, Joely Richardson",
        "Plot": "A rescue crew investigates a spaceship that disappeared into a black hole and has now returned...with someone or something new on-board.",
        "Language": "English, Latin",
        "Country": "UK, USA",
        "Awards": "1 win & 1 nomination.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNzY0MjczNV5BMl5BanBnXkFtZTgwOTIxNzQxMTE@._V1_SX300.jpg",
        "Metascore": "35",
        "imdbRating": "6.7",
        "imdbVotes": "124,484",
        "imdbID": "tt0119081",
        "Type": "movie",
        "Response": "True"
    };

    var $compile;
    var $rootScope;

    beforeEach(function () {
        module('movieApp');
        module('templates');
    });

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should output expected html output for the provided movie info', function() {
        var element;
        $rootScope.info = movieData;
        element = $compile('<movie-info-poster info="info"></movie-info-poster>')($rootScope);
        $rootScope.$digest();
        expect(element.html().trim()).toBe('<div class="ng-binding">Event Horizon</div>');
    });
});
