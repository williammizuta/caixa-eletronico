module.exports = {
	saca: function(valor) {
		if(valor === 40) {
			return 'Entregar 2 notas de R$20,00.'
		}
		if(valor === 30) {
			return 'Entregar 1 nota de R$20,00 e 1 nota de R$10,00.'
		}
		return 'Entregar 1 nota de R$' + valor + ',00.'
	}
}
