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


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();