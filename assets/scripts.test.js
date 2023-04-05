const { constant } = require('lodash');
const shuffle = require('./scripts.js');

//confirm shuffle function
test('does shuffle function exists', () => {
    expect(typeof shuffle) === ('function');
})

test('checking if shuffle function works ans shuffels cards', () => {
    beforeEach(() => {
        jest.spyOn(global.math, 'random').mockReturnValue();
    });

    afterEach(() => {
        jest.spyOn(global.math, 'random').mockRestore();
    })
})




