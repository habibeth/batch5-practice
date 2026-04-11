{
    //Polymorphism
    class Person {
        getSleep(): string {
            return "I sleep 8 hours a day.";
        }
    }

    class Student extends Person {
        getSleep(): string {
            return "I sleep 6 hours a day.";
        }
    } 

    class Developer extends Person {
        getSleep(): string {
            return "I sleep 5 hours a day.";
        }
    }

    const person = new Person();
    console.log(person.getSleep());

    const student = new Student();
    console.log(student.getSleep());

    const developer = new Developer();
    console.log(developer.getSleep());


    class Shape {
        area(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        area(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        width: number;
        height: number;

        constructor(width: number, height: number) {
            super();
            this.width = width;
            this.height = height;
        }

        area(): number {
            return this.width * this.height;
        }
    }

    const getShapeArea = (shape: Shape): void => {
        console.log(shape.area());
    }

    const shape = new Shape();
    getShapeArea(shape); // Output: 0

    const circle = new Circle(5);
    getShapeArea(circle); // Output: Area of Circle: 78.53981633974483

    const rectangle = new Rectangle(4, 6);
    getShapeArea(rectangle); // Output: Area of Rectangle: 24
}