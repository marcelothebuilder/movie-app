describe('Search controller', function() {
    var $this;
    var $location;

    beforeEach(function() {
        module('movieApp');
    });

    beforeEach(inject(function(_$controller_, _$location_) {
        $location = _$location_;

        $this = _$controller_('SearchController', {
            $location: $location
        });
    }));

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
});
