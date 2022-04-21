
var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector("#form-adicionar");

	var nombre = form.nombre.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var tabla = document.querySelector("#tabla-pacientes")

	//Creando elementos de las tablas
	pacienteTr = document.createElement("tr");
	nombreTd = document.createElement("td");
	pesoTd = document.createElement("td");
	alturaTd = document.createElement("td");
	gorduraTd = document.createElement("td");
	imcTd = document.createElement("td");

	//Capturando el contenido de cada uno de los campos
	nombreTd.textContent = nombre;
	alturaTd.textContent = altura;
	pesoTd.textContent = peso;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calcularIMC(peso, altura);

	//Creando el elemento paciente
	pacienteTr.appendChild(nombreTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	tabla.appendChild(pacienteTr);

	//<tr></tr>
	//<td></td>*5

});

function limpiarFormulario() {
	document.getElementById("#form-adicionar").reset();
}