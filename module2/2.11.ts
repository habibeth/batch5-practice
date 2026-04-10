{
    //Utility type
    //Pick Utility Type
    type User = {
        name: string;
        email: string;
        age: number;
    }

    //Pick creates a new type by selecting specific properties from an existing type. It allows you to create a subset of the original type, including only the properties you specify.
    type UserPreview = Pick<User, 'name' | 'email'>;
    
    const user: UserPreview = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    }

    //Omit Utility Type
    type ContactInfo = Omit<User, 'name' | 'age'>;

    const contact: ContactInfo = {
        email: 'john.doe@example.com'
    }

    //Required Utility Type
    type UserRequired = Required<User>;

    const requiredUser: UserRequired = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30
    }

    //Partial Utility Type
    type UserPartial = Partial<User>;

    const partialUser: UserPartial = {
        name: 'John Doe'
    }

    //Readonly Utility Type
    type ReadonlyUser = Readonly<User>;

    const readonlyUser: ReadonlyUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30
    }

    //Record Utility Type
       
    type MyObj = Record<string, string>;

    const myObj: MyObj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: '1000',
        
    }   
}