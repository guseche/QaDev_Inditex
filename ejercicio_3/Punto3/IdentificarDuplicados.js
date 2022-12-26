class IdentificarDuplicados{

    resultadoResponse = [];

    constructor(resultadoResponse){
     this.resultadoResponse = resultadoResponse;
    }

    contarElementos() {
        
        const counts = {};
        this.resultadoResponse.forEach(function (x) { 
            var key = JSON.stringify(x.name)
            counts[key] = (counts[key] || 0) + 1; 
        });
        console.log(counts)

    }

}

const resultado = [
    {
      "id": 9680,
      "name": "Microsoft Xbox Elite Series 2 Wireless Controller for Xbox Series X Halo Infinite"
    },
    {
      "id": 9223372036854244048,
      "name": "doggie"
    },
    {
      "id": 13,
      "name": "Rosie"
    },
    {
      "id": 14,
      "name": "Rosie"
    },
    {
      "id": 15,
      "name": "Rosie"
    }
  ]


const contarElementos = new IdentificarDuplicados(resultado);
contarElementos.contarElementos();