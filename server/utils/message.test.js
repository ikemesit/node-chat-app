const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'test@test.com';
        const text = 'this is a test';
        const obj = generateMessage(from, text);

        expect(obj.from).toEqual(from);
        expect(obj.text).toEqual(text);
        expect(obj.createdAt).toBeA('number');
    });
});
