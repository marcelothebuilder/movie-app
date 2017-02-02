describe('Results controller', function() {
    var results;

    var $controller;

    var $q;
    var $rootScope;
    var $location;
    var OmdbApi;

    beforeEach(module('omdb'));
    beforeEach(module('movieApp'));

    beforeEach(function populateResults() {
        results = {
            'Search': [{
                "Title": "Star Wars: Episode IV - A New Hope",
                "Year": "1977",
                "Rated": "PG",
                "Released": "25 May 1977",
                "Runtime": "121 min",
                "Genre": "Action, Adventure, Fantasy",
                "Director": "George Lucas",
                "Writer": "George Lucas",
                "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
                "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
                "Language": "English",
                "Country": "USA",
                "Awards": "Won 6 Oscars. Another 48 wins & 28 nominations.",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
                "Metascore": "92",
                "imdbRating": "8.7",
                "imdbVotes": "945,400",
                "imdbID": "tt0076759",
                "Type": "movie",
                "Response": "True"
            }]
        };
    });

    beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _OmdbApi_, _$location_) {
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        OmdbApi = _OmdbApi_;
        $location = _$location_;
    }));

    it('should load search results', function() {
        spyOn(OmdbApi, 'search').and.callFake(function() {
            return $q.resolve(results.Search);
        });

        spyOn($location, 'search').and.callFake(function() {
            return {
                q: 'star wars'
            };
        });

        var ctrl = $controller('ResultsController', {
            OmdbApi: OmdbApi,
            $location: $location
        });

        $rootScope.$apply();

        expect(ctrl.results[0].Title).toBe(results.Search[0].Title);
        expect(OmdbApi.search).toHaveBeenCalledWith('star wars');
    });

    it('should have an error message set in case of search failure', function() {
        spyOn(OmdbApi, 'search').and.callFake(function() {
            return $q.reject();
        });

        var ctrl = $controller('ResultsController', {
            OmdbApi: OmdbApi
        });

        $rootScope.$apply();

        expect(ctrl.error).toBeDefined();
    });

    describe('when clicking on an item', function() {
        var ctrl;

        beforeEach(function() {
            spyOn(OmdbApi, 'search').and.callFake(function() {
                return $q.resolve(results.Search);
            });

            spyOn(OmdbApi, 'findById').and.callFake(function() {
                return $q.resolve(results.Search[0]);
            });

            ctrl = $controller('ResultsController', {
                OmdbApi: OmdbApi
            });

            $rootScope.$apply();
        });

        it('should get the full movie data', function() {
            ctrl.clicked(ctrl.results[0]);
            $rootScope.$apply();

            expect(OmdbApi.findById).toHaveBeenCalled();
            expect(ctrl.results[0].fullData).not.toBeUndefined();
        });

        it('should get the full movie data only one time', function() {
            ctrl.clicked(ctrl.results[0]);
            $rootScope.$apply();
            ctrl.clicked(ctrl.results[0]);
            $rootScope.$apply();

            expect(OmdbApi.findById).toHaveBeenCalledTimes(1);
        });
    });
});
