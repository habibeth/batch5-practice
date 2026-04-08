// Union Types

type FrontendDeveloper = 'fakibazDeveloper' | 'JuniorFrontendDeveloper' | 'SeniorFrontendDeveloper';
type BackendDeveloper = 'fakibazDeveloper' | 'JuniorBackendDeveloper' | 'SeniorBackendDeveloper';

type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

const developer1: FullStackDeveloper = 'fakibazDeveloper';
const developer2: FullStackDeveloper = 'JuniorFrontendDeveloper';
const developer3: FullStackDeveloper = 'SeniorBackendDeveloper';

console.log(developer1); // Output: fakibazDeveloper
console.log(developer2); // Output: JuniorFrontendDeveloper
console.log(developer3); // Output: SeniorBackendDeveloper

// Union Types with Type Aliases

type User = {
    name: string;
    email: string;
    gender: 'Male' | 'Female';
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
}

const user1: User = {
    name: "Alice",
    email: "alice@example.com",
    gender: "Female",
    bloodGroup: "A+"
};

// Intersection Types

type FrontendDeveloper1 = {
    skills: string[];
    experience: number;
    designation1: 'JuniorFrontendDeveloper' | 'SeniorFrontendDeveloper';
}

type BackendDeveloper1 = {
    skills: string[];
    experience: number;
    designation2: 'JuniorBackendDeveloper' | 'SeniorBackendDeveloper';
}

type FullStackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1;

const fullStackDeveloper: FullStackDeveloper1 = {
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git', 'Docker' ],
    experience: 5,
    designation1: 'SeniorFrontendDeveloper',
    designation2: 'SeniorBackendDeveloper'
};