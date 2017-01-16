describe('MovieCore', function() {
    var PopularMovies;
    var $httpBackend;

    beforeEach(function() {
        angular.mock.module('movieCore');
    });

    beforeEach(function() {
        angular.mock.inject(function(_PopularMovies_, _$httpBackend_) {
            PopularMovies = _PopularMovies_;
            $httpBackend = _$httpBackend_;
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create popular movie', function() {
        var isExpectedData = {
            movieId: 'tt0076759',
            description: 'A great movie :)'
        };

        $httpBackend.expectPOST(/./, isExpectedData)
            .respond(201);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'A great movie :)'
        });

        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow();
    });

    it('should get popular movie by id', function() {
        $httpBackend.expectGET(/.*tt0076759.*/gi)
            .respond(200);

        PopularMovies.get({
            movieId: 'tt0076759'
        });

        expect($httpBackend.flush).not.toThrow();
    });

    it('should update popular movie', function() {
        $httpBackend.expectPUT('popular')
            .respond(200);

        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'A great movie :)'
        });

        popularMovie.$update();

        expect($httpBackend.flush).not.toThrow();
    });

    it('should pass the token with the requests', function() {
        var expectHeader = function(headers) {
            return headers.authToken;
        };

        $httpBackend.expectGET(/.*/, expectHeader).respond(200);
        $httpBackend.expectGET(/.*/, expectHeader).respond(200);
        $httpBackend.expectPUT(/.*/, /.*/, expectHeader).respond(200);
        $httpBackend.expectPOST(/.*/, /.*/, expectHeader).respond(200);
        $httpBackend.expectDELETE(/.*/, expectHeader).respond(200);

        PopularMovies.query();

        PopularMovies.get({
            id: 'tt0076759'
        });

        new PopularMovies({}).$update();
        new PopularMovies({}).$save();
        new PopularMovies({}).$remove();

        var flush = function() {
            $httpBackend.flush(1);
        };

        for (var i = 0; i < 5; i++) {
            expect(flush).not.toThrow();
        }
    });
});
