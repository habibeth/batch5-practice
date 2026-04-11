{
    //Instanceof Gauard
    class Animal {
        name: string;
        species: string;
        
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log(`${this.name} makes a sound.`);
        }
    }

    class Dogs extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log(`${this.name} barks.`);
        }
    }

    class Cats extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeow() {
            console.log(`${this.name} meows.`);
        }
    }

    const animal1 = new Dogs("Buddy", "Dog");
    const animal2 = new Cats("Whiskers", "Cat");

    //SMART WAY handle we use function
    const isDog = (animal: Animal): animal is Dogs => {
        return animal instanceof Dogs;
    }

    const makeAnimalSound = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (animal instanceof Cats) {
            animal.makeMeow();
        } else {
            animal.makeSound();
        }
    }

    makeAnimalSound(animal1); // Output: Buddy barks.
    makeAnimalSound(animal2); // Output: Whiskers meows.

}