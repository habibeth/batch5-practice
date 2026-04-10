// Function with generics
const createArray = (param: string): string[] => {
  return [param];
};

interface User {
  name: string;
  age: number;
}

const createArrayWithGenerics = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("Hello");
const res2 = createArrayWithGenerics<string>("Hello");
const res3 = createArrayWithGenerics<number>(42); // TypeScript infers T as number
const resGenericWithObject = createArrayWithGenerics<User>({
  name: "Alice",
  age: 30,
}); // TypeScript infers T as { name: string; age: number }

// Function with Tuple

const createArraywithTuple = <T, U>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

const resTuple = createArraywithTuple<string, number>("Hello", 42); // TypeScript infers T as string and U as number
const resTupleWithObject = createArraywithTuple<User, string>(
  { name: "Bob", age: 25 },
  "Developer",
); // TypeScript infers T as { name: string; age: number } and U as string


interface Student {
    name: string;
    gmail: string;
    devType?: string;
    smartWatch?: string;
}

const addCourseToStudent = <T>(student: T): T & { course: string } => {
  const course = "Next Level Web Development";
  return { ...student, course };
};



const student1: Student & { course: string } = addCourseToStudent({
  name: "Charlie",
  gmail: "charlie@gmail.com",
  devType: "Next Level Web Development",
}); // TypeScript infers T as { name: string; gmail: string }

const student2: Student & { course: string } = addCourseToStudent({
  name: "Charlie",
  gmail: "charlie@gmail.com",
  smartWatch: "Apple Watch",
}); // TypeScript infers T as { name: string; gmail: string }