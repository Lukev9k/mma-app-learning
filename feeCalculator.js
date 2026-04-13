const students = [
    { name: "Arjun", feePaid: true, dueDate: "2026-05-01", feeAmount: 1500 },
    { name: "Riya", feePaid: false, dueDate: "2026-04-10", feeAmount: 1500 },
    { name: "Kabir", feePaid: true, dueDate: "2026-05-15", feeAmount: 2000 },
    { name: "Sneha", feePaid: false, dueDate: "2026-04-05", feeAmount: 1500 },
    { name: "Dev", feePaid: true, dueDate: "2026-05-20", feeAmount: 2000 },
  ];


  // Find students whose fee is overdue (dueDate is before today)
  const today = new Date();
  const feeOverdue = students.filter(student => new Date(student.dueDate) < today);
  feeOverdue.forEach(student => {
    const { name, dueDate } = student;
    console.log(`${name}'s fee is overdue since ${dueDate}`);
});

  // Total fee collected so far
  const totalFee = students.reduce((count, student) => {
    if (student.feePaid) {
    return count + student.feeAmount;
    }
    return count;
  }, 0);
  console.log(`Total fee collected: ${totalFee}`);
