
students = [
    {name : "haneen" ,age : 20},
    { name : "devo", age: 23 },
     {name: "fefe" , age:19}
];


function youngStudent(students) { 
    var younges = students[0];
    for (var i = 0; i < youngStudent.length; i++) {
        if (students[i].age < younges.age) {younges = students[i]}
        
    
    console.log("the youngest student:" + younges.name)
    
}
}