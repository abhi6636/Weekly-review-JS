var Employee = {
    name: "John Doe",
    age: 20,
    possition : "manager",
    salary : 10000,

    getSalary(){
        document.write("salary of" + this.name+ " is " + this.salary)
    }
}

Employee.getSalary()