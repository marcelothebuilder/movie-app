describe("Clock", function() {
    var Clock;
    beforeEach(module('ngChrono'));
    beforeEach(inject(function(_Clock_) {
        Clock = _Clock_;
    }));

    it('now should return the same as new Date(), allowed to be 5 ms lower or greater', function() {
        var dateMs = new Date().getTime();
        var clockMsv = Clock.now().getTime();
        expect(Math.abs(dateMs - clockMsv) < 5).toBeTruthy();
    });
});
