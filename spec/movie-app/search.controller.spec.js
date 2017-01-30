describe('Search controller', function() {
    var $this;
    var $location;
    var $timeout;

    beforeEach(function() {
        module('movieApp');
    });

    beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
        $location = _$location_;
        $timeout = _$timeout_;

        $this = _$controller_('SearchController', {
            $location: $location,
            $timeout: $timeout
        });
    }));

    afterEach(function() {
        $timeout.verifyNoPendingTasks();
    });

    it('should redirect to the query results page for non-empty query', function() {
        $this.query = 'star wars';
        $this.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should not redirect to the query results page for empty query', function() {
        $this.query = '';
        $this.search();
        expect($location.url()).toBe('');
    });

    it('should be redirected to the results page after one second after the key press', function() {
        $this.query = 'star wars';
        $this.searchInputChanged();
        $timeout.flush();
        expect($location.url()).toBe('/results?q=star%20wars');
    });
});
