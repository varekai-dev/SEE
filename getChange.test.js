import getChange from './getChange.mjs'
import {
	AMOUNT_SHOULD_BE_A_NUMBER,
	AMOUNT_SHOULD_BE_AN_INTEGER,
	coinsUa,
	coinsUs,
} from './constants.mjs'

test('return amount of coins with Ukraine currency, should be 13', () => {
	expect(getChange(532, coinsUa)).toEqual(13)
})

test('return amount of coins with Usa currency, should be 3', () => {
	expect(getChange(125, coinsUs)).toEqual(3)
})

test('if amount is not a number return error', () => {
	expect(() => getChange('test', coinsUa)).toThrow(AMOUNT_SHOULD_BE_A_NUMBER)
})

test('if amount is not a integer return error', () => {
	expect(() => getChange(1.2, coinsUa)).toThrow(AMOUNT_SHOULD_BE_AN_INTEGER)
})
