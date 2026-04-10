// Generic Interface Example

interface Developer<X, Y=null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: X;
    bike?: Y;
}

interface BasicSmartWatch {
    brand: string;
    model: string;
    display: string;
    releaseYear: number;
}

interface AdvancedSmartWatch extends BasicSmartWatch {
    features: string[];
}

interface BasicBike {
    brand: string;
    model: string;
    type: string;
}

const poorDeveloper: Developer<BasicSmartWatch> = {
    name: "John Doe",
    computer: {
        brand: "Dell",
        model: "Inspiron 15",
        releaseYear: 2015
    },
    smartWatch: {
        brand: "Generic",
        model: "Basic",
        display: "Monochrome",
        releaseYear: 2018
    }
};

const richDeveloper: Developer<AdvancedSmartWatch, BasicBike> = {
    name: "Jane Smith",
    computer: {
        brand: "Apple",
        model: "MacBook Pro",
        releaseYear: 2020
    },
    smartWatch: {
        brand: "Apple",
        model: "Watch Series 6",
        display: "Retina",
        releaseYear: 2020,
        features: ["Heart Rate Monitor", "ECG", "Blood Oxygen"]
    },
    bike: {
        brand: "Suzuki",
        model: "Suzuki Fi ABS",
        type: "Road"
    }
};
