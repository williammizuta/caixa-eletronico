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
});
