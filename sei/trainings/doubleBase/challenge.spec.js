const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../double-base-paliendrome-challenge/exercises/challenge')

describe('Double base palindromes', function () {
	describe('Bases 2 and 10 for numbers less than 10', function () {
		it('Returns 25', function () {
			expect(challenge.doubleBasePalindromeSum(2, 10, 10)).to.equal(25)
		})
	})

	describe('Bases 2 and 10 for numbers less than 1,000,000', function () {
		it('Returns 872187', function () {
			expect(challenge.doubleBasePalindromeSum(2, 10, 585586)).to.equal(872187)
		})
	})
})
