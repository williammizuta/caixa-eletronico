module.exports = {
	saca: function(valor) {
		const notas = [50, 20, 10];

		return notas.map(nota => {
			let notaSaque = {
				valor: nota,
				quantidade: Math.floor(valor / nota)
			}
			valor %= nota;
			return notaSaque;
		}).filter(nota => {
			return nota.quantidade > 0;
		}).reduce((resultado, nota, indice) => {
			if(indice !== 0) {
				resultado += ' e';
			}
			resultado += ` ${nota.quantidade} nota`;
			if(nota.quantidade > 1) {
				resultado += 's';
			}
			return `${resultado} de R\$${nota.valor},00`;
		}, "Entregar") + '.';
	}
}
