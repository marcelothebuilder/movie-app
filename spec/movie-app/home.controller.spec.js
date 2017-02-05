describe('Home controller', function() {
    var $this;
    var $scope;

    var CHANGE_MOVIE_INTERVAL_MS = 5000;

    beforeEach(function() {
        module('movieApp');
        module('movieCore');
        module('omdb');
    });

    beforeEach(inject(function(_$q_, _PopularMovies_, _OmdbApi_) {
        spyOn(_PopularMovies_, 'get').and.callFake(function() {
            return _$q_.resolve([
                'tt0176385',
                'tt0110912',
                'tt0119081'
            ]);
        });

        spyOn(_OmdbApi_, 'findById').and.callFake(function(id) {
            return _$q_.resolve({
                imdbID: id
            });
        });
    }));

    beforeEach(inject(function(_$controller_, _$interval_, _PopularMovies_, _OmdbApi_, _$rootScope_) {
        $scope = _$rootScope_.$new();
        $this = _$controller_('HomeController', {
            $interval: _$interval_,
            PopularMovies: _PopularMovies_,
            OmdbApi: _OmdbApi_,
            $scope: $scope
        });

        _$rootScope_.$apply();
    }));

    beforeEach(inject(function(_$interval_) {
        $interval = _$interval_;
    }));

    it('should be at the first movie if interval called callback 0 times', function() {
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });

    it('should be at the second movie if interval called callback 1 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS);
        expect($this.currentMovie.imdbID).toEqual('tt0110912');
    });

    it('should be at the third movie if interval called callback 2 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS * 2);
        expect($this.currentMovie.imdbID).toEqual('tt0119081');
    });

    it('should be at the first movie again if interval called callback 3 times', function() {
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS * 3);
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });

    it('should clear the $interval when leaving the controller', function () {
        $scope.$destroy();
        $interval.flush(CHANGE_MOVIE_INTERVAL_MS);
        expect($this.currentMovie.imdbID).toEqual('tt0176385');
    });
});
