class EmployeePayRoll{
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0]
        this.name = params[1]
        this.salary = params[2]
        this.gender = params[3]
        this.startDate = params[4]
    }
    get name() { return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
       if(nameRegex.test(name))
       this._name = name
       else throw "Name is Incorrect"
    }
    toString(){
        return "id:" +this.id+"Name: "+this.name+"Salary: "+this.salary +" "+"gender: "+this.gender+", StartDate: "+this.startDate;
    }
}

let employeePayRoll = new EmployeePayRoll(1,"Arpan",30000);
console.log(employeePayRoll.toString());
employeePayRoll.id = 0;
try{
employeePayRoll.name = "jeff";
console.log(employeePayRoll.toString());
}catch (e) {
    console.error(e);
}

let newEmployeePayRollData = new EmployeePayRoll(1,"Teresa",25000,"F",new Date());
console.log(newEmployeePayRollData.toString());