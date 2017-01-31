describe('Home controller', function() {
    var $this;
    var $interval;
    var PopularMovies;

    var CHANGE_MOVIE_INTERVAL_MS = 5000;

    beforeEach(function() {
        module('movieApp');
        module('movieCore');
    });

    beforeEach(inject(function(_$controller_, _$interval_, _PopularMovies_) {
        PopularMovies = _PopularMovies_;
        $interval = _$interval_;

        $this = _$controller_('HomeController', {
            $interval: $interval,
            PopularMovies: PopularMovies
        });
    }));

    beforeEach(function() {
        spyOn(PopularMovies, 'query').and.callFake(function() {
            return [{
                    movieId: 'tt0076751',
                    description: 'A great movie 1 :)'
                },
                {
                    movieId: 'tt0076752',
                    description: 'A great movie 2 :)'
                },
                {
                    movieId: 'tt0076753',
                    description: 'A great movie 3 :)'
                }
            ];
        });
    });

    it('should be at the first movie if interval called callback 0 times', function() {
        expect(vm.currentMovie.movieId).toEqual('tt0076751');
    });

    it('should be at the second movie if interval called callback 1 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS);
        expect(vm.currentMovie.movieId).toEqual('tt0076752');
    });

    it('should be at the third movie if interval called callback 2 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS*2);
        expect(vm.currentMovie.movieId).toEqual('tt0076753');
    });

    it('should be at the first movie again if interval called callback 3 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS*3);
        expect(vm.currentMovie.movieId).toEqual('tt0076751');
    });
});
