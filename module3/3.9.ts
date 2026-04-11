{
    // Abstract Method in TypeScript 1. Interface 2. Abstract Class

    interface Vehicle1{
        name: string;
        model: number;
        getDetails(): string;
    }
    
    // const vehicle1: Vehicle1 = {
    //     name: "Car",
    //     model: 2020,
    //     getDetails(): string {
    //         return `${this.name} - ${this.model}`;
    //     }
    // }

    // console.log(vehicle1);

    interface Vehicle{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    
    class Car implements Vehicle{
        startEngine(): void {
            console.log("Car engine started.");
        }
        stopEngine(): void {
            console.log("Car engine stopped.");
        }
        move(): void {
            console.log("Car is moving.");
        }

    }

    const car = new Car();
    car.startEngine();
    car.move();
    car.stopEngine();

    abstract class Vehicle2{
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class Car2 extends Vehicle2{
        startEngine(): void {
            console.log("Car engine started 2.");
        }
        stopEngine(): void {
            console.log("Car engine stopped 2.");
        }
        move(): void {
            console.log("Car is moving 2.");
        }
    }

    const car2 = new Car2();
    car2.startEngine();
    car2.move();
    car2.stopEngine();
}