function Letter(gchar) {
    this.character = gchar;
    this.guessed = false;

    // Validity checker
    this.displayChecker = function () {
        // If the character is a correct guess then return it otherwise return '_'
        return this.guessed ? this.character : '_';
    };

    // Correct guess checker
    this.guessChecker = function (currentGuess) {
        if (this.character.toLowerCase() === currentGuess.toLowerCase()) {
            this.guessed = true;
        }
        return this.guessed;
    }

}
module.exports = Letter;

