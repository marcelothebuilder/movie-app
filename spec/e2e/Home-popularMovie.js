describe('Home page', function() {
    describe('when loaded', function() {
        it('should show pokémon movie as the first popular movie', function() {
            browser.get('http://localhost:3000/#!/');

            browser.waitForAngular();

            var movie = element(by.css('movie-info-poster h3'));

            var movieName;

            expect(movie.getText()).toMatch('Pokémon');
        });
    });
    // describe("after 6s", function () {
    //   it('should show pulp fiction movie the current popular movie', function() {
    //       browser.get('http://localhost:3000/#!/');
    //
    //       browser.sleep(6000);
    //
    //       var movie = element(by.css('movie-info-poster h3'));
    //
    //       var movieName;
    //
    //       expect(movie.getText()).toMatch('Pulp');
    //   });
    // });
});
