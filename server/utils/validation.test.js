const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject none string values', () => {
        const str = 1;
        const obj = isRealString(str);

        expect(obj).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        const str = '       ';
        const obj = isRealString(str);

        expect(obj).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        const str = 'ewrwr ewrerwerwe';
        const obj = isRealString(str);

        expect(obj).toBeTruthy();
    });
});
