// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.



// while (confirm("Bienvenido a la Maquina de alimentos")) {
//     alert("Tengo 3 tipos de productos, Categoria A = $270, B = $340 y C = $390")
//     let data = prompt ("¿Cual desea?")
//     alert("Vale, has seleccionado la opcion " + data)

    
// }

var productos ={
    "A": 270,
    "B": 340,
    "C": 390
};
var monedas = {
    "10":10,
    "50":50,
    "100":100
};
var producto = prompt("Elija un producto: A, B o C");
if (producto){
    var precioProducto = productos[producto];
    var montoIngresado = 0;
    while (montoIngresado < precioProducto){
        var moneda = prompt("Ingrese una moneda: 10, 50, 100");
        if (moneda){
            montoIngresado += monedas[moneda];
        }
        else{
            alert("Moneda invalida, por favor ingrse otra moneda");
        }
    }
    if (montoIngresado > precioProducto){
        var vuelto = montoIngresado - precioProducto;
        while (vuelto > 0){
            if (vuelto >= 100){
                monedasRecibidas(100);
                vuelto = 100;
            }
            else if (vuelto >= 50){
                monedasRecibidas(50);
                vuelto = 50;
            }
            else if (vuelto >= 10){
                monedasRecibidas(10);
                vuelto = 10;
            }
        }
        alert("Vueltos " + monedasRecibidas (""));
    } 
    else if (montoIngresado === precioProducto){
        alert("Gracias pro su compra, no hay vueltos, vuelva pronto...")
    } 
    else {
        alert("Que pena con usd veci, monto insuficiente, lastimosamente no se puede realizar la compra");
    }
}



//             }
//         }
//         alert("Monedas de vuelto: " + monedasEntregadas(""));
//     } else if (montoIngresado === precioProducto) {
//         alert("Gracias por su compra. No hay vuelto.");
//     } else {
//         alert("Lo siento, monto insuficiente. No se puede realizar la compra.");
//     }
// } else {
//     alert("Producto no válido. Por favor, elija un producto válido.");
// }



// prompt()
// let data = prompt("Ingrese el nombre")
// console.log(data);



// alert()
// confirm()
// let bandera = confirm("¿ Estoy entendiendo JavaScript ?");
// console.log(bandera);