'use strict'

const should = require('chai').should()
const in_words = require('../controllers/number-in-words')

describe('Testing function in_words for convert number to character', () => {
  it('should tiga puluh tujuh', () => {
    in_words(4).should.equal('empat')
  })

  it('should tiga puluh delapan ribu tujuh puluh sembilan', () => {
    in_words(38079).should.equal('tiga puluh delapan ribu tujuh puluh sembilan')
  })

  it('should delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas', () => {
    in_words(82102713).should.equal('delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas')
  })
})
