require('chai').should();

const caixa = require('./caixa-eletronico');

describe('Caixa eletrônico', function() {
	it('possui a função saca', function() {
		caixa.should.have.property('saca');
	});
});
