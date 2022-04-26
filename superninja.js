//CORE
class Ninja {
    constructor(nombre, salud = 0, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    
    sayName() {
        console.log(this.nombre);
    }

    showStats() {
        console.log("Nombre: "+this.nombre+ " Salud:"+this.salud+ " Velocidad: "+this.velocidad+ " Fuerza: " +this.fuerza);
    }
    
    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {

    constructor(nombre, sabiduria) {
        super(nombre, 200, 10, 10, sabiduria=0);
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
