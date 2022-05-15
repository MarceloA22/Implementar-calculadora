let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let valor1: number = Number(data1.value);
  let valor2: number = Number(data2.value);
  let valor3: number = Number(data3.value);
  let suma = valor1 + valor2;
  let resta = valor1 - valor2;
  let resultado: number;

  function guiones(n: number) {
    let guion: string = "";
    for (let i = 0; i <= n; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  }

  function resultadoGuion() {
    guiones(40);
    console.log("el resultado es:", resultado);
    guiones(40);
  }

  switch (valor3) {
    case 1:
      resultado = suma;
      resultadoGuion();
      break;

    case 2:
      resultado = resta;
      resultadoGuion();
      break;

    default:
      guiones(30);
      console.log("el resultado de la operación es:", "x");
      guiones(30);
  }
});
