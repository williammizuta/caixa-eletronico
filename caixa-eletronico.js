module.exports = {
	saca: function(valor) {
		const notas = [20, 10];
		let resposta = 'Entregar ';
		notas.forEach(nota => {
			let quantidade = Math.floor(valor / nota);
			if(quantidade > 0) {
				if(resposta !== 'Entregar ') {
					resposta += ' e ';
				}
				if(quantidade === 1) {
					resposta += `${quantidade} nota de R\$${nota},00`;
				} else {
					resposta += `${quantidade} notas de R\$${nota},00`;
				}
				valor %= nota;
			}
		});
		return resposta + '.';
	}
}
