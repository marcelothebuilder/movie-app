describe("Clock", function () {
    var Clock;
    beforeEach(module('ngChrono'));
    beforeEach(inject(function (_Clock_) {
        Clock = _Clock_;
    }));

    it('now should return the same as new Date()', function () {
        expect(Clock.now().getTime()).toBe(new Date().getTime());
    });
});
