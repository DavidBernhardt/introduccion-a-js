const numeros = [];
function convertirNumerosArray() {
	for (let i = 0; i < document.querySelectorAll("li").length; i++) {
		numeros.push(Number(document.querySelectorAll("li")[i].textContent));
	}
}
convertirNumerosArray();
document.querySelector("#promedio").onclick = function() {
	let numeroTotal = 0;
	for (let i = 0; i < numeros.length; i++) {
		numeroTotal += numeros[i];
	}
	let promedio = numeroTotal / numeros.length;
	document.querySelector("#promedio-texto").textContent = `El promedio es ${promedio}.`;
};
document.querySelector("#numero-mas-pequeño").onclick = function() {
	let numeroMasPequeño = numeros[0];
	for (let i = 0; i < numeros.length; i++) {
		if (numeroMasPequeño > numeros[i]) {
			numeroMasPequeño = numeros[i];
		}
	}
	document.querySelector("#numero-mas-pequeño-texto").textContent = `El número más pequeño es ${numeroMasPequeño}.`;
};
document.querySelector("#numero-mas-grande").onclick = function() {
	let numeroMasGrade = numeros[0];
	for (let i = 0; i < numeros.length; i++) {
		if (numeroMasGrade < numeros[i]) {
			numeroMasGrade = numeros[i];
		}
	}
	document.querySelector("#numero-mas-grande-texto").textContent = `El número más grande es ${numeroMasGrade}.`;
};
document.querySelector("#numero-mas-frecuente").onclick = function() {
	let maximaFrecuencia = 1;
	let frecuencia = 0;
	let numeroMasFrecuente;
	for (let i = 0; i < numeros.length; i++) {
		for (let j = i; j < numeros.length; j++) {
			if (numeros[i] === numeros[j]) {
				frecuencia++;
			}
			if (frecuencia > maximaFrecuencia) {
				maximaFrecuencia = frecuencia;
				numeroMasFrecuente = numeros[i];
			}
		}
		frecuencia = 0;
	}
	document.querySelector(
		"#numero-mas-frecuente-texto"
	).textContent = `El número más frecuente es ${numeroMasFrecuente}.`;
};