import { calculatePert, } from '../src/calculations';

describe("Calculations", () => {
    describe("Pert", () => {
        it("Should return correct pert value for given low, mid, high", () => {
            const { low, mid, high } = { low: 1, mid: 2, high: 3 };
            const pert = 2;

            const results = calculatePert(low, mid, high);
            expect(results).toEqual(pert);
        });

        it("Should return incorrect pert value for given low, mid, high", () => {
            const { low, mid, high } = { low: 1, mid: 7, high: 10 };
            const pert = 2;

            const results = calculatePert(low, mid, high);
            expect(results).not.toEqual(pert);
        });
    })
})