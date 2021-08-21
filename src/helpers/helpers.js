// este archivo es un Helper, cuando tenemos funciones de muchas líneas, las creamos en archivos independientes y las exportamos para poderlas utilizar en todo nuestro código

export function calcutlarTotal(cantidad, plazo) {
    /*  Cantidades
     0-1000 = 25%
     1001-5000 = 20%
     5001-10000 = 15%
     +10000= 10% */
    let totalCantidad

    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25

    } else if (cantidad > 1000 && cantidad <= 5000) {

        totalCantidad = cantidad * .20
    } else if (cantidad > 5000 && cantidad <= 10000) {

        totalCantidad = cantidad * .15
    } else {

        totalCantidad = cantidad * .10
    }

    console.log(totalCantidad)


    /*  Calcular el plazo
     3 = 5%
     6 = 10%
     12 = 15%
     24 = 20%
  */

    let totalPLazo = 0

    switch (plazo) {
        case 3:
            totalPLazo = cantidad * .05
            break

        case 6:
            totalPLazo = cantidad * .10
            break

        case 12:
            totalPLazo = cantidad * .15
            break

        case 24:
            totalPLazo = cantidad * .20
            break

        default:
            break
    }
    return totalPLazo + totalCantidad + cantidad

}







