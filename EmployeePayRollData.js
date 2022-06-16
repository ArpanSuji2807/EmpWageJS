class EmployeePayRoll{
    id;
    salary;
    gender;
    startDate

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name() { return this._name; }
    set name(name){
        console.log("Setting: "+name);
        this._name = name;
    }
    toString(){
        return "id:" +this.id+"Name: "+this.name+"Salary: "+this.salary;
    }
}

let employeePayRoll = new EmployeePayRoll(1,"Arpan",30000);
console.log(employeePayRoll.toString());
employeePayRoll.id = 0;
employeePayRoll.name = "Jeff";
console.log(employeePayRoll.toString());