const students = [
    { name: "Arjun", feePaid: true, dueDate: "2026-05-01" },
    { name: "Riya", feePaid: false, dueDate: "2026-04-10" },
    { name: "Kabir", feePaid: true, dueDate: "2026-05-15" },
    { name: "Sneha", feePaid: false, dueDate: "2026-04-05" },
  ];
  
  // 1. Get all students who haven't paid
  const unpaidStudents = students.filter(student => student.feePaid === false);
  console.log("Unpaid students:", unpaidStudents.map(s => s.name));
  
  // 2. Get just the names of all students
  const allNames = students.map(student => student.name);
  console.log("All students:", allNames);
  
  // 3. Check if a specific student has paid
  const arjun = students.find(student => student.name === "Arjun");
  console.log("Arjun paid?", arjun.feePaid);

  // Find students whose fee is overdue (dueDate is before today)
  const today = new Date();
  const feeOverdue = students.filter(student => new Date(student.dueDate) < today);
  console.log("Fee Overdue Students:", feeOverdue.map(s => s.name));

  // Calculate total number of students who haven't paid
const totalUnpaid = students.reduce((count, student) => {
  if (student.feePaid === false) {
    return count + 1;
  }
  return count;
}, 0);

console.log("Total unpaid:", totalUnpaid);

// 4. Destructure an object
const firstStudent = students[0];
const { name, feePaid, dueDate } = firstStudent;
console.log(name, feePaid, dueDate);

// 5. Spread operator
const updatedStudent = { ...firstStudent, feePaid: false };
console.log(updatedStudent);

// 6. Template literals
console.log(`${firstStudent.name}'s fee is due on ${firstStudent.dueDate}`);