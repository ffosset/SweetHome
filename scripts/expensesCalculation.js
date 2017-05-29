function calculateExpenses(salary, houseRent) {
  //Función provisional para calcular los resultados,
  //pero por ahora devuelve los mismos resultados
  // return {'alimentacion': [42, 42],
  //         'ropa': [42, 42],
  //         'transporte': [42, 42],
  //         'salud': [42, 42],
  //         'hogar': [42, 42],
  //         'ensenanza': [42, 42],
  //         'telecomunicacion': [42, 42],
  //         'ahorros': [42, 42],
  //         'bares': [42, 42],
  //         'cultura': [42, 42],
  //         'tabaco': [42, 42],
  //         'otros': [42, 42]
  //       }

    // EJEMPLO DE CALCULO
    // Calculo
    // Porcentaje Ideal
    // 32%
    tipoYPorcentaje =  {'alimentacion': 13, 'ropa': 4, 'transporte': 11, 'salud': 4, 'hogar': 4,'ensenanza': 1, 'telecomunicacion': 3, 'ahorros': 7, 'bares': 9, 'cultura': 4, 'tabaco': 2, 'otros': 6};
    var result = {};
    var x = 0;
    var data = null;
    for (var key in tipoYPorcentaje) {
      x = ( salary * tipoYPorcentaje[key] ) / 100;
      // var data = {key: [x, tipoYPorcentaje[key]]};
      // console.log("data:"+data);
      result[key] = [x, tipoYPorcentaje[key]];
      console.log("añadimos key:"+key);
      console.log("añadimos valor:"+result[key]);
    }

    // La respuesta
    var expectResult = {'alimentacion': [156, 13],
     'ropa': [48, 4],
     'transporte': [132, 11],
     'salud': [48, 4],
     'hogar': [48, 4],
     'ensenanza': [12, 1],
     'telecomunicacion': [36, 3],
     'ahorros': [84, 7],
     'bares': [108, 9],
     'cultura': [48, 4],
     'tabaco': [24, 2],
     'otros': [72, 6]
    }


    console.log("La respuesta esperada");
    for (var key in expectResult) {
      console.log("clave:"+key+ " valor:"+expectResult[key]);
    }
    console.log("----------");
    console.log("Lo calculado:");
    for (var key in result) {
      console.log("clave:"+key+ " valor:"+result[key]);
    }
    return result;
}

function writeExpenses(expenses){
  //Función que pinta los resultados en la tabla.
  //Primero tenemos un array expensePrefix con los prefijos de las variables.
  //Recorremos el array y lo concatenamos con los sufijos de las variables,
  //que siempre van a ser los mismos, y los concatenamos, para obtener
  //el id que hemos puesto en el html para mostrar los resultados.

  //El dato que recibe la función es un diccionario con los valores del
  //dinero y el porcentaje calculados:
  //expenses === resultados{nombre} = [valorNumerico, valorPorcentaje]

  expensePrefix = ['alimentacion', 'ropa', 'transporte', 'salud',
                   'hogar', 'ensenanza', 'telecomunicacion', 'ahorros',
                   'bares', 'cultura', 'tabaco', 'otros'];
  var moneyValue = null;
  var percentValue = null;
  var auxMoney = null;
  var auxPercent = null;

  for (i = 0; i < expensePrefix.length; i++) {
      auxMoney = expensePrefix[i] + 'MoneyValue';
      auxPercent = expensePrefix[i] + 'PercentValue';
      moneyValue = document.getElementById(auxMoney);
      percentValue = document.getElementById(auxPercent);
      moneyValue.innerHTML = expenses[expensePrefix[i]][0] + '€';
      percentValue.innerHTML = expenses[expensePrefix[i]][1] + '%';
  }
}
