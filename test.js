require('chai').should();

const caixa = require('./caixa-eletronico');

describe('Caixa eletrônico', function() {
	it('possui a função saca', function() {
		caixa.should.have.property('saca');
	});

	it('libera saque de R$10', function() {
		caixa.saca(10).should.equal('Entregar 1 nota de R$10,00.');
	});

	it('libera saque de R$20', function() {
		caixa.saca(20).should.equal('Entregar 1 nota de R$20,00.');
	});

	it('libera saque de R$30', function() {
		caixa.saca(30).should.equal('Entregar 1 nota de R$20,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$40', function() {
		caixa.saca(40).should.equal('Entregar 2 notas de R$20,00.');
	});

	it('libera saque de R$50', function() {
		caixa.saca(50).should.equal('Entregar 1 nota de R$50,00.');
	});

	it('libera saque de R$60', function() {
		caixa.saca(60).should.equal('Entregar 1 nota de R$50,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$70', function() {
		caixa.saca(70).should.equal('Entregar 1 nota de R$50,00 e 1 nota de R$20,00.');
	});

	it('libera saque de R$80', function() {
		caixa.saca(80).should.equal('Entregar 1 nota de R$50,00 1 nota de R$20,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$90', function() {
		caixa.saca(90).should.equal('Entregar 1 nota de R$50,00 e 2 notas de R$20,00.');
	});

	it('libera saque de R$100', function() {
		caixa.saca(100).should.equal('Entregar 1 nota de R$100,00.');
	});

	it('libera saque de R$110', function() {
		caixa.saca(110).should.equal('Entregar 1 nota de R$100,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$120', function() {
		caixa.saca(120).should.equal('Entregar 1 nota de R$100,00 e 1 nota de R$20,00.');
	});

	it('libera saque de R$130', function() {
		caixa.saca(130).should.equal('Entregar 1 nota de R$100,00 1 nota de R$20,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$140', function() {
		caixa.saca(140).should.equal('Entregar 1 nota de R$100,00 e 2 notas de R$20,00.');
	});

	it('libera saque de R$150', function() {
		caixa.saca(150).should.equal('Entregar 1 nota de R$100,00 e 1 nota de R$50,00.');
	});

	it('libera saque de R$160', function() {
		caixa.saca(160).should.equal('Entregar 1 nota de R$100,00 1 nota de R$50,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$170', function() {
		caixa.saca(170).should.equal('Entregar 1 nota de R$100,00 1 nota de R$50,00 e 1 nota de R$20,00.');
	});

	it('libera saque de R$180', function() {
		caixa.saca(180).should.equal('Entregar 1 nota de R$100,00 1 nota de R$50,00 1 nota de R$20,00 e 1 nota de R$10,00.');
	});

	it('libera saque de R$190', function() {
		caixa.saca(190).should.equal('Entregar 1 nota de R$100,00 1 nota de R$50,00 e 2 notas de R$20,00.');
	});

	it('libera saque de R$200', function() {
		caixa.saca(200).should.equal('Entregar 2 notas de R$100,00.');
	});
});
