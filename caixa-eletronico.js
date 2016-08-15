module.exports = {
	saca: function(valor) {
		const notas = [20, 10];

		return notas.map(nota => {
			let notaSaque = {
				valor: nota,
				quantidade: Math.floor(valor / nota)
			}
			valor %= nota;
			return notaSaque;
		}).filter(nota => {
			return nota.quantidade > 0;
		}).reduce((resultado, nota) => {
			if(resultado === 'Entregar') {
				if(nota.quantidade > 1) {
					return `${resultado} ${nota.quantidade} notas de R\$${nota.valor},00`
				}
				return `${resultado} ${nota.quantidade} nota de R\$${nota.valor},00`
			}
			return `${resultado} e ${nota.quantidade} nota de R\$${nota.valor},00`
		}, "Entregar") + '.';
	}
}
