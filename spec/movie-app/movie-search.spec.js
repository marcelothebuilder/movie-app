describe('movie search field component', function() {
    var $rootScope;
    var $compile;

    beforeEach(function () {
        module('movieApp');
        module('templates');
    });

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should have the main html elements', function() {
        var element = $compile('<movie-search></movie-search>')($rootScope);
        $rootScope.$digest();
        expect(element.html().trim()).toContain('form');
        expect(element.html().trim()).toContain('input');
        expect(element.html().trim()).toContain('button');
    });
});
