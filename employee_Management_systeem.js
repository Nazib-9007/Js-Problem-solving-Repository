let employee = [
    {
        id: 1001,
        name: 'Rahim',
        position: 'Manager',
        salary: 50000
    },
    {
        id: 1002,
        name: 'karim',
        position: 'Developer',
        salary: 450000
    }
]

function addEmployee(name, position, salary) {
    let newId = employee.length > 0 ? employee[employee.length - 1].id + 1 : 1001
    let newEmpObj = {
        id: newId,
        name: name,
        position: position,
        salary: salary
    }

    if (salary <= 0) {
        console.log('Reject Salary Interation for invalid input.');
    } else {
        employee.push(newEmpObj)
        console.log(`Successfully added new employee ID: ${newId} & Name is: ${name}`);
    }
}

addEmployee('Nazib', 'Software Engineer', 150000)

function getAllEmployee() {
    for (const emp of employee) {
        console.log(emp);
    }
}
getAllEmployee()

function findEmployee(id) {
    let foundId = null

    for (let findId of employee) {
        if (findId.id == id) {
            foundId = findId
            break
        }
    }
    if (foundId) {
        console.log(`Employee is already exits his/her id: ${id}`);
    } else {
        console.log(`Invalid move! ${id} this id doesn't exists!`);
    }
}
findEmployee(100);

function updateSalary(id, newSalary) {
    let foundId = null

    for (let findId of employee) {
        if (findId.id == id) {
            foundId = findId
            break
        }
    }
    if (foundId && newSalary > foundId.salary) {
        foundId.salary = newSalary
        console.log(`Salary is updated successfully`);
        console.log(`ID: ${id} his updated salary is: ${newSalary}`);
    } else {
        console.log('Rejected your proposal.');
    }

}

updateSalary(1003, 160000)
getAllEmployee()

function deleteEmployee(id) {
    let findId = -1

    for(let i=0; i<employee.length; i++){
        if(employee[i].id == id){
            findId = i
            break;
        }
    }
    if (findId != -1){
        let deleteEmp = employee.splice(findId, 1)
        console.log('Delete ID: '+ deleteEmp[0].name + ' ID: ',id );
    }else{
        console.log(`Handle an ID ${id} that doesn't exist.`);
    }
}

deleteEmployee(1003)
getAllEmployee()