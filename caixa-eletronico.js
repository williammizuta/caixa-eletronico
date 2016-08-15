class NotaSaque {
	constructor(cedula, quantidade) {
		this.cedula = cedula;
		this.quantidade = quantidade;
	}

	imprime() {
		if(this.quantidade > 1) {
			return `${this.quantidade} notas de R\$${this.cedula},00`;
		}
		return `${this.quantidade} nota de R\$${this.cedula},00`;
	}
}

module.exports = {
	saca: function(valor) {
		const notas = [100, 50, 20, 10];

		return notas.map(nota => {
			let notaSaque = new NotaSaque(nota, Math.floor(valor / nota));
			valor %= nota;
			return notaSaque;
		}).filter(nota => {
			return nota.quantidade > 0;
		}).reduce((resultado, nota, indice, notas) => {
			if(indice !== 0 && indice === notas.length - 1) {
				resultado += ' e';
			}
			return resultado + ' ' + nota.imprime();
		}, "Entregar") + '.';
	}
}
