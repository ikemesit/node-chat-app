const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'admin';
        const longitude = 1;
        const latitude = 2;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const obj = generateLocationMessage(from, latitude, longitude);
        
        expect(obj.createdAt).toBeA('number');
        expect(obj.url).toEqual(url);
    });
})
