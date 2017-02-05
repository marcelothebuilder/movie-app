describe('Home controller', function() {
    var $this;
    var $scope;
    var PopularMovies;
    var $q;
    var $exceptionHandler;
    var $rootScope;
    var $controller;

    var CHANGE_MOVIE_INTERVAL_MS = 5000;

    beforeEach(function() {
        module('movieApp');
        module('movieCore');
        module('omdb');
    });

    beforeEach(module(function($exceptionHandlerProvider) {
        $exceptionHandlerProvider.mode('log');
    }));

    beforeEach(inject(function(_$q_, _PopularMovies_, _OmdbApi_, _$exceptionHandler_, _$rootScope_, _$interval_, _$controller_) {
        $exceptionHandler = _$exceptionHandler_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $interval = _$interval_;
        PopularMovies = _PopularMovies_;
        $controller = _$controller_;
        OmdbApi = _OmdbApi_;

        spyOn(_OmdbApi_, 'findById').and.callFake(function(id) {
            if (['tt0176385', 'tt0110912', 'tt0119081'].indexOf(id) !== -1) {
                return _$q_.resolve({
                    imdbID: id
                });
            }

            return _$q_.reject('Error finding movie');
        });
    }));

    it('should be at the first movie if interval called callback 0 times', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081']);
        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });

    it('should be at the second movie if interval called callback 1 times', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081']);

        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();

        $interval.flush(CHANGE_MOVIE_INTERVAL_MS);
        $rootScope.$apply();
        expect($this.currentMovie.imdbID).toEqual('tt0110912');
    });

    it('should be at the third movie if interval called callback 2 times', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081']);

        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();

        $interval.flush(CHANGE_MOVIE_INTERVAL_MS * 2);
        expect($this.currentMovie.imdbID).toEqual('tt0119081');
    });

    it('should be at the first movie again if interval called callback 3 times', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081']);

        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();

        $interval.flush(CHANGE_MOVIE_INTERVAL_MS * 3);
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });

    it('should clear the $interval when leaving the controller', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081']);

        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();


        $scope.$destroy();
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS);
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });

    it('should handle errors', function() {
        mockGetPopularMovies(['tt0176385', 'tt0110912', 'tt0119081', 'ttUnknown']);

        $scope = $rootScope.$new();
        $this = $controller('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies,
            OmdbApi: OmdbApi,
            $scope: $scope
        });
        $rootScope.$apply();

        $interval.flush(CHANGE_MOVIE_INTERVAL_MS * 4);

        expect($exceptionHandler.errors.length >= 1).toBeTruthy();
    });

    function mockGetPopularMovies(result) {
        spyOn(PopularMovies, 'query').and.callFake(function(callback) {
            callback(result);
        });
    }
});
