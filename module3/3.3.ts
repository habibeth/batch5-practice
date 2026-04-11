{
    //Type Guards
    //Typeof operator type guard
    const add = (param1: number | string, param2: number | string): number | string => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else if (typeof param1 === "string" && typeof param2 === "string") {
            return param1 + " " + param2;
        } else {
            throw new Error("Invalid parameters. Both parameters must be of the same type.");
        }
    }


    //In Gaurd

    type NormalUser = {
        name: string;
        email: string;
    }

    type AdminUser = {
        name: string;
        email: string;
        adminLevel: number;
    }

    const getUserInfo = (user: NormalUser | AdminUser) => {
        if ("adminLevel" in user) {
            console.log(`Admin User: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`);
        } else {
            console.log(`Normal User: ${user.name}, Email: ${user.email}`);
        }
    }

    const normalUser: NormalUser = { name: "John", email: "john@example.com" };
    const adminUser: AdminUser = { name: "Alice", email: "alice@example.com", adminLevel: 1 };

    getUserInfo(adminUser); // Output: Admin User: Alice, Email: alice@example.com, Admin Level: 1
    getUserInfo(normalUser); // Output: Normal User: John, Email: john@example.com
}