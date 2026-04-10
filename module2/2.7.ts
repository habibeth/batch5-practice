{
    //Generic constraints with using key Of operator
    type Vehicale = {
        bike: string;
        car: string;
        bus: string;
    }

    type Owner = "bike" | "car" | "bus";

    type Owner2 = keyof Vehicale; // "bike" | "car" | "bus"

    // const user = {
    //     name: "Ahsan Habib",
    //     age: 30,
    //     email: "habib@example.com",
    //     address: "123 Main St, Cityville",
    // }

    function getPropertyValue (obj: Vehicale, key: Owner2): string {
        return obj[key];
    }


}