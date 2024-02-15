// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.



// while (confirm("Bienvenido a la Maquina de alimentos")) {
//     alert("Tengo 3 tipos de productos, Categoria A = $270, B = $340 y C = $390")
//     let data = prompt ("¿Cual desea?")
//     alert("Vale, has seleccionado la opcion " + data)
    
// }

let productos ={
    "A": 270,
    "B": 340,
    "C": 390
};
let monedas = {
    "10":10,
    "50":50,
    "100":100
};
let producto = prompt("Elija un producto: A, B o C");
if (producto){
    let precioProducto = productos[producto];
    let montoIngresado = 0;
    while (montoIngresado < precioProducto){
        let moneda = prompt("Ingrese una moneda: 10, 50, 100");
        if (moneda){
            montoIngresado += monedas[moneda];
        }
        else{
            alert("Moneda invalida, por favor ingrese otra moneda");
        }
    }
    // El codigo push añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    if (montoIngresado > precioProducto){
        let vuelto = montoIngresado - precioProducto;
        let monedasRecibidas = []
        while (vuelto > 0){
            if (vuelto >= 100){
                monedasRecibidas.push(100);
                vuelto -= 100;
            }
            else if (vuelto >= 50){
                monedasRecibidas.push(50);
                vuelto -= 50;
            }
            else if (vuelto >= 10){
                monedasRecibidas.push(10);
                vuelto -= 10;
            }
        }
        //El codigo join, lo que se ponga en las comillas se proyecta, es la separacion de las palabras, en este caso son las monedas ingresadas
        alert("Sus vueltos son " + monedasRecibidas.join(","));
    } 
    else if (montoIngresado === precioProducto){
        alert("Gracias por su compra, no hay vueltos, vuelva pronto...")
    } 
    else {
        alert("Que pena con usd veci, monto insuficiente, lastimosamente no se puede realizar la compra");
    }
}

// prompt()
// let data = prompt("Ingrese el nombre")
// console.log(data);



// alert()
// confirm()
// let bandera = confirm("¿ Estoy entendiendo JavaScript ?");
// console.log(bandera);