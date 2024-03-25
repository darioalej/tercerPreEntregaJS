window.addEventListener("keydown", teclado);
window.addEventListener("keyup", teclado);
const NAVE = document.querySelector(".nave");
let despegarNave=false;
let y=0; // variable necesaria para que la nave vaya hacia arriba cuando presionamos ArrowUp y que vaya de 10 en 10

function teclado(evt){
	const TECLA= evt.key;
	(TECLA==="Enter") && (evt.type==="keydown")
	? combustion()
	: NAVE.src="../img/nave1.png";
	(TECLA==="ArrowUp") && (NAVE.style.bottom= `${y+=10}px` )
}

function combustion(){
	NAVE.src="../img/nave2.png";
	despegarNave=true;
}