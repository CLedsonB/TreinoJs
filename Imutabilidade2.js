const students = [
		{
		    name: "Carl",
		    nota: 7
		},
		{
		    name: "Lari",
		    nota: 10
		},
		{
		    name: "Maicon",
		    nota: 8.8
		},
		{
		    name: "Nicolas",
		    nota: 3
		},
		{
		    name: "Pedro",
		    nota: 4.7
		}
];

function studentsApprove(studentList) {
    return studentList.filter(student => student.nota >= 7);
}

console.log("\nAlunos Aprovados:\n");
console.log(studentsApprove(students));