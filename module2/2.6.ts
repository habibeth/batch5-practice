{
  //Constraints
  interface Student {
    id: number;
    name: string;
    gmail: string;
  }

  // Function with generics and constraints
  const addCourseToStudent = <T extends Student>(
    student: T,
  ): T & { course: string } => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student1: Student & { course: string } = addCourseToStudent<Student & { devType: string }>({
    id: 1,
    name: "Charlie",
    gmail: "charlie@gmail.com",
    devType: "Next Level Web Development",
  }); // TypeScript infers T as { name: string; gmail: string }

  const student2: Student & { course: string } = addCourseToStudent<Student & { smartWatch: string }>({
    id: 2,
    name: "Charlie",
    gmail: "charlie@gmail.com",
    smartWatch: "Apple Watch",
  }); // TypeScript infers T as { name: string; gmail: string }


  const student3 = addCourseToStudent<Student & {devType: string}>({
    id: 1,
    name: "Charlie",
    gmail: "charlie@gmail.com",
    devType: "Next Level Web Development",
  }); // TypeScript infers T as { name: string; gmail: string }
}
