import {
	AMOUNT_SHOULD_BE_A_NUMBER,
	AMOUNT_SHOULD_BE_AN_INTEGER,
} from './constants.mjs'

export const getChange = (amount, currency) => {
	if (typeof amount !== 'number') {
		throw new Error(AMOUNT_SHOULD_BE_A_NUMBER)
	}
	if (!Number.isInteger(amount)) {
		throw new Error(AMOUNT_SHOULD_BE_AN_INTEGER)
	}
	let amountLeft = amount
	return currency.reduce((acc, coin) => {
		const countCoins = Math.floor(amountLeft / coin)
		if (countCoins => 1) {
			amountLeft = amountLeft - countCoins * coin
			acc += countCoins
		}
		return acc
	}, 0)
}

export default getChange
