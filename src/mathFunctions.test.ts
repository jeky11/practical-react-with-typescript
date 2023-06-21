import {add} from "./mathFunctions";

describe('Math functions tests', () => {
    it('Check add functions', () => {
        expect(add(1, 3)).toBe(4);
    })
})