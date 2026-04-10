{
    // conditional types
    type A1 = number;
    type B1 = string;

    // conditional type
    type x = A1 extends null ? true : false; // true 
    type y = A1 extends null ? true : B1 extends undefined ? undefined : any;


    type dubaiSheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type checkVehicle<T> = T extends keyof dubaiSheikh ? "Yes" : "No";
    type hasPlane = checkVehicle<"plane">; // "Yes"
}