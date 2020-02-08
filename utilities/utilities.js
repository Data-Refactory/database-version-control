module.exports = {
    /**
     * Global handling of errors...a wank function which allows custom text on screen
     * @param {} errorMessage 
     */
    throwError: function (errorMessage) {

        throw new Error(`
     *
     **
     ${errorMessage.trim()}
     **
     *
     `);
    }

}