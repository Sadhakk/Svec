// let employee={
//     name:"sadhak",
//     designation:"junior software developer",
//     salary:"6.6LPA",
//     mobile:7731013250
// }


// console.log(employee)

// let employees=["sadhak","venky","sunil"]
// console.log(employees[1])
// alert("registration suxcessfully completd")
// l
// 
// c
//spread operator
// let external_marks=[23,45,67,12,98,32]
// let internal_marks=[23,43,21,23,2,1]
// let results=[23,34,external_marks]
// let final=[...external_marks,...internal_marks]
// console.log(final)
// console.log(results)
// rest parameter

// function addition(x,y,...remainData){
//     console.log(x,y)
//     console.log(remainData)
//      console.log(typeof(remainData))
// }
// console.log(addition(2,3,23,23,223,232,236))
// destructing of array
// let employee=["sunil","sadak","venky"]

let employee={
      uname:"sadhak",
     designation:"junior software developer",
         salary:"6.6LPA",
         mobile:7731013250
     }
     let {uname,designation,...remainList}=employee
     console.log(uname);
     console.log(designation);
     console.log(remainList);

    
