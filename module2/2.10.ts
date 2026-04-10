{
    // mapped types
    const arrayOfNumbers: number[] = [1, 2, 3];
    const arrayOfStrings: string[] = ["a", "b", "c"];

    const arrayofStrings2: string[] = arrayOfNumbers.map(num => num.toString());

    console.log(arrayofStrings2); // Output: ["1", "2", "3"]

    type AreaNumber = {
        height: number;
        width: number;
    }

    // lookup type
    type AreaHeight = AreaNumber["height"]; // number

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }


    // mapped type
    // type AreaString = {
    //     [key in keyof AreaNumber]: string;
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1 : AreaString<{height: string; width: number}> = {
        height: "100",
        width: 200
    }
}