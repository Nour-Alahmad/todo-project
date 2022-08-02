
function checkMassGender(userGender){

        if(userGender === "Female"){
    
            alert("Welcome Ms." + userName + " in toDo list website")
        }
        else if(userGender === "Male"){
            alert("Welcome Mr." + userName + " in toDo list  website")
        }
        else{
            alert("Welcome " + userName + " in toDo list  website")
        }
}

function yNqustionAnswer(q){
     let arr = [] ;

     if(q == "")
     arr.push("invalid");

     else
     arr.push(q)

     printArr(arr);

}

function printArr(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}
   

var userName = prompt("Enter your name");
var userGender = prompt("Enter your gender");
var userAge = prompt("Enter your age");

yNqustionAnswer(prompt("Do you have many tasks to do?")) ;
yNqustionAnswer(prompt("Do you have time for your tasks?")) ;
yNqustionAnswer(prompt("Can you finish all tha tasks before the deadline?")) ;

if(!confirm("confirm if you want to skip the welcoming message")){
    checkMassGender(userGender);
}
