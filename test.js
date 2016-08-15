require('chai').should();

const caixa = require('./caixa-eletronico');

describe('Caixa eletrônico', function() {
	it('possui a função saca', function() {
		caixa.should.have.property('saca');
	});

	it('libera saque de R$10', function() {
		caixa.saca(10).should.equal('Entregar 1 nota de R$10,00');
	});
});
